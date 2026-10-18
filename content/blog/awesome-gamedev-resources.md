---
title: "Awesome Gamedev Resources"
description: "Cool resources I found. Mostly C++ specific."
date: 2026-07-19
extra:
  tags: ["resources", "graphics", "gamedev", "c++"]
  featured: false
---

Der Name ist Programm.
I might forget these later so I thought I'd just list them here.

## AMD FidelityFX

I thought this might be slop but, it looks pretty promising.

Here's the [link](https://www.amd.com/en/products/graphics/technologies/fidelityfx.html).
FSR works across platforms (upto FSR 3 afaict).
It also offers adaptive sharpening, some screen space reflection and ambient occlusion stuff and a denoiser.

Oh, and it's open source.

## Jolt

[Jolt](https://github.com/jrouwe/JoltPhysics) is a performant physics engine with an easy to use (imo) API.
It's been used by Horizon Forbidden West and Death Stranding 2 and it's been Godot's default physics engine for a while now.

[This document](https://jrouwe.nl/jolt/JoltPhysicsMulticoreScaling.pdf) shows how Jolt performs compared to other physics engines.

## STB (specifically, stb_image)

[stb](https://github.com/nothings/stb) has a bunch of different singly file libraries ranging from lexers to perlin noise generators to image loading to leak checking and what not.

I've used stb_image and it's pretty cool.

## GLFW

[glfw](https://www.glfw.org/) is a great windowing library.

## EnTT

Just a cool little ECS [library](https://github.com/skypjack/entt).

## Tracy

[Tracy](https://github.com/wolfpld/tracy): Profiler with an ImGui viewer. Essential. Trust me.

## Assimp

[Assimp](https://github.com/assimp/assimp) can load a lot of 3D file formats. GLTF, FBX, etc.
Useful if you import 3D models.

## Meshoptimizer

[Meshoptimizer](https://meshoptimizer.org/) can be used for meshlet based culling or other optimizations.

## Miniaudio

[Miniaudio](https://github.com/mackron/miniaudio) has support for decoding and playing different audio files, 3D spatialization stuff and a node graph system for effects and filters.
