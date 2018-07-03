<template>
  <div id="app">
    <h3> Please select the file to Digitize </h3>
    <ol>
      <h2> <li v-for="fileName in fileNames">
        <router-link :to="{ name: 'DigitizationPage',params: { id: fileName.fileName}}">{{fileName.fileName}} </router-link>
      </li> </h2>
    </ol>
  </div>
</template>

<script>
export default{
  name: 'Index1',
  data(){
    return{
      fileNames: [{fileName:"mozilla"}, {fileName:"sde"}, {fileName:"sdevice_ug"}, 
      {fileName:'sense_ug'}, {fileName:'Sentaurus'}],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
text-align: left;
background: azure;
width: 100%;
height: 700px;
}
a {
  color: #42b983;
}
</style>
