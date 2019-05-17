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
  tutorialContent = `%3Cp%3EBy%20default%20fortjs%20provides%20a%20memory%20session%20provider%20for%20development%20but%20its%20not%20good%20for%20production%20and%20not%20recommended%20to%20use.%20You%20must%20create%20your%20own%20session%20provider%20or%20use%20some%20packages%20if%20available.%3C/p%3E%0A%3Cp%3EA%20session%20provider%20is%20a%20class%20which%20implements%20the%20class%20-%20%3Ccode%3ESessionProvider%3C/code%3E.%3C/p%3E%0A%3Cp%3EStrcuture%20of%20SessionProvider%20is%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eabstract%20class%20SessionProvider%20%7B%0A%0A%20%20%20%20sessionId:%20string;%0A%20%20%20%20protected%20cookies:%20CookieManager;%0A%0A%20%20%20%20abstract%20get(key:%20string):%20Promise&lt;ISessionValue&gt;;%0A%20%20%20%20abstract%20isExist(key:%20string):%20Promise&lt;boolean&gt;;%0A%20%20%20%20abstract%20getAll():%20Promise&lt;ISessionValue%5B%5D&gt;;%0A%20%20%20%20abstract%20set(key:%20string,%20val:%20any):%20Promise&lt;void&gt;;%0A%20%20%20%20abstract%20setMany(values:%20ISessionValue%5B%5D):%20Promise&lt;void%5B%5D&gt;;%0A%20%20%20%20abstract%20remove(key:%20string):%20Promise&lt;void&gt;;%0A%0A%20%20%20%20protected%20createSession()%0A%20%20%20%20protected%20destroySession()%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESo%20you%20need%20to%20implement%20all%20abstract%20methods.%3C/p%3E%0A%3Cp%3EAfter%20you%20have%20created%20a%20session%20provider,%20you%20need%20to%20tell%20fortjs%20to%20use%20new%20session%20provider.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0Aimport%20%7B%20CustomSessionProvider%20%7D%20from%20%22./extra/custom_session_provider%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20//add%20routers%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D%0A%0Anew%20App().create(%7B%0A%20%20%20%20appName:%20%22MyAwesomeApp%22,%0A%20%20%20%20sessionProvider:%20CustomSessionProvider,%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Session Provider";
  keywords="session provider, create session provider, options, fortjs, node";
}
</script>
