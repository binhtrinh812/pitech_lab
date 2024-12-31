import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home/Home.vue';
import About from './views/About/About.vue';
import SoftwareDevelopment from './views/Training/PTPM.vue';
import Team from './views/Team/Team.vue';
import Blog from './views/Blog/Blog.vue';
import Contact from './views/Contact/Contact.vue';
import FaceRecognition from './views/Product/Product.vue';
import BlogNews from './views/Blog/BlogNews/BlogNews.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/training/software-development',
    name: 'SoftwareDevelopment',
    component: SoftwareDevelopment
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
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
    path: '/product/ai/face-recognition',
    name: 'FaceRecognition',
    component: FaceRecognition
  },
  {
    path: '/blog/:id',
    name: 'BlogNews',
    component: BlogNews
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
