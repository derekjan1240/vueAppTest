<template>
    <div id="show-blogs">
        <h1>List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <h2>{{ blog.title }}</h2>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';
import axios from 'axios';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        // axios.get('http://127.0.0.1:3000/data')
        axios.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            // console.log(data);
            this.blogs = data.body.slice(0,10);
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
</style>