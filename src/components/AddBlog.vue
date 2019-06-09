<!-- MARKUP / HTML -->
<template>
  <div id="add-blog">
      <div id="write-blog-area">
      <h2>Add a New Blog Post</h2>
      <form>
          <label>Blog Title:</label>
          <input type="text" required v-model="blog.title">
          <label>Blog Content:</label>
          <textarea required v-model="blog.content"></textarea>
          <!-- BLOG CATEGORIES -->
          <div id="checkboxes">
              <label>Front-End</label>
              <input type="checkbox" value="front-end" v-model="blog.categories" />
              <label>Back-End</label> 
              <input type="checkbox" value="back-end" v-model="blog.categories" />
              <label>Full-Stack</label>
              <input type="checkbox" value="full-stack" v-model="blog.categories" />
              <label>Server Only</label>
              <input type="checkbox" value="server only" v-model="blog.categories" />
          </div>
      </form>
      </div>

      <div id="preview-area">
          <h3>Preview Blog</h3>
          <p>Blog Title: {{ blog.title }}</p>
          <p>Blog Content:</p>
          <p>{{ blog.content }}</p>
          <p>Blog Categories:</p>
          <ul>
              <li v-bind:key="category.id" v-for="category in blog.categories">{{ category }}</li>
          </ul>
      </div>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
export default {
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: []
            }
        }
    },
}
</script>

<!-- STYLE / CSS -->
<style scoped>
#add-blog { margin: 20px auto; max-width: 500px; }

#write-blog-area {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
    padding-bottom: 15px;
}
label { display: block; margin: 10px 0; }
input, textarea { width: 100%; padding: 5px; }
h2 { font-size: 30px; }

#checkboxes {
    display: flex;
    align-items: center;
    justify-content: center;
}
#checkboxes label, #checkboxes input { padding: 0 10px; }
#checkboxes input { width: 10px; }

#preview-area {
    border: 1px dotted black;
    padding: 5px 20px;
}
</style>
