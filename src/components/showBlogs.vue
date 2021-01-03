<template>
  <!-- <div v-theme:column="'wide'" id="show-blogs"> -->
  <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="seach box"/>
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{ blog.title |toUppercase}}</h2></router-link>
            <article>{{ blog.body|snippet }}</article>
        </div>
    </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
import searchMixin from '../mixins/searchMixins'

export default {

  data () {
    return {
        blogs:[],
        search:''
    }
  },methods:{
     
  },
  created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
        this.blogs = data.body.slice(0,10);
    });
  },
  computed:{

  },
  filters:{
    toUppercase(value){
      return value.toUpperCase()
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        let colors=Math.random().toString().slice(2,8);
        console.log(colors)
        el.style.color="#"+colors;
      }
    }
  },
  mixins:[searchMixin]
}
</script>

<style >
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
