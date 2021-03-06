import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money"
import Ious from "../ious"
import Raise from "../raise"
import '../../css/reset.scss'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
          path: '/money',
          name: 'money',
          component: Money
        },
        {
          path: '/ious',
          name: 'ious',
          component: Ious
        },
        {
          path: '/raise',
          name: 'raise',
          component: Raise
        }
    ],
})
