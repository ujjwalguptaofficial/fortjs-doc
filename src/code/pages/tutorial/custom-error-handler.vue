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
  tutorialContent = `%3Cp%3EIn%20order%20to%20customize%20the%20error%20page%20,%20you%20need%20to%20create%20a%20class%20which%20extend%20class%20ErrorHandler%20and%20overwrite%20the%20methods.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Let's%20say%20you%20want%20to%20customize%20the%20ErrorPage%20for%20status%20code%20-%20404.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20ErrorHandler%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20CustomErrorHandler%20extends%20ErrorHandler%20%7B%0A%20%20%20%20async%20onNotFound(url)%7B%0A%20%20%20%20%20%20%20return%20%60&lt;h1&gt;The%20resource%20$%7Burl%7D%20does%20not%20exist.&lt;/h1&gt;%60%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESo%20basically%20it%20returns%20html%20response.%20If%20you%20are%20using%20a%20view%20engine%20then%20you%20can%20also%20use%20view%20engine%20to%20render%20the%20page%20and%20then%20return%20the%20html%20response.%3C/p%3E%0A%3Cp%3ENow%20you%20have%20created%20the%20class,%20you%20need%20to%20inform%20fortjs%20about%20this.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0Aimport%20%7B%20CustomErrorHandler%20%7D%20from%20%22./extra/custom_error_handler%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20//add%20routers%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D;%0A%20%20%20%20%20%20%20%20this.errorHandler%20=%20CustomErrorHandler;%0A%20%20%20%20%7D%0A%7D%0A%0Anew%20App().create();%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20methods%20available%20for%20overwrites%20are%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EonServerError(ex:%20IException):%20Promise%3Cstring%3E%3C/li%3E%0A%3Cli%3EonBadRequest(ex:%20IException):%20Promise%3Cstring%3E%3C/li%3E%0A%3Cli%3EonForbiddenRequest():%20Promise%3Cstring%3E%3C/li%3E%0A%3Cli%3EonNotAcceptableRequest():%20Promise%3Cstring%3E%3C/li%3E%0A%3Cli%3EonMethodNotAllowed():%20Promise%3Cstring%3E%3C/li%3E%0A%3Cli%3EonNotFound(url:%20string):%20Promise%3Cstring%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AYou%20can%20see%20some%20methods%20also%20have%20parameters.%20So%20its%20upto%20you%20how%20you%20want%20to%20use%20those%20params.%3C/p%3E%0A%3Cp%3Ee.g%20-%20for%20onServerError%20(Status%20code%20-%20500),%20you%20should%20not%20show%20the%20exception%20to%20users%20but%20you%20should%20log%20those%20errors.%3C/p%3E`;
  title="Custom Error Handler";
}
</script>
