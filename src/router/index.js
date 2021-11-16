import vue from "vue"
import Router from "vue-router"
import Helloworld from '@/components/HelloWorld.vue'
import Link from '@/components/link.vue';
import Login from '@/components/login.vue';
import Register from "@/components/register.vue"
import Navbar from "@/components/navbar.vue"

vue.use(Router)

function configRouters() {
    return [{
            path: '/',
            name: 'HelloWorld',
            component: Helloworld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/link',
            name: 'Link',
            component: Link
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/navbar',
            name: 'Navbar',
            component: Navbar
        }
    ]
}

const link = new Router({
    mode: "history",
    routes: configRouters(),
});
export default link;