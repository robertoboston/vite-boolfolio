import {createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import Contacts from './pages/Contacts.vue';


const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            name : 'homepage',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'post_list',
            component: PostList,
        },
        {
            path:'/blog/:slug',
            name: 'single-post',
            component: SinglePost,
        },
        {
            path:'/contatti',
            name:'contacts',
            component: Contacts,
        }
    ]
})

export {router};