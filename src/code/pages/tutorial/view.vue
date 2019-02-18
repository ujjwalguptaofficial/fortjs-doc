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
  tutorialContent = `%3Cp%3EA%20view%20is%20rendered%20using%20the%20method%20%3Ccode%3EviewResult%3C/code%3E.%20The%20viewResult%20accepts%20two%20parameters%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3Eview%20name%20or%20id%3C/li%3E%0A%3Cli%3Emodel%3C/li%3E%0A%3C/ol%3E%0A%3Cp%3E%3Cbr%3E%0ALet's%20see%20an%20example%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20const%20model%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title:%20'FortJs'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20viewResult('index',model);%0A%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EBy%20default%20fortjs%20provides%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/eshtml%22%3Eeshtml%3C/a%3E%20as%20view%20engine.%20But%20any%20view%20engine%20like%20-%20handlebar,%20ejs,%20mustache%20etc%20can%20be%20used.%3C/p%3E%0A%3Cp%3EFor%20configuring%20other%20view%20engine,%20please%20read%20the%20docs%20-%20%3Ca%20href=%22/tutorial/view-engine%22%3EviewEngine%3C/a%3E%3C/p%3E`;
  title="View";
}
</script>
