<template>
<div>
    <h1>List Of ninjas</h1>
    <ul>
        <li v-for="ninja in ninjas">{{ninja}} </li>
    </ul>
</div>
    
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      ninjas:['Yoshi','Mario','Ryu']
    }
  }
}
</script>

<style scoped>

</style>
