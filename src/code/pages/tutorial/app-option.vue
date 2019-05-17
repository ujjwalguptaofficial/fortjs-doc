<template>
<Tutorial :pageKeywords="keywords" :innerHtml="tutorialContent" :pageTitle="title"></Tutorial>
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
  tutorialContent = `%3Cp%3EThe%20type%20%3Ccode%3EappOption%3C/code%3E%20is%20used%20to%20provide%20the%20configuration%20for%20the%20app.%20%3C/p%3E%0A%3Cp%3EStructure%20of%20appOption%20is%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Etype%20AppOption%20=%20%7B%0A%20%20%20%20/**%0A%20%20%20%20%20*%20port%20at%20which%20app%20will%20listen,%20default%20-%204000%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bnumber%7D%0A%20%20%20%20%20*/%0A%20%20%20%20port?:%20number;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20Whether%20to%20parse%20cookie%20or%20not,%20default%20-%20true%0A%20%20%20%20%20*%20If%20false,%20then%20session%20wont%20work.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bboolean%7D%0A%20%20%20%20%20*/%0A%20%20%20%20shouldParseCookie?:%20boolean;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20Whether%20to%20parse%20the%20post%20data,%20default%20-%20true%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bboolean%7D%0A%20%20%20%20%20*/%0A%20%20%20%20shouldParsePost?:%20boolean;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20session%20timeout%20in%20minute%20-%20default%20is%2060%20minute%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bnumber%7D%0A%20%20%20%20%20*%20@memberof%20IAppOption%0A%20%20%20%20%20*/%0A%20%20%20%20sessionTimeOut?:%20number;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20path%20to%20be%20used%20when%20url%20is%20root.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%7D%0A%20%20%20%20%20*%20@memberof%20IAppOption%0A%20%20%20%20%20*/%0A%20%20%20%20defaultPath?:%20string;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20name%20of%20application%20-%20default%20is%20fort.%20Visible%20in%20header%20and%20cookie.%0A%20%20%20%20%20*%20Change%20the%20name%20if%20you%20dont%20want%20to%20let%20users%20know%20the%20framework%20name.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%7D%0A%20%20%20%20%20*/%0A%20%20%20%20appName?:%20string;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20eTag%20Settings%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7BEtagOption%7D%0A%20%20%20%20%20*/%0A%20%20%20%20eTag?:%20EtagOption;%0A%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20folders%20which%20should%20be%20visible%20to%20requests.%20By%20default%20nothing%20is%20allowed.%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7BFolderMap%5B%5D%7D%0A%20%20%20%20%20*/%0A%20%20%20%20folders?:%20FolderMap%5B%5D;%0A%7D;%0A%3C/code%3E%3C/pre%3E`;
  title="AppOption";
  keywords="app, options, fortjs, node";
}
</script>
