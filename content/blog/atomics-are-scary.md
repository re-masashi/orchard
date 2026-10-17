---
title: "Atomics are scary"
description: "How my ETS-like term storage spent 50% of its time on atomics"
date: 2025-12-12
extra:
  tags: ["sync", "atomics", "erlang", "rust"]
  featured: false
---

Recently (around 3 months before me writing this) I decided to implement an ETS like term storage in Rust. It was a nice experiment with parallel data structures. 
I named it Crucible (not sure why. I'm terrible at naming).

## The Goal

I really liked Erlang's ETS, and (at the time) I wanted something like that for my language, Vial. 
The problem was that Vial compiled to native code (I mean, it was supposed to; I'm not done with codegen by the time of writing this). So I needed a way to have a term storage that doesnt need a VM. Between making something in C and making something in Rust and then allowing C interop, I chose the second.  

## The Thing

The keywords in my head were "parallel" and "high performance" because I like seeing a big number (ops/s) go up.  So i decided that Crucible would have various `Shard`s. My initial plan was distributing data across multiple shards to reduce contention. Each shard has its own DashMap (a concurrent hash map) and arena allocator.

I also added a `StringInterner` with atomics (AtomicUsize) to generate unique IDs for repeated strings and TTL for keys.

## Performance
The benchmark results were pretty good. Here's how it compared to ETS on my laptop (a 2015 HP ProBook 430 G2 with i5 5200U and a humble 8GB of DDR3 RAM):

| Operation | ETS (ops/sec) | Crucible (ops/sec) |
|-----------|---------------|-------------------|
| Insert (no TTL) | 713,841 | 2,058,267 |
| Get (no TTL) | 1,142,693 | 3,195,397 |
| Get (with TTL) | 1,031,598 | 2,758,140 |
| Concurrent reads | 2,109,081 | 7,785,237 |
| Concurrent writes | 1,831,131 | 2,815,764 |

That's 2-4x faster than ETS across most operations! Even with background cleanup enabled. Yay!
I don't have the benchmarks for the memory usage saved at the moment, but from what I measured, that was less too!

###### (Please applaud for me for typing the table out successfully.)

## The Atomic Problem

I wanted to squeeze out as much performance as I could (obviouslu) and decided to ~~mindlessly optimize random things~~ profile the code. So I ran flamegraphs and I found a result so shocking even the dog left.

Nearly 50% OF THE TOTAL OPERATIONS were atomics.

What slowed it down? Mostly:
1. DashMap's internal locking, which uses atomic spinlocks on shards via RawRwLock
2. Arena allocation (yes, ikr!) because the try_alloc_slice function spins in a CAS loop: `self.offset.compare_exchange_weak(current_offset, start + size, Ordering::Release, Ordering::Acquire)`
3. Reference counting because Arc<str> drops triggering atomic decrements in hashmap buckets

## But Masashi...?

Yes, atomics did help Crucible perform better, but it's ironic how the stuff that enabled safe "fearless" concurrency became (kindof) the bottleneck. I initially assumed it'd be something like too many memory allocations that are slowing it down, but I was astounded on seeing the flamegraph.

The sharding helped, but it was definitely not enough. The atomic counters (in the arena allocators and the interner) were "harming" performance.

## Okay. What now?

Can I make this perform better? Hopefully. However, I'll not be spending time on that. If I do something related to this, it'd be writing bindings for various languages.

But for now, Crucible remains an example as to why atomics are scawy and why benchmarks without flamegraphs only tell less than half of the story.

