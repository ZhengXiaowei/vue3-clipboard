<template>
  <img alt="Vue logo"
       src="./assets/logo.png">
  <button @click="onCopy">点我复制</button>
  <button v-clipboard:text="text"
          v-clipboard:success="onCopySuccess">点我复制2</button>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

import useClipboard from "./hooks/useClipboard";

export default defineComponent({
  name: "App",
  setup() {
    const text = ref("测试复制");
    const clipboard = useClipboard();

    const onCopy = () => {
      clipboard.$copyText("asd").then((r) => {
        console.log(r);
      });
    };

    const onCopySuccess = (e: ClipboardJS.Event) => {
      console.log(e);
    };

    return { text, onCopy, onCopySuccess };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
