<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// 因为String是js的String类 string才是ts的字符串类型
type Styles = {
  color: string;
  backgroundColor: string;
  height: string;
  width: string;
};

const msg: string = "你看看我是谁";
const ismsg: Boolean = false;
const style1: Styles = {
  color: "red",
  backgroundColor: "blue",
  height: "30px",
  width: "30px",
};

const clickParent = () => {
  console.log("老大");
};

const clicktipe = () => {
  console.log(123);
};
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div>{{ msg }}</div>
  <div>{{ ismsg ? "1" : "2" }}</div>
  <div @click="clickParent">
    <button @click.stop="clicktipe">点击 >>>> {{ msg }}</button>
  </div>
  <div :style="style1">123123</div>
</template>

<style scoped></style>
