<template src="../views/tutorial.html">
  
</template>
<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import DomHelper from "../helpers/dom_helper";
import { vueEvent, VueWithRoute } from "../common_var";
import { IInputSelect } from "../interfaces";
import TreeView from "./treeview";
import { TreeViewItem } from "../models/treeview_item";
import { tutorialLinks } from "../scripts/tutorials";

export interface ITutorialLink {
  text: string;
  url: string;
}
@Component({
  components: {
    TreeView
  },
  props: {
    innerHtml: String,
    pageTitle: String,
    pageKeywords: String
  }
})
export default class Tutorial extends VueWithRoute {
  // props
  innerHtml: string;
  pageTitle: string;
  version: number = 1;

  pageKeywords: string;

  //property
  showMenu = false;
  searchValue = "";
  searchResult = "";

  constructor() {
    super();
    this.catchEvents();
  }

  catchEvents() {
    vueEvent.$on("menu_click", this.toggleMenu);
  }

  onSearch() {
    // var html = "";
    // this.links.forEach(link => {
    //   if (link.text.toLowerCase().indexOf(this.searchValue) >= 0) {
    //     html += "<a href=" + link.url + ">" + link.text + "</a>";
    //   }
    // });
    // this.searchResult = html;
  }

  isNullOrEmpty(value: string) {
    return value == null || value.length == 0;
  }

  mounted() {
    var currentUrl: string = (this.$route as any).path
      .toLowerCase()
      .replace(/\//g, "");
    let activeUrl;
    this.links.every(item => {
      if (item.childs != null) {
        const child = item.childs.find(
          qry =>
            currentUrl ===
            `${this.relativeUrl}${qry.url.toLowerCase()}`.replace(/\//g, "")
        );
        if (child != null) {
          activeUrl = child.url;
          (this.$refs.linkContainer as any).setExpandInfo(item.id);
          return false;
        }
      }

      if (
        this.isNullOrEmpty(activeUrl) &&
        currentUrl ===
          `${this.relativeUrl}${item.url.toLowerCase()}`.replace(/\//g, "")
      ) {
        activeUrl = item.url;
        if (item.childs && item.childs.length > 0) {
          (this.$refs.linkContainer as any).setExpandInfo(item.id);
        }
        return false;
      }
      return true;
    });
    if (activeUrl && activeUrl.length > 0) {
      // this.activeUrl = activeUrl.url;
      (this.$refs.linkContainer as any).setActiveLink(activeUrl);
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  showHideMenuButton() {
    setTimeout(() => {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }, 200);
  }

  head() {
    return {
      title: `FortJs - ${this.pageTitle}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "keywords",
          name: "keywords",
          content: this.pageKeywords
        }
      ]
    };
  }

  getVersion(): string {
    return "1";
  }

  get tutorialHtml() {
    return decodeURI(this.innerHtml);
  }

  get links() {
    return this.allLinks_;
  }

  private get allLinks_() {
    return tutorialLinks;
  }

  get relativeUrl() {
    switch (this.version) {
      // case 1:
      //   return "/v1/tutorial/";
      case 1:
        return "/tutorial/";
      default:
        return "/";
    }
  }

  getCurrentUrlIndex() {
    const currentUrl = (this.$route as any).path;
    const relativeUrl = this.relativeUrl;
    const activeUrlIndex = this.links.findIndex(
      value =>
        currentUrl.toLowerCase().replace(/\//g, "") ===
        `${this.relativeUrl}${value.url.toLowerCase()}`.replace(/\//g, "")
    );
    return activeUrlIndex;
  }

  get docToEdit() {
    const url = this.allLinks_[this.getCurrentUrlIndex()];
    if (url) {
      return url.url;
    }
    return null;
  }
}
</script>
<style>
@import url("~/styles/tutorial.css");
</style>
