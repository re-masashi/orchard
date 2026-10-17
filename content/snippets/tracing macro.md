---
title: "Scoped Tracing Macro"
description: "Trace execution time for a function with a macro (for C++)"
extra:
  tags: ["c++", "macro", "tracing"]
  filename: "trace_macro.hpp"
---

```cpp
class ScopedTracer {
public:
  ScopedTracer(std::string name) : m_name(std::move(name)), m_start(std::chrono::steady_clock::now()) {}
  ~ScopedTracer() {
    auto end = std::chrono::steady_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end-m_start);
    std::cout << "[TRACE] " << m_name << " took " << duration.count() << "us" << std::endl;
  }
private:
  std::string m_name;
  std::chrono::steady_clock::time_point m_start;
};
  
#define TRACE_SCOPE() ScopedTracer tracer_##__LINE__(__FUNCTION__)
```
