<template>
  <p v-if="age > 25">{{ msg }}. Age is {{ age }}</p>
  <p v-else>Age is: {{ age }}</p>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "Age is greater that 25",
    };
  },
  props: ["age"],
};
</script>

// style scoped lang="SCSS" // $color: red; // p { // color: $color; // }

<style scoped>
p {
  color: red;
}
</style>
