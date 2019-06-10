<!-- MARKUP / HTML -->
<template>
  <div id="show-blogs" v-theme:column="'narrow'">
      <h1>List Blog Titles</h1>
      <input type="text" v-model="search" placeholder="Search Blogs">
      <div class="single-blog" v-bind:key="blog.id" v-for="blog in filteredBlogs">
          <h2 v-color>{{ blog.title | to-uppercase }}</h2> <!-- CUSTOM DIRECTIVE v-color -->
          <article>{{ blog.body | snippet }}</article>
      </div>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
// Importing Axios
import axios from 'axios';
// Importing other files
import searchMixin from '../mixins/searchMixin';

// Exporting Component
export default {
    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    // Vue's Lifecycle hooks
    async created() { // Getting Seed Blog Data
        try {
            const getReqData = await axios.get('https://vuejs-blog-app-d0594.firebaseio.com/posts.json');
            this.blogs = getReqData.data;
        } catch (err) {
            throw new Error(err);
        }
    },
    // Computted Properties
    computed: {
    },
    // Filters
    filters: {
        // Uppercase Values
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    // Directives
    directives: {
        // Random Color Directive
        'color': {
            bind(el, binding, vnode) {
                el.style.color = `#${Math.random().toString().slice(2, 8)}`; // Randomize color of element
            }
        }
    },
    // Mixins
    mixins: [searchMixin]
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
input { width: 96%; padding: 10px; }
</style>
