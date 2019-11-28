import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const { project } = process.env;
const routerMap = {};
const files = require.context("@/pages", true, /^.\/[a-zA-Z]{1,}\/router\/index.js$/);
files.keys().forEach(item => {
  const key = item.replace(/(^\.\/)|(\/router)|(\/index.js)/g, "");
  routerMap[key] = files(item).default;
});

function createRouter(router) {
  return Object.keys(router).reduce((initVal, current) => {
    return initVal.concat(router[current]);
  }, []);
}
const obj = {};
obj[project] = routerMap[project];
const routes = project ? createRouter(obj) : createRouter(routerMap);
export default new Router({
  mode: 'history',
  routes
});