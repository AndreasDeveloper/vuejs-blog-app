<!-- MARKUP / HTML -->
<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
// Importing Components
import AddBlog from './components/AddBlog';

export default {
  // Registering Components
  components: {
    'add-blog': AddBlog
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
