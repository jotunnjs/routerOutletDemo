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
            margin: 8px;
            padding: 8px;
        }
`],
  template: `
<div>
    <h3>Test</h3>
   <select #i>            
            <option>a1(up2:u1//down2:d1)</option>
        </select>
        <button (click)="nav(i.value)">Go</button>
        <button (click)="nav2()">Go2</button>
        <br>
     <div class="box">
        <h5>Outlet up2</h5>
        <router-outlet name="up2"></router-outlet>
        </div>
    <div class="box"><router-outlet></router-outlet></div>
    <div class="box">
        <h5>Outlet down2</h5>
        <router-outlet name="down2"></router-outlet>
    </div>
</div>
`})
export class TestComponent {
    constructor(private router:Router,private route:ActivatedRoute){}

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