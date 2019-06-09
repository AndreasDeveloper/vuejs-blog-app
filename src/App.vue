<!-- MARKUP / HTML -->
<template>
  <div>
    <show-blog></show-blog>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
// Importing Components
import AddBlog from './components/AddBlog';
import ShowBlog from './components/ShowBlog';

export default {
  // Registering Components
  components: {
    'add-blog': AddBlog,
    'show-blog': ShowBlog
  }
}
</script>

<!-- STYLE / CSS -->
<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
