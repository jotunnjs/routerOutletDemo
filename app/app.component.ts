import {Component, VERSION, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute, UrlSegment, DefaultUrlSerializer, UrlSerializer} from "@angular/router";
import {Subscription} from "rxjs";

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
            min-width: 150px;
            min-height: 100px;
        }
        .title{
            background-color: black;
            color: white;
            font-size: 12px;
            padding: 2px;
            width: 100px;
            position: absolute;
            top: -30px;
            left: -1px;
        }
    `],
    template:`
    <div class="container">
    <h1>Routing demo ${VERSION.full}</h1>
    <div>url: {{router.url}}</div>
    <url-tree [source]="urlTree.root"></url-tree>
    <nav>
        <select #i>
            <option>main</option>
            <option>main(left:up//right:down)</option>
            <option>main/a1(left:up//right:down)</option>
            <option>&nbsp;</option>
            <option>main/(up2:u1//down2:d1//a1)</option>
            <option>main/(primary:a1//up2:u1//down2:d1//a1)</option>
            <option>main/a1(left:up//right:down//primary:main/(up2:u1//main(down2:d1))</option>
            
           <option>main/(a1//up2:u1//down2:d1)(up:up//down:down)</option>
        </select>
        <button (click)="nav(i.value)">Go</button><br>
        
        <a [routerLink]="['/main']">main</a> |
        <a routerLink="[ '/main' , { outlets:{ left:['up'] , right:['down'] } } ]">main(up:up//down:down)</a>
    </nav> 
       <br><br>
        <div class="row">            
            <div class="box col-md-4">
                <h5 class="title">Outlet left</h5>
                <router-outlet name="left"></router-outlet>
            </div>
            <div class="box col-md-4">
                <h5 class="title">Outlet primary</h5> 
                <router-outlet></router-outlet>
            </div>
            <div class="box col-md-4">
                <h5 class="title">Outlet right</h5>
                <router-outlet name="right"></router-outlet>
            </div>
        </div>        
    </div>
`})
export class AppComponent implements OnDestroy{
    url:string;
    sub:Subscription;

    get urlTree(){
        if(!this.router.url) return;
        let tree =  this.urlSer.parse(this.router.url);
        return tree;
    }

    constructor(
        private urlSer:UrlSerializer,
        private router:Router,
        private route:ActivatedRoute){

    }

    nav(url:string){
        try{
            console.log(`url:${url}`);
            this.router.navigateByUrl(url);
        } catch(ex){
            console.log(ex);
        }

    }

    ngOnDestroy(){
        //this.sub.unsubscribe();
    }
}