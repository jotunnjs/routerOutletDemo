import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {TestComponent} from "./test.component";
import {ColorComponent} from "./color.component";

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        ColorComponent
    ],
    imports:[
        BrowserModule,
       RouterModule.forRoot([
           { path: 'main' , component : TestComponent,
            children:[
                { path: 'a1' , component : TestComponent,
                    children:[
                        { path: 'a1' , component : ColorComponent, data:{color:'red'}},
                        { path: 'u1' , component : ColorComponent, data:{color:'red'} , outlet:'up2'},
                        { path: 'd1' , component : ColorComponent, data:{color:'red'} , outlet:'down2'}
                ]},
                { path: 'u1' , component : ColorComponent , outlet:'up2' , data:{color:'pink'}},
                { path: 'd1' , component : TestComponent   , outlet:'down2',
                    children:[
                        { path: 'a1' , component : ColorComponent},
                        { path: 'u1' , component : ColorComponent , outlet:'up2'},
                        { path: 'd1' , component : ColorComponent , outlet:'down2'}
                ]},
            ]
           },
           { path: 'up'   , component : ColorComponent , outlet:'up' , data:{color:'yellow'}},
           { path: 'down' , component : TestComponent, outlet:'down',
               children:[
                   { path: 'a1' , component : ColorComponent , data:{color:'blue'},},
                   { path: 'u1' , component : ColorComponent , data:{color:'blue'}, outlet:'up2'},
                   { path: 'd1' , component : ColorComponent , data:{color:'blue'}, outlet:'down2'}
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