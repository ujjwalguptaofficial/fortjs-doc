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
  tutorialContent = `%3Cp%3EComponents%20are%20most%20important%20part%20of%20fort.%20It%20helps%20you%20to%20modularize%20your%20app.%3C/p%3E%0A%3Cp%3EThere%20are%20three%20types%20of%20components%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/wall%22%3EWall%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/shield%22%3EShiled%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/guard%22%3EGuard%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ol%3E%0A%3Ch1%20id=%22concept%22%3EConcept%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AIf%20you%20will%20imagine%20-%20it%20will%20be%20like%20:%20your%20fort%20is%20consist%20of%20Walls,%20shields%20and%20guards.%20%3C/p%3E%0A%3Cp%3ELet's%20consider%20a%20real%20fort%20which%20has%20a%20big%20market%20and%20it%20allows%20people%20from%20outside%20to%20purchase%20and%20sell.%20They%20can%20go%20to%20any%20sections%20and%20sell%20or%20purchase%20their%20stuffs.%3C/p%3E%0A%3Cp%3ENow%20we%20might%20have%20situations,%20where%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3ESome%20persons%20are%20not%20allowed%20to%20enter%20inside%20the%20fort%20%20%3C/li%3E%0A%3Cli%3EAllowed%20inside%20the%20fort%20%20but%20not%20sections%3C/li%3E%0A%3Cli%3EAllowed%20inside%20the%20fort%20and%20section%20but%20not%20a%20particular%20place%20inside%20the%20sections.%3C/li%3E%0A%3C/ol%3E%0A%3Cp%3E%3Cbr%3EComponents%20are%20in%20heirarchy%20order,%20where%20Wall%20is%20at%20top,%20Shield%20is%20in%20middle%20and%20Guard%20is%20at%20bottom.We%20can%20use%20this%20above%20concept%20to%20solve%20above%20problems%20-%20%20%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3EIn%20order%20to%20block%20person%20from%20entering%20into%20fort%20-%20we%20need%20to%20block%20them%20using%20%3Cstrong%3Ewall%3C/strong%3E.%3C/li%3E%0A%3Cli%3ENow%20person%20is%20allowed%20to%20enter%20inside%20the%20fort%20(passed%20from%20wall),%20but%20not%20allowed%20inside%20some%20particular%20section.%20To%20solve%20this%20problem%20we%20need%20to%20create%20a%20%3Cstrong%3Eshield%3C/strong%3E%20which%20will%20block%20them%20to%20entering%20inside%20the%20section.%20%3C/li%3E%0A%3Cli%3ENow%20person%20is%20allowed%20to%20enter%20both%20wall,%20section%20but%20not%20some%20particular%20place%20inside%20the%20section.%20We%20can%20place%20a%20%3Cstrong%3Eguard%3C/strong%3E%20to%20make%20sure,%20only%20authorized/authenticated%20people%20can%20access.%3C/li%3E%0A%3C/ol%3E%0A%3Cp%3E%3Cbr%3EWe%20can%20also%20do%20some%20works%20inside%20the%20component%20and%20pass%20the%20result%20from%20one%20component%20to%20another.%20%20%3C/p%3E`;
  title="GraphQl";
}
</script>
