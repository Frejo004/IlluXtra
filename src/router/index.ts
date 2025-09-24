import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import MediaDetail from '../views/MediaDetail.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import MediaManagement from '../views/admin/MediaManagement.vue'
import UserManagement from '../views/admin/UserManagement.vue'
import Analytics from '../views/admin/Analytics.vue'
import Settings from '../views/admin/Settings.vue'
import Legal from '../views/Legal.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import EmailVerification from '../views/auth/EmailVerification.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'

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
    path: '/admin/media',
    name: 'AdminMedia',
    component: MediaManagement
  },
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: UserManagement
  },
  {
    path: '/admin/analytics',
    name: 'AdminAnalytics',
    component: Analytics
  },
  {
    path: '/admin/settings',
    name: 'AdminSettings',
    component: Settings
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
  },
  {
    path: '/verify-email',
    name: 'EmailVerification',
    component: EmailVerification
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router