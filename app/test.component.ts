/**
 * Created by Eyal on 12/03/2017.
 */
import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'test',
  styles : [`
 .box{
            border: 3px solid green;
            width: auto;
            height: auto;
            margin: 8px 15px;
            padding: 2px;
        }
   .title1{
            background-color: green;
            color: white;
            font-size: 12px;
            padding: 2px;
            width: 100px;
            position: relative;
            top: -30px;
            left: -5px;
        }     
`],
  template: `
<div>
    <h5>{{route.component.name}}</h5>
    
    <button (click)="nav()">Fill outlets</button>
    <button (click)="nav2()">fill primary</button>
    <br><br>
    <div>
        <div class="box">
            <h5 class="title1">Outlet up2</h5>
            <router-outlet name="up2"></router-outlet>
        </div>
        <br>
        <div class="box">
            <h5 class="title1">outlet primary</h5>
            <router-outlet></router-outlet>
        </div>
        <br>
        <div class="box">
            <h5 class="title1">Outlet down2</h5>
            <router-outlet name="down2"></router-outlet>
        </div>
    </div>
</div>
`})
export class TestComponent {
    constructor(
        private router:Router,
        private route:ActivatedRoute){
    }

    nav(url:string){
        try{
            console.log(`url:${url}`);
            //this.router.navigateByUrl(url,{relativeTo:this.route});
            this.router.navigate([{outlets:{primary:'a1',up2:'u1',down2:'d1'}}],{relativeTo:this.route});
        } catch(ex){
            console.log(ex);
        }

    }
    nav2(){
        try{
            this.router.navigate(['a1'],{relativeTo:this.route});
        } catch(ex){
            console.log(ex);
        }

    }
}