<template>
  <v-layout row wrap>
    <v-flex md2 class="hidden-sm-and-down" id="divMenuContainer" :class="{'show-menu':showMenu}">
      <TreeView ref="linkContainer" :items="links"></TreeView>
    </v-flex>
    <v-flex id="divTutorialContent" :class="{'padding-left-15px': $vuetify.breakpoint.mdAndUp}" xs12 md8 l7 xl6>
      <div v-html="tutorialHtml" class="margin-top-20px"></div>
    </v-flex>
    <v-flex class="md2 margin-top-50px text-center">
      <!-- <v-btn href="/sponsor" color="success right-side-button">Sponsor <br>Us</v-btn>
      <br><br>
      <v-btn href="/sponsor" color="success right-side-button">Be a backer</v-btn> -->
    </v-flex>
  </v-layout>

</template>
<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import DomHelper from "../helpers/dom_helper";
import { vueEvent } from "../common_var";
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
    pageTitle: String
  }
})
export default class Tutorial extends Vue {
  // props
  innerHtml: string;
  pageTitle: string;
  version: number = 2;

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
      } else if (
        currentUrl ===
        `${this.relativeUrl}${item.url.toLowerCase()}`.replace(/\//g, "")
      ) {
        activeUrl = item.url;
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
      title: `FortJs - ${this.pageTitle}`
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
      case 1:
        return "/v1/tutorial/";
      case 2:
        return "/tutorial/";
      default:
        return "/";
    }
  }
}
</script>
<style>
@import url("~/styles/tutorial.css");
</style>
