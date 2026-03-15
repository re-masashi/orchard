import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { visit } from "unist-util-visit";

function remarkFilename() {
  return (tree) => {
    visit(tree, "code", (node) => {
      const info = node.lang || "";
      const match = info.match(/(\S+)\s+(.+)/);
      if (match) {
        node.lang = match[1];
        node.meta = { filename: match[2] };
      }
    });
  };
}

function rehypeCodeWrapper() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "pre" && parent?.tagName !== "div") {
        const filename = node.properties?.filename;

        const wrapper = {
          type: "element",
          tagName: "div",
          properties: { className: ["code-block"] },
          children: [
            {
              type: "element",
              tagName: "div",
              properties: { className: ["code-header"] },
              children: [
                {
                  type: "element",
                  tagName: "div",
                  properties: { className: ["code-dot", "border-red-400"] },
                },
                {
                  type: "element",
                  tagName: "div",
                  properties: { className: ["code-dot", "border-yellow-400"] },
                },
                {
                  type: "element",
                  tagName: "div",
                  properties: { className: ["code-dot", "border-green-400"] },
                },
                filename
                  ? {
                      type: "element",
                      tagName: "span",
                      properties: {
                        className: [
                          "ml-2",
                          "text-xs",
                          "font-mono",
                          "text-fg-subtle",
                        ],
                      },
                      children: [{ type: "text", value: filename }],
                    }
                  : null,
              ].filter(Boolean),
            },
            node,
          ],
        };

        parent.children[index] = wrapper;
      }
    });
  };
}

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
      langs: ["c++", "javascript", "typescript", "rust", "c"],
      wrap: true,
    },
  },
  hooks: {
    "astro:config:setup": ({ config }) => {
      config.markdown.remarkPlugins.push(remarkFilename);
      config.markdown.rehypePlugins.push(rehypeCodeWrapper);
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
