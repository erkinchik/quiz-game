<template>
  <div id="q-app">
    <my-header></my-header>
    <router-view />
  </div>
</template>
<script>
import MyHeader from "components/MyHeader";
export default {
  name: "App",
  components: {
    MyHeader,
  },
};
</script>
