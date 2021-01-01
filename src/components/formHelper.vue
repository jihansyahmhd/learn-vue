<template>
  <div>
      <h1>Please Fill out our form</h1>
      <form >
          <div id="form-header"></div>
            <slot name="form-header"></slot>
          <div id="form-fields"></div>
            <slot name="form-fields"></slot>
          <div id="form-controls"></div>
            <slot name="form-controls"></slot>
          <div id="useful-links"></div>
            <ul>
                <li><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
                <li><a href="#">Link3</a></li>
                <li><a href="#">Link4</a></li>
                <li><a href="#">Link5</a></li>
                <li><a href="#">Link6</a></li>
            </ul>
      </form>
  </div>
</template>

<script>


export default {
  components:{

  },
  data () {
    return {
      title:'I am Dynamic Slot title'
    }
  },methods:{
     
  }
}
</script>

<style scoped>
    h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>
