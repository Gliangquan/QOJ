<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

// import axios from "axios"; // @ is an alias to /src
// // axios示例代码
// axios.get("/users").then((res) => {
//   console.log(res.data);
// });

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
