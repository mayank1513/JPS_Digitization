<template>
  <section id="sides">
    <div id = "left">
      <embed id="pdf" src="static/mozilla.pdf" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">
    </div>
    <div id = "right">
      <!-- You type here implement editor here -->
      <div class="editor">
        <h4>Type the text in the document shown</h4>
        <form @submit.prevent="Submit">
        <label id = "wrap"> 
          <textarea id="textbox" v-model="digitize.content" cols="150" rows="20"></textarea>
        </label>
        <label>
          Your Name  <input v-model="digitize.digitizer" type="text">
        </label>
        <button v-on:click="saveFile()" :disabled="!digitize.digitizer || !digitize.content" type="submit" class="button expanded">
          Submit
        </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      digitize:{
        content: "",
        digitizer: "",
        time: "",
      },
    }
  },
  methods: {
    Submit () {
      let digitize = { 
        content: this.digitize.content, 
        digitizer: this.digitize.digitizer, 
        time: new Date().toLocaleDateString(),
      }
    },
    saveFile: function() {
    this.digitize.time = new Date().toLocaleDateString();
    const data = this.digitize.content + "\n\nSubmitted by " + this.digitize.digitizer + " on " + this.digitize.time;
    const blob = new Blob([data], {type: 'text/plain'})
    const e = document.createEvent('MouseEvents'),
    a = document.createElement('a');
    a.download = "test.txt";
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
    e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
#wrap{
  margin: 5px;
}
#textbox {
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    display:block;/*reset from inline*/
    width:100%;
    margin:0;/*remove defaults*/
    padding:4px;
    background:#EEF;
    border:1px solid #333;
    overflow-y:auto;/*resets IE*/
    overflow-x:hidden;/*resets IE*/
}
#sides{
margin:0;
width: 99%;
background: red;
}
#left{
float:left;
width:50%;
padding: 0px;
  height: 650px;
overflow:hidden;
}
#pdf{
  width: 99%;
  height: 650px;
}
#right{
float:left;
width:50%;
overflow:hidden;
  height: 650px;
background: #42b983;
} 
</style>
