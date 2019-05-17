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
  tutorialContent = `%3Cpre%3E%3Ccode%3Etype%20HttpResponse%20=%20%7B%0A%20%20%20%20setHeader(name:%20string,%20value:%20number%20%7C%20string%20%7C%20string%5B%5D):%20void;%0A%20%20%20%20getHeader(name:%20string):%20number%20%7C%20string%20%7C%20string%5B%5D%20%7C%20undefined;%0A%20%20%20%20getHeaders():%20OutgoingHttpHeaders;%0A%20%20%20%20getHeaderNames():%20string%5B%5D;%0A%20%20%20%20hasHeader(name:%20string):%20boolean;%0A%20%20%20%20removeHeader(name:%20string):%20void;%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="Http Response";
  keywords="http response, type, options, fortjs, node";
}
</script>
