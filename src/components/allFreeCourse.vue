<template>
    <div id="show-course">
        <div class="container">
            <h1>The Free Course</h1>
            <input type="text" v-model="search" placeholder="search blogs"/>
            <br><br>
            <div class="row">
                <div v-for="course in courses" :key="course._id" class="col-sm-3 py-2">
                    <div class="card h-100 text-white bg-dark">
                        <img class="card-img-top" src="https://vignette.wikia.nocookie.net/pixar/images/b/b7/Msd.png/revision/latest?cb=20111014215052" alt="Card image cap">
                        <div class="card-body">
                            <h3 class="card-title text-white">{{ course.courseName }}</h3>
                            <p class="card-text">{{ course.courseAbout }}</p>
                            <router-link v-bind:to="'/course/'+ course.courseName"><a class="btn btn-outline-secondary text-white">Go somewhere</a></router-link>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

    </div>
</template>

<script>
// Imports
import axios from 'axios';
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            courses: [],
            search: '',
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    methods: {
    },
    created() {

        axios.get('http://127.0.0.1:3000/course/free/all')
        .then((res) => {
            // this.courses = res.data.slice(0,5);
            this.courses = res.data;
            // console.log(this.courses);
        })
        .catch((error)=> {
            console.log(error);
        });

    },
    mixins: [searchMixin]
}
</script>


<style>
</style>