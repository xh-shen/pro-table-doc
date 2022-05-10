/*
 * @Author: shen
 * @Date: 2022-05-10 16:50:37
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 16:51:00
 * @Description:
 */
import { computed } from "vue";
import { useData } from "vitepress";
import { createGitHubUrl } from "../utils";

import type { Ref } from "vue";

export default (path: Ref<string>) => {
  const { theme } = useData();

  const demoUrl = computed(() => {
    const {
      repo,
      docsDir = "",
      docsBranch = "dev",
      docsRepo = repo,
    } = theme.value;

    return createGitHubUrl(docsRepo, docsDir, docsBranch, path.value);
  });

  return demoUrl;
};
