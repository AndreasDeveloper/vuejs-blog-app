<!-- MARKUP / HTML -->
<template>
  <div id="show-blogs" v-theme:column="'narrow'">
      <h1>Recent Blog Articles</h1>
      <div class="single-blog" v-bind:key="blog.id" v-for="blog in blogs">
          <h2 v-color>{{ blog.title }}</h2> <!-- CUSTOM DIRECTIVE v-color -->
          <article>{{ blog.body }}</article>
      </div>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
// Importing Axios
import axios from 'axios';

// Exporting Component
export default {
    data() {
        return {
            blogs: []
        }
    },
    // Vue's Lifecycle hooks
    async created() {
        try {
            const getReqData = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');
            this.blogs = getReqData.data;
            console.log(this.blogs)
        } catch (err) {
            throw new Error(err);
        }
    }
}
</script>

<!-- STYLE / CSS -->
<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
