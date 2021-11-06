<template>
  <p>The user is {{ age }} years old</p>
  <button @click="onClickAge">Update age event</button>
  <button @click="ageChangeFn(3)">Update Age with callback function</button>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      // type: [Number, String]
      // required: true,
      // default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"],
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
};
</script>

<style></style>
