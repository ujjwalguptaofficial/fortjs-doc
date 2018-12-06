<template>
    <v-app>
        <v-content>
            <Menu></Menu>
            <v-container fluid>
                <nuxt />
            </v-container>
            <v-container fluid id="footer">
                <Footer></Footer>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { vueEvent } from "../common_var";
import Menu from "../components/menu.vue";
import Footer from "../components/footer.vue";

@Component({
  components: {
    Menu,
    Footer
  }
})
export default class extends Vue {}
</script>
