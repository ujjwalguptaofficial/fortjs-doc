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
  tutorialContent = `%3Cp%3EThe%20type%20ViewEngineData%20is%20used%20by%20ViewEngine%20to%20get%20view%20related%20data%20from%20workers.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Etype%20ViewEngineData%20=%20%7B%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20name%20of%20the%20view%20or%20path%20of%20view%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%7D%0A%20%20%20%20%20*/%0A%20%20%20%20view:%20string;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20view%20model%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7B*%7D%0A%20%20%20%20%20*/%0A%20%20%20%20model:%20any;%0A%7D;%0A%3C/code%3E%3C/pre%3E`;
  title="View Engine Data";
}
</script>
