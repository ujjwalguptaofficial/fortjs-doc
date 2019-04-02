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
  tutorialContent = `%3Cp%3ESocket.IO%20enables%20real-time,%20bidirectional%20and%20event-based%20communication.%0AIt%20works%20on%20every%20platform,%20browser%20or%20device,%20focusing%20equally%20on%20reliability%20and%20speed.%3C/p%3E%0A%3Cp%3EFor%20more%20info%20about%20socke.io,%20visit%20-%20https://socket.io/%3C/p%3E%0A%3Cp%3Esocket.io%20can%20be%20injected%20into%20fortjs%20very%20easily.%20Let's%20see%20how%20?%3C/p%3E%0A%3Cp%3EFortjs%20exposes%20its%20httpserver%20object%20and%20this%20object%20can%20be%20used%20to%20initiate%20socket.io%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort,%20MustacheViewEngine%20%7D%20from%20'fortjs';%0Aimport%20%7B%20routes%20%7D%20from%20'./routes';%0Aimport%20*%20as%20path%20from%20%22path%22;%0Aimport%20*%20as%20socketIo%20from%20%22socket.io%22;%0A%0Aexport%20class%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20this.routes%20=%20routes;%0A%20%20%20%20%20%20%20%20this.viewEngine%20=%20MustacheViewEngine;%0A%20%20%20%20%7D%0A%0A%20%20%20%20initSocketIo()%20%7B%0A%20%20%20%20%20%20%20%20const%20io%20=%20socketIo(this.httpServer);%0A%20%20%20%20%20%20%20%20io.on(%22connection%22,%20(socket)%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(%22user%20connected%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20socket.on('disconnect',%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('user%20disconnected');%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20socket.on('chat%20message',%20(msg)%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60message%20is%20$%7Bmsg%7D%60);%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWe%20have%20created%20a%20method%20-%20%22initSocketIo%22%20which%20will%20initializes%20the%20socket.io.%20This%20uses%20%3Ccode%3EhttpServer%3C/code%3E%20object.%3C/p%3E%0A%3Cp%3ENow%20you%20need%20to%20call%20%22initSocketIo%22%20-%20you%20should%20call%20it%20after%20the%20app%20has%20been%20initialized%20like%20this%20:%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20App%20%7D%20from%20%22./app%22;%0Aimport%20*%20as%20path%20from%20%22path%22;%0A%0Aconst%20app%20=%20new%20App();%0Aapp.create(%7B%0A%20%20%20%20defaultPath:%20%22default%22,%0A%20%20%20%20folders:%20%5B%7B%0A%20%20%20%20%20%20%20%20alias:%20%22/%22,%0A%20%20%20%20%20%20%20%20path:%20path.join(__dirname,%20%22../static%22)%0A%20%20%20%20%7D%5D%0A%7D).then(()%20=&gt;%20%7B%0A%20%20%20%20console.log(%22Your%20fort%20is%20located%20at%20address%20-%20localhost:4000%22);%0A%20%20%20%20app.initSocketIo();%0A%7D).catch(err%20=&gt;%20%7B%0A%20%20%20%20console.error(err);%0A%7D)%0A%3C/code%3E%3C/pre%3E`;
  title="Socket.io";
}
</script>
