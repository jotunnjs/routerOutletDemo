
import {UrlTree, UrlSegment, UrlSegmentGroup} from "@angular/router";
export class UrlSerializer{
    parse(url:string){
        let index:number;
        let rows:number;
        let result:string = '';
        url =  'main/(a1/(a1//up2:u1//down2:d1)//up2:u1//down2:d1)(left:up//right:down/(a1//up2:u1//down2:d1))';

        /*
        *
        *
        * */
    }
}

import {Component, Input} from "@angular/core";

@Component({
  selector: 'url-tree',
  styles : [],
  template: `

    <!--{{segment?.path}}-->
    <span *ngFor="let seg of _urlTree.segments;let last=last">
        {{seg.path}} <span *ngIf="!last">/</span>
    </span>
    <span *ngIf="children.length > 1">/(</span>
    <ul>        
        <li *ngFor="let s of children">
            {{s.outlet}}:<url-tree [source]="s.val"></url-tree>
        </li>        
    </ul>
    <span *ngIf="children.length > 1">)</span>

`})
export class UrlTreeComponent {
    _urlTree:UrlSegmentGroup;
    children:any[] = [];
    segment:UrlSegment;

    @Input('source')
    set urlTree(val:UrlSegmentGroup){
        this._urlTree = val;
        if(val.segments && val.segments.length > 0) {
            this.segment = val.segments[0];
        }
        let set = new Set();
        this.children.length = 0;
        for(let prop in val.children){
            if(set.has(prop))return;
            set.add(prop);
            this.children.push({outlet:prop,val:val.children[prop]})
        }
    }
}