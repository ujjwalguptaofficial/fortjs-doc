<template src="../views/index.html"></template>

<style scoped>
@import url("~/styles/index.css");
</style>
<style>
.logo {
  visibility: hidden;
}
.v-toolbar {
  background-color: black !important;
}

.application--wrap {
  background: black;
}
</style>

<script>
export default {
  head() {
    return {
      title: `Fort based MVC web framework for nodejs`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "keywords",
          name: "keywords",
          content: "javascript, node, es6, mvc, framework, typescript"
        }
      ]
    };
  }
};
</script>

