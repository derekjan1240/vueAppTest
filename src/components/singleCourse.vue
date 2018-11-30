<template>
    <div id="single-blog">

        <!-- 影片標題 -->
        <div class="container"> 
          <div id ='courseTitle' class="col-sm-10" style="width: 100%; padding-bottom: 20px; color: #191919">
            <h2><b> {{ course.courseName }} </b></h2>  
            <h4> Teacher: {{ course.courseAbout }} </h4>
            <h4> Introduction: {{ course.courseAbout }} </h4>
        </div>

        <!-- 影片區 -->
        <div class="container">
            <div class="row">
            <div id= "episodeList" class="col-2">
                <ul class="list-group">
                    <li 
                        v-for="n in course.courseTotalEp" :key="n"
                        class="list-group-item"
                        v-on:click="changeSrc(n)"
                    >EP_{{ n }}</li>
                </ul>
            </div>    
            <div id="video" class="col-10">
                <video class="video" id="videoPlayer" controls controlsList="nodownload" :src="srcUrl" style="width: 100%;">
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
            srcUrl: '',
            courseId: 1,
            course: {}
        }
    },
    methods: {
        changeSrc: function(ep){
            console.log(ep);
            // this.courseId = ep;
            this.srcUrl = '/video/' + this.course.courseName + '/' + ep;
        }
    },
    created() {

        axios.get('http://127.0.0.1:3000/course/' + this.courseName).then((res)=>{
            // console.log(res.data);
            this.course = res.data;
            this.srcUrl = '/video/' + res.data.courseName + '/1';
        });
    }
}
</script>

<style>
</style>