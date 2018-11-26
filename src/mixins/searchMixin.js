export default {
    computed: {
        filteredBlogs: function(){
            return this.courses.filter((course) => {
                return course.courseName.match(this.courseName);
            });
        }
    }
};