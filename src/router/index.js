import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const Home = () => import('@/views/Home.vue')
const SetBar = () => import('@/views/sidebar/SetBar.vue')


const routes = [
  // {
  //   path: '',
  //   redirect: './views'
  // },
  {
    path: './views',
    component: Home
  },

  {
    path: './sidebar',
    component: SetBar
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// const originalReplace = VueRouter.prototype.replace;
// VueRouter.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// };


export default router