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
  tutorialContent = `%3Cp%3E%3Ccode%3Eparam%3C/code%3E%20is%20class%20member%20of%20%20Guard%20and%20Controller.%20It%20is%20used%20to%20extract%20route%20data%20for%20placeholder%20based%20routing.%3C/p%3E%0A%3Cp%3Ee.g%20-%20consider%20the%20route%20-%20%22abc.com/%7Bvalue%7D/hi%22%20.%20Here%20value%20is%20a%20placeholder%20and%20this%20can%20be%20extracted%20using%20param.%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20FileController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@Route(%22/scripts/%7Bfile%7D.js%22)%0A%20%20%20%20@Worker()%0A%20%20%20%20async%20getScripts()%20%7B%0A%20%20%20%20%20%20%20%20const%20fileName%20=%20this.param.file;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EFor%20more%20info%20about%20routing,%20please%20check%20the%20%3Ca%20href=%22route%22%3Eroute%3C/a%3E%20doc.%3C/p%3E`;
  title="Param";
}
</script>
