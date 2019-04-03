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
  tutorialContent = `%3Cp%3EFew%20things%20to%20note%20when%20you%20are%20deploying%20your%20app%20to%20production%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3ERun%20build%20for%20production%20by%20using%20the%20command%20-%20%3Ccode%3Enpm%20run%20build:prod%3C/code%3E%20or%20%3Ccode%3Eyarn%20run%20build:prod%3C/code%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EAlways%20use%20try%20&amp;%20catch%20in%20every%20worker%20&amp;%20components.%20Save%20the%20error%20message%20in%20a%20file%20or%20db%20with%20date,%20time%20&amp;%20other%20info.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3ECustomize%20the%20error%20page%20by%20using%20customize%20error%20handler.%20For%20info%20about%20how%20to%20customize,%20visit%20this%20link%20-%20%3Ca%20href=%22/tutorial/custom-error-handler/%22%3E/tutorial/custom-error-handler/%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EWhen%20deploying,%20make%20sure%20%22NODE_ENV%22%20is%20production.%20Multiple%20optimization%20like%20caching%20of%20views,%20compressing%20development%20error%20message%20etc.%20takes%20place%20when%20%3Ccode%3ENODE_ENV%3C/code%3E%20is%20production.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EUse%20compression%20-%20you%20can%20configure%20any%20third%20party%20library%20for%20compression%20in%20a%20wall%20component.%20But%20we%20will%20recommend%20to%20configure%20the%20compression%20in%20the%20reverse%20proxy%20server%20like%20-%20nginix%20etc.%20Reverse%20proxy%20can%20be%20used%20for%20multiple%20purposes%20like%20-%20caching%20request,%20compression%20etc.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22handlingcrash%22%3EHandling%20crash%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EApp%20Crash%20:-%20%20Nodejs%20app%20is%20stopped%20when%20an%20exception%20is%20not%20handled%20and%20in%20this%20situation%20your%20website%20will%20be%20down%20until%20you%20restart%20the%20app%20again.%20For%20solving%20this%20-%20%3Cstrong%3EUse%20a%20process%20manager%3C/strong%3E%20.%20Process%20managers%20can%20be%20used%20for%20other%20purposes%20too%20like%20-%20Update%20settings%20to%20improve%20performance,%20Checking%20runtime%20performance%20&amp;%20resource%20consumption%20etc.%20Some%20of%20the%20famous%20process%20managers%20are%20-%20PM2,%20Forever,%20StrongLoop%20etc.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EServer%20Crash%20:-%20When%20server%20crash%20&amp;%20it%20restarts,%20your%20app%20should%20restart%20too.%20But%20that%20dont%20happens%20until%20you%20configure%20it.%20You%20can%20hook%20your%20app%20to%20os%20init%20system%20or%20configure%20your%20process%20manager%20to%20os%20init%20system.%20We%20will%20recommend%20to%20configure%20your%20app%20with%20process%20manager.%3C/p%3E%3C/li%3E%0A%3C/ul%3E`;
  title="Deployment";
}
</script>
