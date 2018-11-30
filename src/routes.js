import addBlog from './components/addBlog.vue';
import allFreeCourse from './components/allFreeCourse.vue';
import allExtraCourse from './components/allExtraCourse.vue';
import singleCourse from './components/singleCourse.vue';
import homePage from './components/home.vue';

export default [
    { path: '/', component: homePage},
    { path: '/show/course/free', component: allFreeCourse},
    { path: '/show/course/extra', component: allExtraCourse},
    { path: '/add', component: addBlog},
    { path: '/show/course/:courseName', component: singleCourse}
]