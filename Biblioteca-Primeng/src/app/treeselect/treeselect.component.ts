import { Component } from '@angular/core';
import { TreeNode } from "primeng/api";


@Component({
  selector: 'app-treeselect',
  templateUrl: './treeselect.component.html',
  styleUrls: ['./treeselect.component.scss']
})
export class TreeselectComponent {
  nodes: TreeNode[] = [];
    selected: any;
    ngOnInit()
    {
        this.nodes = [
            {
                "label": "front",
                "icon": "pi pi-folder",
                "children": [
                    {
                        "label": "data.json",
                        "icon": "pi pi-file"
                    },
                    {
                        "label": "sales.docx",
                        "icon": "pi pi-file"
                    },
                    {
                        "label": "presentation.pptx",
                        "icon": "pi pi-file"
                    }
                ]
            },
            {
                "label": "Home",
                "icon": "pi pi-folder",
                "children": [
                    {
                        "label": "grocery.word",
                        "icon": "pi pi-file"
                    },
                    {
                        "label": "picture.jpeg",
                        "icon": "pi pi-file"
                    },
                    {
                        "label": "homeplan.png",
                        "icon": "pi pi-file"
                    }
                ]
            },
            {
                "label": "Multimedia",
                "icon": "pi pi-folder",
                "children": [
                    {
                        "label": "infinity-war.mp4",
                        "icon": "pi pi-file"
                    },
                    {
                        "label": "you.mp3",
                        "icon": "pi pi-file"
                    },
                    {
                        "label": "endgame.mp4",
                        "icon": "pi pi-file"
                    },
                    {
                        "label": "MI.mp4",
                        "icon": "pi pi-file"
                    }
                ]
            }
        ];
    }
}