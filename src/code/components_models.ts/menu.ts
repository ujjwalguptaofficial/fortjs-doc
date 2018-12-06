import { Component, Vue } from "nuxt-property-decorator";
import { vueEvent } from "../common_var";
@Component
export default class Menu extends Vue {
  activeVersion = 1;

  mounted() {
    this.activeVersion = this.getVersion();
  }

  onMenuBtnClick() {
    vueEvent.$emit("menu_click");
  }

  onVersionChange() {
    vueEvent.$emit("version_change", this.activeVersion);
  }

  getVersion() {
    const currentUrl = (this.$route as any).path;
    if (currentUrl.indexOf("v1") >= 0) {
      return 1;
    } else {
      return 2;
    }
  }
}