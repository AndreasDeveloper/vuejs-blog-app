<!-- MARKUP / HTML -->
<template>
  <div id="single-blog">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <p>Author: <strong>{{ blog.author }}</strong></p>
      <ul>
          <li v-bind:key="category" v-for="category in blog.categories">{{ category }}</li>
      </ul>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
// Importing Axios
import axios from 'axios';

export default {
    data() {
        return {
            id: this.$route.params.id, // Accessing blog id from parameters
            blog: {}
        }
    },
    // Lifecycle Hooks
    async created() {
        try {
            const getReqData = await axios.get(`https://vuejs-blog-app-d0594.firebaseio.com/posts/${this.id}.json`);
            this.blog = getReqData.data;
        } catch (err) {
            throw new Error(err);
        }
    }
}
</script>

<!-- STYLE / CSS -->
<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
}
</style>
