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
  tutorialContent = `%3Cp%3E%3Ccode%3Esession%3C/code%3E%20is%20class%20member%20of%20Wall,%20Guard%20,%20Shield%20and%20Controller.%20%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20we%20can%20use%20session%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20defaultWorker,%20textResult,%20viewResult%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%20%20%20%20@defaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20check%20if%20session%20exist%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20isSessionExist%20=%20await%20this.session.isExist('userId');%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20add%20value%20to%20session%0A%20%20%20%20%20%20%20%20%20%20%20%20await%20this.session.set('userId',%2045);%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20get%20session%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20userIdFromSession%20=%20await%20this.session.get('userId');%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20remove%20session%0A%20%20%20%20%20%20%20%20%20%20%20%20await%20this.session.remove('session_name');%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20set%20multiple%20session%20at%20a%20time%0A%20%20%20%20%20%20%20%20%20%20%20%20this.session.setMany(%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key:%20'user_id',%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value:%201%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key:%20'name',%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value:%20'ujjwal%20gupta'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D)%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20await%20viewResult('controller:default,action:default');%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%7D%20catch%20(ex)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(ex);%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20handle%20exception%20and%20show%20user%20a%20good%20message.%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20save%20this%20ex%20in%20a%20file%20or%20db,%20so%20that%20you%20can%20know%20what's%20the%20issue%20and%20where%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20await%20textResult(%60Our%20server%20is%20busy%20right%20now.%20Please%20try%20later.%60);%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="Session";
}
</script>
