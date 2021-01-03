import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routers/routes'
// global declaration Below
// import Ninjas from './Ninjas.vue'

// Vue.component('ninjas',Ninjas)
Vue.use(VueResource)
Vue.use(VueRouter)
// Custom Directive

// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     let colors=Math.random().toString().slice(2,8);
//     console.log(colors)
//     el.style.color="#"+colors;
//   }
// });
// Filters
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase()
// });

const router =new VueRouter({
  routes:Routes,
  mode:'history'
});
Vue.filter('snippet',function(value){
  return value.slice(0,100)+'...'
});
export const bus=new Vue(); 
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=="wide"){
      el.style.maxWidth="1200px";
    }else if(binding.value=='narrow'){
      el.style.maxWidth="560px"
    }
    if(binding.arg=="column"){
      el.style.background='#ddd'
      el.style.padding='20px'
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
  ,router:router
})
