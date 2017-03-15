/**
 * Created by Eyal on 12/03/2017.
 */
import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {BaseComponent} from "./base.component";

@Component({
  selector: 'color2',
  styles : [`
div{
        background-color: deepskyblue;
    }
`],
  template: `
<div [style.background-color]="color">
  {{route.component.name}}
</div>
`})
export class ColorComponent extends BaseComponent{}