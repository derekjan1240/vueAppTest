<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
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
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
body{
    margin: 0;
    font-family: 'Noto Sans TC', 'Nunito SemiBold';
}
</style>
