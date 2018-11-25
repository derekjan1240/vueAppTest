<template>
    <div id="single-blog">
        <h1>{{ course.courseName }}</h1>
        <article>{{ course }}</article>
    </div>
</template>

<script>
// Imports
import axios from 'axios';

export default {
    data () {
        return {
            courseName: this.$route.params.courseName,
            course: {}
        }
    },
    created() {

        axios.get('http://127.0.0.1:3000/course/free/' + this.courseName).then((res)=>{
            // console.log(res.data);
            this.course = res.data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>