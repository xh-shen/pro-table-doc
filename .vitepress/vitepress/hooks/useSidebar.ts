/*
 * @Author: shen
 * @Date: 2022-05-09 11:56:22
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 13:28:14
 * @Description:
 */
import { computed } from "vue";
import { useRoute, useData } from "vitepress";
import { isArray, ensureStartingSlash, removeExtention } from "../utils";

export default () => {
  const route = useRoute();
  const { site, page } = useData();
  if (!page.value) {
    return {
      sidebars: computed(() => []),
      hasSidebar: computed(() => false),
    };
  }
  const sidebars = computed(() => {
    if (page.value.frontmatter.sidebar === false) return [];

    const sidebars = getSidebarConfig(
      site.value.themeConfig.sidebars,
      route.data.relativePath
    );
    return sidebars;
  });

  return {
    sidebars,
    hasSidebar: computed(() => sidebars.value.length > 0),
  };
};

type SidebarItem = {
  text: string;
  link: string;
};

type SidebarConfig = SidebarItem[];

type Sidebar =
  | {
      [key: string]: SidebarConfig;
    }
  | false
  | "auto";

export function getSidebarConfig(sidebar: Sidebar, path: string) {
  if (sidebar === false || Array.isArray(sidebar) || sidebar === "auto") {
    return [];
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
