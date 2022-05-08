import { AnimatedSprite, Container, Point,  Texture } from "pixi.js";

import { Button } from "../ui/Button";


export class Mandos extends Container {
    private adelante: Button;
    private atras: Button;
    private repetir: Button;
    private home: Button;
    private animaIntro:AnimatedSprite;
    
   
    constructor() {
        super();
        this.animaIntro = new AnimatedSprite(
            [

                Texture.from("fondoIO1" ),
                Texture.from("fondoIO3" ),
                Texture.from("fondoIO5" ),
                Texture.from("fondoIO7" ),
                Texture.from("fondoIO9" ),
                Texture.from("fondoIO11"),
                Texture.from("fondoIO13"),
                Texture.from("fondoIO15"),
                Texture.from("fondoIO17"),
                Texture.from("fondoIO19"),
                Texture.from("fondoIO21"),
                Texture.from("fondoIO23"),


            ], true
        );
        //this.animaIntro.play();
        this.animaIntro.anchor.set(1, 1);
        this.animaIntro.animationSpeed = 0.8;
        this.animaIntro.scale.x = 15;
        this.animaIntro.scale.y = 10;
        this.animaIntro.position.x=4000;
        this.animaIntro.position.y=1300;
        this.addChild(this.animaIntro);
         


            this.adelante = new Button(
                Texture.from("adelante"),"adelante"
                
                );
       
            this.adelante.position.x = 1050;
      
            this.atras = new Button(
                Texture.from("atras"),"atras"
                );
       
    
            this.repetir = new Button(
                Texture.from("repetir"),"repetir"
                );
            this.repetir.position.x = 700;
            
        
            this.home = new Button(
                Texture.from("home"),"home"
                );
    
            this.home.position.x = 350;
    
    
            this.addChild(this.adelante);
            this.addChild(this.atras);
            this.addChild(this.repetir);
            this.addChild(this.home);
            
         
    
    
    
            this.adelante.toGlobal(new Point());
            this.adelante.parent.toGlobal(this.adelante.position);
    
            this.repetir.toGlobal(new Point());
            this.repetir.parent.toGlobal(this.repetir.position);
    
            this.home.toGlobal(new Point());
            this.home.parent.toGlobal(this.home.position);
    
        }
        
 
    }
 
 
  




   /* private onTouchStart():void{
        console.log("touch start");

    }
    private onTouchEnd():void{
        console.log("touch end");

    }
    private onPointerDown():void{
        console.log("Pointer start");

    }
    private onPointerUp():void{
        console.log("Pointer end");

    }*/

