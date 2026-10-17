---
title: "Matching over std::variant"
description: "Match over C++ std::variant in a kindof less redundant manner"
extra:
  tags: ["c++", "templates"]
  filename: "variant_macthing.hpp"
---

```cpp
template<class... Ts>
struct overload: Ts... {
  using Ts::operator()...;
};

template<class... Ts>
overload(Ts...) -> overload<Ts...>;

template<typename Variant, typename... Matchers>
auto match(Variant&& v, Matchers&&... matchers) {
  return std::visit(
    overload{
      std::forward<Matchers>(matchers)...
    },
    std::forward<Variant>(v)
  );
};
```

and in some other file...

```cpp
void myfn() {
    std::variant<int, float, std::string> data;

    auto print_variant = [](const auto& v) {
        match(v,
            [](int i) { std::cout << "Integer: " << i << "\n"; },
            [](float f) { std::cout << "Float: " << f << "\n"; },
            [](const std::string& s) { std::cout << "String: " << s << "\n"; }
        );
    };

    data = 42;
    print_variant(data);

    data = "Hello cro";
    print_variant(data);

    data = 3.14f;
    print_variant(data);

    // should output
    // Integer: 42
    // String: Hello cro
    // Float: 3.14
}
```
