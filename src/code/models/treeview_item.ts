import { TreeViewChildItem } from "./treeview_child_item";

export class TreeViewItem {
    id: number | string;
    text: string;

    url: string;

    childs?: TreeViewChildItem[];
}