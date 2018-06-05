<template>
  <div class="hello">
  	
    <carhead></carhead>
    
  </div>
</template>

<script>
	import Carhead from '@/components/Shopingcar/Shopingcar.vue'
	
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {Carhead}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
