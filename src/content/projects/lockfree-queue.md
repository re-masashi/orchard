---
title: "Lock-free Queue"
description: "A lock-free queue implementation in C with atomic operations"
pubDate: 2025-11-15
tags: ["c", "concurrency", "lockfree"]
featured: true
---

```c
// Node 
struct Node {
    void* data;
    atomic_uintptr_t next;
};

void enqueue(Queue* q, void* data) {
    Node* n = malloc(sizeof(Node));
    n->data = data;
    atomic_store(&n->next, 0);
    
    // Swap tail
    Node* prev = atomic_exchange(&q->tail, n);
    atomic_store(&prev->next, (uintptr_t)n);
}
```
