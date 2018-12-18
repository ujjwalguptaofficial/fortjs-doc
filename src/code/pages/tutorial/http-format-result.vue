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
  tutorialContent = `%3Cp%3EThe%20type%20HttpFormatResult%20is%20used%20for%20formatting%20http%20response.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Etype%20HttpFormatResult%20=%20%7B%0A%20%20%20%20statusCode:%20HTTP_STATUS_CODE;%0A%20%20%20%20responseFormat?:%20%7B%0A%20%20%20%20%20%20%20%20%5Btype:%20string%5D:%20()%20=&gt;%20any;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="Http Request";
}
</script>
