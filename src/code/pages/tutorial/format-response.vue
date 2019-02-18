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
  tutorialContent = `%3Cp%3EYou%20can%20customize%20the%20format%20of%20your%20response%20and%20based%20on%20%3Ca%20href=%22https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation%22%3Econtent%20negotiation%3C/a%3E%20fortjs%20select%20the%20appropriate%20response.%20If%20an%20appropriate%20response%20is%20not%20found%20then%20a%20response%20with%20status%20code%20-%20406%20is%20returned.%3C/p%3E%0A%3Cp%3EA%20result%20of%20type%20-%20%3Ca%20href=%22/tutorial/http-format-result%22%3EHttpFormatResult%3C/a%3E%20is%20used%20to%20return%20the%20response%20with%20different%20format.%3C/p%3E%0A%3Cp%3ELet's%20see%20an%20example%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20DefaultWorker,%20HttpFormatResult,%20HTTP_STATUS_CODE,%20MIME_TYPE%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20RandomController%20extends%20Controller%20%7B%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20format()%20%7B%0A%20%20%20%20%20%20%20%20const%20result%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20statusCode:%20HTTP_STATUS_CODE.Ok,%0A%20%20%20%20%20%20%20%20%20%20%20%20responseFormat:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5BMIME_TYPE.Json%5D:%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%20message:%20%22hello%20world%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5BMIME_TYPE.Html%5D:%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22&lt;p&gt;hello%20world&lt;/p&gt;%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5BMIME_TYPE.Text%5D:%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22hello%20world%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%20as%20HttpFormatResult;%0A%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%20we%20are%20returning%20three%20format%20(html,%20json,%20text).%3C/p%3E`;
  title="Format Response";
}
</script>
