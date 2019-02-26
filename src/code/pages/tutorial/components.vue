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
  tutorialContent = `%3Cp%3EComponents%20are%20most%20important%20part%20of%20fort.%20It%20helps%20you%20to%20modularize%20your%20app.%3C/p%3E%0A%3Cp%3EThere%20are%20three%20components%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/wall%22%3EWall%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/shield%22%3EShiled%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/guard%22%3EGuard%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ol%3E`;
  title="GraphQl";
}
</script>
