<template src="../views/tree_view.html">
 
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { TreeViewItem } from "../models/treeview_item";

@Component({
  props: {
    items: Array
  }
})
export default class TreeView extends Vue {
  //props
  items: TreeViewItem[];

  activeUrl = "";

  expandInfo = {};

  mounted() {
    this.items.forEach(item => {
      this.$set(this.expandInfo as any, item.id as number, false);
    });
  }

  // called by parent
  setActiveLink(url) {
    this.activeUrl = url;
  }

  setExpandInfo(id: number) {
    this.items.forEach(item => {
      if (item.id === id) {
        if (this.expandInfo[item.id] == true) {
          this.$set(this.expandInfo as any, id, false as any);
        } else {
          this.$set(this.expandInfo as any, id, true as any);
        }
      } else if (this.expandInfo[item.id] == true) {
        this.$set(this.expandInfo as any, item.id as number, false);
      }
    });
  }

  onMenuClick(e) {
    const el = e.target;
    const id = Number(el.dataset.id);
    this.setExpandInfo(id);
  }
}
</script>
<style src="../styles/tree_view.css"></style>

