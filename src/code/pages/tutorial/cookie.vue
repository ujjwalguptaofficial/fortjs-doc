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
  tutorialContent = `%3Cp%3E%3Ccode%3Ecookie%3C/code%3E%20is%20class%20member%20of%20Wall,%20Guard%20,%20Shield%20and%20Controller.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20we%20can%20use%20cookie%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20DefaultWorker%20textResult,%20viewResult%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20HttpCookie%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20check%20exist%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20isCookieExist%20=%20this.cookie.isExist('cookie_name');%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20get%20cookie%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20cookie%20=%20this.cookie.getCookie('cookie_name');%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//add%20cookie%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20newCookie%20=%20new%20HttpCookie('new_cookie','cookie_value');%0A%20%20%20%20%20%20%20%20%20%20%20%20this.cookie.addCookie(newCookie);%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//remove%20cookie%0A%20%20%20%20%20%20%20%20%20%20%20%20this.cookie.removeCookie('cookie_name');%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20await%20viewResult('controller:default,action:default');%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%7D%20catch%20(ex)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(ex);%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20handle%20exception%20and%20show%20user%20a%20good%20message.%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20save%20this%20ex%20in%20a%20file%20or%20db,%20so%20that%20you%20can%20know%20what's%20the%20issue%20and%20where%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20await%20textResult(%60Our%20server%20is%20busy%20right%20now.%20Please%20try%20later.%60);%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20same%20way%20you%20can%20access%20cookie%20in%20Wall,%20Guard%20and%20Shield.%3C/p%3E`;
  title="Cookie";
}
</script>
