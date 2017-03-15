import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  styles : [``],
  template: `
<div [style.background-color]="color">
  {{route.component.name}}
</div>
`})
export class BaseComponent implements OnDestroy{
    color:string;
    sub:Subscription;

    constructor(
        public router: Router,
        public route:ActivatedRoute){
        this.sub = route
            .data
            .subscribe((p:any)=>{
                this.color = p.color;
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}