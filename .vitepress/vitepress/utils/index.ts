/*
 * @Author: shen
 * @Date: 2022-05-09 13:26:20
 * @LastEditors: shen
 * @LastEditTime: 2022-05-09 14:52:39
 * @Description:
 */
import type { Route } from "vitepress";

import {
  isActive,
  normalize,
  endingSlashRE,
  isExternal,
} from "vitepress/dist/client/theme-default/utils";

export {
  isArray,
  isNullish,
  isExternal,
  isActive,
  normalize,
  joinUrl,
  ensureEndingSlash,
  ensureStartingSlash,
  removeExtention,
} from "vitepress/dist/client/theme-default/utils";

export const isActiveLink = (
  route: Route,
  pathPattern: string,
  match?: boolean
) => {
  if (!match) return isActive(route, pathPattern);
  const regex = new RegExp(pathPattern);

  return regex.test(normalize(`/${route.data.relativePath}`));
};
