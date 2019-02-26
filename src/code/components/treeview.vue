<template>
  <div class="margin-top-50px">
    <div
      class="treeview-parent"
      v-for="item in items"
      :key="item.id"
      v-bind:class="{ 'link-active': item.url === activeUrl }"
    >
      <i
        :class="{
          'not-visible': item.childs == null || item.childs.length == 0
        }"
        class="material-icons"
        v-bind:data-id="item.id"
        @click="onMenuClick"
      >
        {{
          expandInfo[item.id] === true ? "keyboard_arrow_down" : "chevron_right"
        }}
      </i>
      <div v-bind:data-id="item.id" class="text" @click="onMenuClick">
        <a
          v-bind:data-id="item.id"
          v-if="item.url != 'null' "
          :href="'/tutorial/' + item.url"
          >{{ item.text }}</a
        >
        <span v-else v-bind:data-id="item.id"> {{ item.text }}</span>
      </div>
      <ul v-if="item.childs != null" v-show="expandInfo[item.id] === true">
        <li
          v-for="child in item.childs"
          :key="child.id"
          v-bind:class="{ 'link-active': child.url === activeUrl }"
        >
          <a :href="'/tutorial/' + child.url">{{ child.text }}</a>
        </li>
      </ul>
    </div>
  </div>
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
    // debugger;
    this.setExpandInfo(id);
  }
}
</script>
<style src="../styles/tree_view.css"></style>

