import { Vue } from "nuxt-property-decorator";
import { Route } from "vue-router";
export const vueEvent = new Vue();
export class VueWithRoute extends Vue {
    $route: Route
}