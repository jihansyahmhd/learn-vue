<template>
  <div>
    <!-- <add-blog></add-blog> -->
        <!-- <show-blog></show-blog>
        <list-blogs></list-blogs> -->
        <app-header></app-header>
        <router-view></router-view>

  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'


export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlog,
    'list-blogs':listBlogs,
    'app-header':header
  },
  data () {
    return {
    }
  },methods:{
     
  }
}
</script>

<style >
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
