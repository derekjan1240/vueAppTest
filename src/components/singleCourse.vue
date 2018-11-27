<template>
    <div id="single-blog">
        <!-- <h1>{{ course.courseName }}</h1> -->
        <!-- <article>{{ course }}</article> -->

        <!-- 影片標題 -->
        <div class="container"> 
          <div id ='courseTitle' class="col-sm-10" style="width: 100%; padding-bottom: 20px; color: #191919">
            <h2><b> {{ course.courseName }} </b></h2>  
            <h4> Teacher: {{ course.courseAbout }} </h4>
            <h4> Introduction: {{ course.courseAbout }} </h4>
        </div>

        <!-- 影片區 -->
        <div class="container">
            <div id= "episodeList" class="col-sm-3">
            </div>    
            <div id="video" class="col-sm-6">
                <video class="video" id="videoPlayer" controls controlsList="nodownload" style="width: 100%;">
                <source v-bind:src="'/video/' + courseName + '/' + courseId" type="video/mp4">
                </video>
            </div>    
        </div>
    </div>
</template>

<script>
// Imports
import axios from 'axios';

export default {
    data () {
        return {
            courseName: this.$route.params.courseName,
            courseId: 1,
            course: {}
        }
    },
    created() {

        axios.get('http://127.0.0.1:3000/course/' + this.courseName).then((res)=>{
            // console.log(res.data);
            this.course = res.data;
        });
    }
}
</script>

<style>
</style>