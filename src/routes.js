import addBlog from './components/addBlog.vue';
import allFreeCourse from './components/allFreeCourse.vue';
import allExtraCourse from './components/allExtraCourse.vue';
import singleCourse from './components/singleCourse.vue';


export default [
    { path: '/', component: allFreeCourse},
    { path: '/course/free', component: allFreeCourse},
    { path: '/course/extra', component: allExtraCourse},
    { path: '/add', component: addBlog},
    { path: '/course/:courseName', component: singleCourse}
]