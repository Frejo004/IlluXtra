import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import MediaDetail from '../views/MediaDetail.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import Legal from '../views/Legal.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Gallery,
    props: { mediaType: 'photos' }
  },
  {
    path: '/videos',
    name: 'Videos', 
    component: Gallery,
    props: { mediaType: 'videos' }
  },
  {
    path: '/illustrations',
    name: 'Illustrations',
    component: Gallery,
    props: { mediaType: 'illustrations' }
  },
  {
    path: '/media/:id',
    name: 'MediaDetail',
    component: MediaDetail,
    props: true
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router