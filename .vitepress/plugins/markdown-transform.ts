import path from "path";

import type { Plugin } from "vite";

export function MarkdownTransform(): Plugin {
  return {
    name: "shen-md-transform",
    enforce: "pre",
    async transform(code, id) {
      if (!id.endsWith(".md")) return;

      const componentId = path.basename(id, ".md");
      const scriptSetups = `const demos = import.meta.globEager('../examples/${componentId}/*.vue')`;
      return combineMarkdown(code, combineScriptSetup(scriptSetups));
    },
  };
}

const combineScriptSetup = (code) =>
  `\n<script setup>
${code}
</script>
`;

const combineMarkdown = (code: string, header: string) => {
  const frontmatterEnds = code.indexOf("---\n\n") + 4;
  const firstSubheader = code.search(/\n## \w/);
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader;
  code = code.slice(0, sliceIndex) + header + "\n" + code.slice(sliceIndex);
  return `${code}\n`;
};
