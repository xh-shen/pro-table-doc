/*
 * @Author: shen
 * @Date: 2022-05-09 09:05:39
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 09:05:43
 * @Description:
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<any, any, any>;
  export default component;
}
