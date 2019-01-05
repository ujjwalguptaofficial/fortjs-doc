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
  tutorialContent = `%3Cp%3E%3Ccode%3Efile%3C/code%3E%20is%20class%20member%20of%20%20Guard%20,Shield%20and%20Controller.%20It%20is%20used%20to%20access%20http%20request%20files.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20to%20upload%20a%20file%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20textResult,%20Route,%20fileResult,%20Worker,%20HTTP_METHOD%20%7D%20from%20%22fortjs%22;%0Aimport%20*%20as%20Path%20from%20%22path%22;%0A%0Aexport%20class%20FileController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Post%5D)%0A%20%20%20%20@Route(%22/upload%22)%0A%20%20%20%20async%20uploadFile()%20%7B%0A%20%20%20%20%20%20%20%20const%20pathToSave%20=%20Path.join(__dirname,%20%22../upload.png%22);%0A%20%20%20%20%20%20%20%20let%20result;%0A%20%20%20%20%20%20%20%20//%20check%20whether%20file%20exist%0A%20%20%20%20%20%20%20%20if%20(this.file.isExist('jsstore')%20===%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20save%20file%20to%20desired%20location%0A%20%20%20%20%20%20%20%20%20%20%20%20await%20this.file.saveTo('jsstore',%20pathToSave);%0A%20%20%20%20%20%20%20%20%20%20%20%20result%20=%20%22file%20saved%22;%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20result%20=%20%22file%20not%20saved%22;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20textResult(result);%0A%20%20%20%20%7D%20%20%20%20%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="File";
}
</script>
