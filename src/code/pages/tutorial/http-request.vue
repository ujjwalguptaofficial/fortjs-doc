<template>
<Tutorial v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "../../components/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = `%3Cp%3EThe%20type%20HttpRequest%20is%20used%20for%20accessing%20request%20resources%20like%20url,%20headers%20etc.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Etype%20HttpRequest%20=%20%7B%0A%20%20%20%20url:%20string;%0A%20%20%20%20method:%20HTTP_METHOD;%0A%20%20%20%20headers:%20IncomingHttpHeaders;%0A%20%20%20%20connection:%20net.Socket;%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="Http Request";
}
</script>
