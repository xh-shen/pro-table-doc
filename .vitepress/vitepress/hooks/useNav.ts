/*
 * @Author: shen
 * @Date: 2022-05-09 14:06:16
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 14:06:28
 * @Description:
 */
import { computed } from "vue";
import { useData } from "vitepress";

export default () => {
  const { theme } = useData();

  return computed(() => {
    return theme.value.nav;
  });
};
