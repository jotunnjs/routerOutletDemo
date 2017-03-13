/**
 * Created by Eyal on 12/03/2017.
 */
import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'color2',
  styles : [`
div{
        background-color: deepskyblue;
    }
`],
  template: `
<div [style.background-color]="color">
  color2
</div>
`})
export class Color2Component implements OnDestroy{
    color:string;
    sub:Subscription;

    constructor(private route:ActivatedRoute){
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