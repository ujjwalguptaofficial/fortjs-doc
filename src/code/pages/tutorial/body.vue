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
  tutorialContent = `%3Cp%3E%3Ccode%3Ebody%3C/code%3E%20is%20class%20member%20of%20%20Guard%20,Shield%20and%20Controller.%20It%20is%20used%20to%20access%20body%20data%20sent%20in%20http%20post%20request.%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20viewResult,%20worker,%20HTTP_METHOD,%20guards,%20route,%20jsonResult,%20htmlResult,%20textResult,%20defaultWorker,%20redirectResult%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserService%20%7D%20from%20%22../services/user_service%22;%0A%0Aexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@worker(%5BHTTP_METHOD.Post%5D)%0A%20%20%20%20async%20login()%20%7B%0A%20%20%20%20%20%20%20%20//%20access%20post%20data%0A%20%20%20%20%20%20%20%20const%20userId%20=%20this.body.userId;%0A%20%20%20%20%20%20%20%20const%20pwd%20=%20this.body.password;%0A%0A%20%20%20%20%20%20%20%20if%20(userId%20!=%20null%20&amp;&amp;%20pwd%20!=%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20userService%20=%20new%20UserService();%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20user%20=%20userService.getUser(userId);%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(user%20!=%20null%20&amp;&amp;%20user.password%20===%20pwd)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.session.set('userId',%20userId);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%60Authenticated%60);%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20textResult(%22Invalid%20credential%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20textResult(%22Invalid%20credential%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EBy%20default%20fortjs%20parses%20the%20body%20data.%20But%20it%20can%20be%20turned%20off%20by%20setting%20option%20-%20%3Ccode%3EshouldParsePost%3C/code%3E%20while%20bootstraping%20the%20app%20in%20%3Ccode%3Ecreate%3C/code%3E%20method.%20Please%20check%20%3Ca%20href=%22bootstrap%22%3Ebootstrap%3C/a%3E%20doc%20for%20more%20info.%3C/p%3E`;
  title="Body";
}
</script>
