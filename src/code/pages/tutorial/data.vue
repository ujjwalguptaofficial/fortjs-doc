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
  tutorialContent = `%3Cp%3E%3Ccode%3Edata%3C/code%3E%20is%20class%20member%20of%20Wall,%20Guard%20,%20Shield%20and%20Controller.%20It%20is%20used%20to%20transfer%20data%20from%20one%20component%20to%20another%20and%20finally%20to%20worker.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Let's%20see%20how%20we%20can%20pass%20data%20from%20wall%20to%20controller%20-%20%3C/p%3E%0A%3Ch3%20id=%22wall%22%3EWall%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Wall,%20textResult%20%7D%20from%20%22fortjs%22;%0Aexport%20class%20RequestLogger%20extends%20Wall%20%7B%0A%0A%20%20%20%20private%20getIP(req)%20%7B%0A%20%20%20%20%20%20%20%20var%20ip%20=%20(req.headers%5B'x-forwarded-for'%5D%20%7C%7C%20'').split(',').pop()%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20req.connection.remoteAddress%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20req.socket.remoteAddress%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20req.connection.socket.remoteAddress%0A%20%20%20%20%20%20%20%20return%20ip;%0A%20%20%20%20%7D%0A%0A%20%20%20%20async%20onIncoming()%20%7B%0A%20%20%20%20%20%20%20%20//%20here%20we%20are%20sending%20ip%20to%20other%20components%0A%20%20%20%20%20%20%20%20this.data.ip%20=%20this.getIP(this.request);%0A%20%20%20%20%20%20%20%20return%20null;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20above%20wall%20is%20using%20%3Ccode%3Edata%3C/code%3E%20to%20pass%20ip%20to%20other%20components.%3C/p%3E%0A%3Ch3%20id=%22controller%22%3EController%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20textResult,%20DefaultWorker%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20//%20access%20ip%20%0A%20%20%20%20%20%20%20%20const%20ip%20=%20this.data.ip;%0A%20%20%20%20%20%20%20%20return%20textResult(%60Ip%20is%20$%7Bip%7D%60);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="Data";
  keywords="data, components, options, fortjs, node";
}
</script>
