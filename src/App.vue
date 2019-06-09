<!-- MARKUP / HTML -->
<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<!-- SCRIPT / JS -->
<script>
// Importing Components
import AddBlog from './components/AddBlog';
import ShowBlog from './components/ShowBlog';
import ListBlog from './components/ListBlog';
import Header from './views/Header';

export default {
  // Registering Components
  components: {
    'add-blog': AddBlog,
    'show-blog': ShowBlog,
    'list-blog': ListBlog,
    'app-header': Header
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
