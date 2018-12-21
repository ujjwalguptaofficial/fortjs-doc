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
  tutorialContent = `%3Cp%3E%3Ccode%3Equery%3C/code%3E%20is%20class%20member%20of%20%20Wall,%20Guard,%20Shield%20and%20Controller.%20It%20is%20used%20to%20get%20the%20query%20string%20value.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Conside%20the%20url%20-%20abc.com/?userid=5&amp;name=ujjwal%3C/p%3E%0A%3Cp%3EThere%20are%20two%20variables%20in%20query%20string%20-%20%3Ccode%3Euserid%3C/code%3E%20and%20%3Ccode%3Ename%3C/code%3E%20.%20We%20can%20use%20%3Ccode%3Equery%3C/code%3E%20to%20access%20those%20value.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@defaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20const%20userId%20=%20this.query.userid;%0A%20%20%20%20%20%20%20%20const%20name%20=%20this.query.name;%0A%0A%20%20%20%20%20%20%20%20return%20textResult(%60userId%20is%20$%7BuserId%7D%20&amp;%20name%20is%20$%7Bname%7D%60);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="Query";
}
</script>
