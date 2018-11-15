/**
 * Created by zhiyuan.huang@ddder.net.
 */

export default function loader(source) {
    this.cacheable();
    return `
${source}
(function() {
  for (let key in module.exports) {
    if (module.exports.hasOwnProperty(key)) global[key] = module.exports[key];
  }
})();
`;
}
