/*
 * @Author: shen
 * @Date: 2022-05-10 16:51:47
 * @LastEditors: shen
 * @LastEditTime: 2022-05-10 16:55:11
 * @Description:
 */
import { utoa } from "../utils";

const MAIN_FILE_NAME = "App.vue";

export default (source: string) => {
  const code = decodeURIComponent(source);
  const originCode = {
    [MAIN_FILE_NAME]: code,
  };

  const encoded = utoa(JSON.stringify(originCode));
  const link = `https://element-plus.run/#${encoded}`;
  return {
    encoded,
    link,
  };
};
