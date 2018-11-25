import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import singleBlog from './components/singleBlog.vue';
import singleCourse from './components/singleCourse.vue';

export default [
    { path: '/', component: showBlog},
    { path: '/add', component: addBlog},
    { path: '/blog/:id', component: singleBlog},
    { path: '/course/:courseName', component: singleCourse}
]