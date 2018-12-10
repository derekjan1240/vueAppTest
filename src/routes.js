import allFreeCourse from './components/allFreeCourse.vue';
import allExtraCourse from './components/allExtraCourse.vue';
import singleCourse from './components/singleCourse.vue';
import homePage from './components/home.vue';
import login from './components/login.vue';
import profile from './components/profile.vue';

export default [
    { path: '/', component: homePage},
    { path: '/login', component: login},
    { path: '/profile', component: profile},
    { path: '/show/course/free', component: allFreeCourse},
    { path: '/show/course/extra', component: allExtraCourse},
    { path: '/show/course/:courseName', component: singleCourse}
]