/**
 * @name ConfigWindiCSSPlugin
 * @description 监听配置文件修改自动重启Vite
 */

// WindiCSS
import WindiCSS from 'vite-plugin-windicss';

export const ConfigWindiCSSPlugin = () => {
  return WindiCSS();
};
