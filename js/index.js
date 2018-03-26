import app from "../src/app.js";
import Home from "../src/module/home.js";
import User from "../src/module/user.js";
import About from "../src/module/about.js";
import NotFound from "../src/module/404.js";

app.start({
  matchers: [
    '/user/:uid'
  ],
  rules: [
    {
      matcher: /\/user\/[\d]+?$/,
      target: '/user'
    }
  ],
  routers: {
    '/': Home,
    '/user': User,
    '/about': About,
    '/404': NotFound
  },
  routerConfig: {
    parent: document.querySelector('#app .content')
  }
})