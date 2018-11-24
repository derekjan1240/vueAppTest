<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
    </div>
</template>

<script>
// Imports
import axios from 'axios';

export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {

        // axios.get('http://127.0.0.1:3000/data')
        axios.get('http://127.0.0.1:3000/data/' + this.id).then((res)=>{
            console.log(res.data);
            this.blog = res.data;
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