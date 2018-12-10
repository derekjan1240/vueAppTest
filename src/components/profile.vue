<template>
    <div id="show-course">
        <div class="container">
            <h1>Profile</h1>
        </div>

    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            courses: [],
            search: ''
        }
    },
    methods: {
    },
    created() {

        // this.$http.get('http://127.0.0.1:3000/profile/')
        // .then((res) => {
        //     this.courses = res.data;
        //     // console.log(this.courses);
        // })
        // .catch((error)=> {
        //     console.log(error);
        // });

    },
    mixins: [searchMixin]
}
</script>


<style>
</style>