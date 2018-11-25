<template>
    <div id="show-blogs">
        <h1>All Free Course</h1>
        <input type="text" v-model="search" placeholder="search blogs" />

        <div v-for="course in courses" :key="course._id" class="single-blog">
            <router-link v-bind:to="'/course/'+ course.courseName"><h2>{{ course.courseName }}</h2></router-link>
            <article>{{ course.courseAbout }}</article>
        </div>

        <div v-for="course in courses" :key="course._id" class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://vignette.wikia.nocookie.net/pixar/images/b/b7/Msd.png/revision/latest?cb=20111014215052" alt="Card image cap">
            <div class="card-body">
                <router-link v-bind:to="'/course/'+ course.courseName"><h5 class="card-title">{{ course.courseName }}</h5></router-link>
                <p class="card-text">{{ course.courseAbout }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
            blogs: [],
            search: '',
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    methods: {
        countDownChanged (dismissCountDown) {
          this.dismissCountDown = dismissCountDown
        },
        showAlert () {
          this.dismissCountDown = this.dismissSecs
        }
    },
    created() {

        axios.get('http://127.0.0.1:3000/course/free/all')
        .then((res) => {
            this.courses = res.data.slice(0,5);
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
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
}

img {
    border-radius: 5px 5px 0 0;
}

</style>