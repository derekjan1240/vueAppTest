<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import showBlog from './components/showBlog.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue'; 


export default {
    components: {
        'app-header': header
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
body{
    margin: 0;
    font-family: 'Noto Sans TC', 'Nunito SemiBold';
}
</style>
