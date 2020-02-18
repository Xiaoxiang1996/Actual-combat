import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Worth from '../pages/Worth/Worth.vue'
import Shop from '../pages/Shop/Shop.vue'
import Personal from '../pages/Personal/Personal.vue'

export default [
    {
        path:'/home',
        component: Home,
        meta: {
            isShowFooter:true
        }
    },
    {
        path: '/sort',
        component: Sort,
        meta: {
            isShowFooter:true
        }
    },
    {
        path: '/worth',
        component: Worth,
        meta: {
            isShowFooter:true
        }
    },
    {
        path: '/shop',
        component: Shop,
        meta: {
            isShowFooter:true
        }
    },
    {
        path: '/personal',
        component: Personal,
        meta: {
            isShowFooter:true
        }
    },
    {
        path: '/',
        redirect: '/home'
    },
]