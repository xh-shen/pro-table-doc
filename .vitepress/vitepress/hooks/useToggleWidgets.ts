/*
 * @Author: shen
 * @Date: 2022-05-09 16:26:43
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 16:26:48
 * @Description:
 */
import { watch } from "vue";

import { isClient } from "@vueuse/core";
import type { Ref } from "vue";

export default (watchSource: Ref<boolean>, handler: (e: Event) => void) => {
  if (!isClient) return;

  watch(
    () => watchSource.value,
    (val) => {
      if (val) {
        window.addEventListener("resize", handler);
      } else {
        window.removeEventListener("resize", handler);
      }
    }
  );
};
