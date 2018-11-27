import addBlog from './components/addBlog.vue';
import allFreeCourse from './components/allFreeCourse.vue';
import allExtraCourse from './components/allExtraCourse.vue';
import singleCourse from './components/singleCourse.vue';


export default [
    { path: '/', component: allFreeCourse},
    { path: '/show/course/free', component: allFreeCourse},
    { path: '/show/course/extra', component: allExtraCourse},
    { path: '/add', component: addBlog},
    { path: '/show/course/:courseName', component: singleCourse}
]