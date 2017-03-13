import {Component,VERSION} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'my-app',
    styles:[`
        input{
            width: 500px;
        }
        .box{
            border: 3px solid black;
            width: auto;
            height: auto;
            margin: 8px;
            padding: 8px;
        }
    `],
    template:`
    <h1>Routing demo ${VERSION.full}</h1>
    <nav>
        <select #i>
            <option>main</option>
            <option>main(up:up//down:down)</option>
            <option>main/a1(up:up//down:down)</option>
            <option>&nbsp;</option>
            <option>main/(up2:u1//down2:d1//a1)</option>
            <option>main/(primary:a1//up2:u1//down2:d1//a1)</option>
            <option>main/a1(up:up//down:down//primary:main/(up2:u1//main(down2:d1))</option>
            
           <option>main/(a1//up2:u1//down2:d1)(up:up//down:down)</option>
        </select>
        <button (click)="nav(i.value)">Go</button><br>
        
        <a routerLink="[ '/main' ]">main</a> |
        <a routerLink="[ '/main' , { outlets:{ up:['up'] , down:['down'] } } ]">main(up:up//down:down)</a>
    </nav>
    <div class="box">
        <h5>Outlet up</h5>
        <router-outlet name="up"></router-outlet>
        </div>
    <div class="box"><router-outlet></router-outlet></div>
    <div class="box">
        <h5>Outlet down</h5>
        <router-outlet name="down"></router-outlet>
    </div>
`})
export class AppComponent{
    constructor(private router:Router){}

    nav(url:string){
        try{
            console.log(`url:${url}`);
            this.router.navigateByUrl(url);
        } catch(ex){
            console.log(ex);
        }

    }
}