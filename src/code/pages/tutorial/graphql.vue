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
  tutorialContent = `%3Cp%3EFortJs%20provides%20a%20seperate%20package%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/fortjs-graphql%22%3Efort-graphql%3C/a%3E%20for%20integration%20of%20graphql.%3C/p%3E%0A%3Ch2%20id=%22uses%22%3EUses%3C/h2%3E%0A%3Col%3E%0A%3Cli%3E%3Ccode%3Enpm%20i%20fortjs-graphql%3C/code%3E%20or%20%3Ccode%3Eyarn%20add%20fortjs-graphql%3C/code%3E%3C/li%3E%0A%3Cli%3ECreate%20a%20controller%20and%20inherit%20%3Ccode%3EFortGraphQl%3C/code%3E%20%3C/li%3E%0A%3C/ol%3E%0A%3Cul%3E%0A%3Cli%3ECreate%20a%20default%20worker%20and%20call%20%3Ccode%3EprocessGraphQl%3C/code%3E%20inside%20it.%20%3C/li%3E%0A%3Cli%3EFor%20graphiql%20,%20create%20another%20worker%20and%20call%20%3Ccode%3EgetGraphiqlUi%3C/code%3E%20inside%20it.%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20HTTP_METHOD,%20DefaultWorker,%20Worker%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20FortGraphQl%20%7D%20from%20%22fort-graphql%22;%0Aexport%20const%20graphqlSchema%20=%20%60%0Atype%20Query%20%7B%0A%20%20hello:%20String%0A%7D%0A%60;%0A%0Aexport%20class%20GraphQlController%20extends%20FortGraphQl%20%7B%0A%20%20%20%20rootValue%20=%20%7B%20hello:%20()%20=&gt;%20'Hello%20world!'%20%7D;%0A%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super(graphqlSchema);%0A%20%20%20%20%7D%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20This%20method%20will%20be%20used%20to%20process%20graphql%20query%20%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@returns%0A%20%20%20%20%20*%20@memberof%20GraphQlController%0A%20%20%20%20%20*/%0A%20%20%20%20@DefaultWorker(%5BHTTP_METHOD.Get,%20HTTP_METHOD.Post%5D)%0A%20%20%20%20async%20%20default()%20%7B%0A%20%20%20%20%20%20%20%20return%20this.processGraphQl();%0A%20%20%20%20%7D%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20This%20method%20will%20return%20graphiql%20%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@returns%0A%20%20%20%20%20*%20@memberof%20GraphQlController%0A%20%20%20%20%20*/%0A%20%20%20%20@Worker()%0A%20%20%20%20async%20%20graphiql()%20%7B%0A%20%20%20%20%20%20%20%20return%20this.getGraphiqlUi();%0A%20%20%20%20%7D%0A%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="GraphQl";
}
</script>
