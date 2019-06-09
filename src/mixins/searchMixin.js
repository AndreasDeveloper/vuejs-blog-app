// Exporting Object
export default {
    computed: {
        // Filter Blog Titles - Search System
        filteredBlogs() {
            return this.blogs.filter(el => {
                return el.title.match(this.search);
            });
        }
    }
}