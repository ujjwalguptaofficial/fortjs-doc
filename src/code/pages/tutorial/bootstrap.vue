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
  tutorialContent = `%3Cp%3EIn%20order%20to%20bootstrap%20the%20app,%20you%20need%20to%20perform%20two%20steps%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ECreate%20a%20class%20which%20will%20extend%20the%20class%20%3Ccode%3EFort%3C/code%3E%20from%20'fortjs'.%3C/li%3E%0A%3Cli%3ECreate%20an%20object%20and%20call%20the%20method%20create.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ALet's%20see%20an%20example%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20//add%20routers%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D%0A%0Anew%20App().create();%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EClass%20Fort%20exposes%20certain%20member%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Erouters%20-%20array%20of%20routes.%3C/li%3E%0A%3Cli%3Ewalls%20-%20array%20of%20walls.%3C/li%3E%0A%3Cli%3EhttpServer%20-%20instance%20of%20http%20server.%3C/li%3E%0A%3Cli%3Ecreate%20-%20a%20method%20which%20will%20start%20the%20server.%3C/li%3E%0A%3Cli%3Edestroy%20-%20a%20method%20which%20will%20stop%20the%20server.%3C/li%3E%0A%3C/ul%3E`;
  title="Bootstrap";
}
</script>
