<template>
  <div id="app">
    <div class="container">
      <div class="toolbar">
        <h1>JPS Archives Digitization</h1>
        <router-link id="nav" v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      </div>
      <router-view @authenticated="setAuthenticated"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      authenticated: false,
      mockAccount: {
        username: "hare@hk.com",
        password: "krishna"
      }
    }
  },
  name: 'App',
  mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
}
</script>

<style>
.toolbar{
  background: palegoldenrod;
}
#nav{
  float: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
