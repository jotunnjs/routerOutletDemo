import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {TestComponent} from "./test.component";
import {ColorComponent} from "./color.component";
import {Color2Component} from "./color2.component";

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        ColorComponent,
        Color2Component
    ],
    imports:[
        BrowserModule,
       RouterModule.forRoot([
           { path: 'main' , component : TestComponent,
            children:[
                { path: 'a1' , component : TestComponent,
                    children:[
                        { path: 'a1' , component : Color2Component},
                        { path: 'u1' , component : Color2Component , outlet:'up2'},
                        { path: 'd1' , component : Color2Component , outlet:'down2'}
                ]},
                { path: 'u1' , component : Color2Component , outlet:'up2'},
                { path: 'd1' , component : TestComponent , outlet:'down2',
                    children:[
                        { path: 'a1' , component : Color2Component},
                        { path: 'u1' , component : Color2Component , outlet:'up2'},
                        { path: 'd1' , component : Color2Component , outlet:'down2'}
                ]},
            ]
           },
           { path: 'up'   , component : ColorComponent , outlet:'up'},
           { path: 'down' , component : TestComponent, outlet:'down',
               children:[
                   { path: 'a1' , component : Color2Component , data:{color:'blue'},},
                   { path: 'u1' , component : Color2Component , data:{color:'blue'}, outlet:'up2'},
                   { path: 'd1' , component : Color2Component , data:{color:'blue'}, outlet:'down2'}
               ]}
       ],{
            useHash:true,
           enableTracing:true
    })
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule{

}



// main/(up2:u1//down2:d1//a1)

// main(up:up//down:down)

// main(up:up//down:down)/(a1//up2:u1//down2:d1)

// main(main/a1//main/(up2:u1)//main(down2:d1))

//main(up:up // down:down // main/a1//main/(up2:u1)//main(down2:d1))