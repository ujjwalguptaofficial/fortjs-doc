<template>
    <v-layout row wrap>
        <v-flex xs12 sm12 md4>
            <h5>
                <a target="_blank" href="/sponsor">Help fortjs Grow</a>
            </h5>
            <p>fortjs is an open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.
            </p>
        </v-flex>
        <v-flex xs12 sm12 md4>
            <h5>
                <a target="_blank" href="/help">Need Help</a>
            </h5>
            <p>
                Dont worry, if something is not working for you. The whole community is here for you.
            </p>
        </v-flex>
        <!-- <v-flex xs12 sm12 md3>
            <h5>
                <a target="_blank" href="/team">Team</a>
            </h5>
            <p>
                A great thing is not possible without a great team. Let's know the team personally.
            </p>
        </v-flex> -->
        <v-flex xs12 sm12 md4>
            <h5>
                <a target="_blank" href="/community">Community</a>
            </h5>
            <p>
                Be a part of fortjs community and help other people in learning fortjs, using it in a best way and making fortjs better.
            </p>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { vueEvent } from "../common_var";
@Component
export default class Footer extends Vue {
  
}
</script>
