/*
 * @Author: shen
 * @Date: 2022-05-10 09:52:42
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 09:52:50
 * @Description:
 */
import { useDark, useToggle } from "@vueuse/core";

export const isDark = useDark({
  storageKey: "el-theme-appearance",
});

export const toggleDark = useToggle(isDark);
