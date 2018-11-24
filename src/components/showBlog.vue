<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        
        <!-- <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title }}</h2></router-link>
            <article>{{ blog.body }}</article>
        </div> -->

        <div v-for="course in courses" :key="course._id" class="single-blog">
            <router-link v-bind:to="'/blog/1'"><h2>{{ course.courseName }}</h2></router-link>
            <article>{{ course.courseAbout }}</article>
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
            search: ''
        }
    },
    methods: {
    },
    created() {

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // http://127.0.0.1:3000/course/free/all
        // http://127.0.0.1:3000/data
        axios.get('http://127.0.0.1:3000/course/free/all')
        .then((response) => {
            console.log(response);
            // this.blogs = response.data.slice(0,5);
            this.courses = response.data.slice(0,5);
            console.log(this.courses);
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
</style>