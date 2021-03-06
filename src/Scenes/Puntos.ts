
import { Container,  Text} from "pixi.js";
import { Lokihat } from "../IntroGame/Lokihat";  // imagen de loki con sombrero 

import { Nivel } from "../IntroGame/Nivel"; // mensaje de estado de nivel
import { Intro } from "../IntroGame/Intro"; // cantidad de puntos y objetivos obtiendos 


import { HEIGHT, WIDTH } from "..";





//

export class Puntos extends Container {
    public posRelX: number;
    public posRelY: number;
  //  private panelPlane: NineSlicePlane;
    public valor = true;
    public valor2= false;
   // private mandos: Mandos;
    //private animaIntro:AnimatedSprite;
    
    public worldI: Container;
    constructor(puntos:number) {
        super();
        this.worldI = new Container();
        this.posRelX = /*this.panelPlane.position.x =*/ (WIDTH / 3) + 50;
        this.posRelY = /*this.panelPlane.position.y =*/ (HEIGHT / 2) - 200;

        /*this.animaIntro = new AnimatedSprite(
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
        this.animaIntro.scale.x = 5;
        this.animaIntro.scale.y = 5;
        this.animaIntro.position.x=2000;
        this.animaIntro.position.y=1500;
        this.worldI.addChild(this.animaIntro);*/
       /* this.mandos = new Mandos();
        this.mandos.scale.set(0.3);
        this.mandos.x = this.posRelX + 45;
        this.mandos.y = this.posRelY + 355;
        this.worldI.addChild(this.mandos);*/


        //Loki con sobrero
        const lokiconfez: Lokihat = new Lokihat();
        lokiconfez.scale.set(0.5);
        lokiconfez.x = this.posRelX + 10;
        lokiconfez.y = this.posRelY + 70;
        this.worldI.addChild(lokiconfez);

     

        //panel de nivel
        const nivel: Nivel = new Nivel();
        nivel.scale.set(0.5);
        nivel.x = this.posRelX + 150;
        nivel.y = this.posRelY + 150;
        this.worldI.addChild(nivel);

        //panel de puntos
        const introd: Intro = new Intro();
        introd.scale.set(0.5);
        introd.x = this.posRelX - 5;
        introd.y = this.posRelY + 250;
        this.worldI.addChild(introd);
       

    

        this.addChild(this.worldI)

       

         const myText: Text= new Text("OBTUVISTE: "+ puntos,{fontSize: 60,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
         
         myText.position.x=WIDTH/3+30;
         myText.position.y=HEIGHT/5;
         myText.scale.set(1);
 
         const myText1: Text= new Text("Pulsa la tecla f5 para reiniciar",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
         myText1.position.x=WIDTH/3;
         myText1.position.y=HEIGHT-300;
         myText1.scale.set(1);
 
         this.worldI.addChild(myText);
         this.worldI.addChild(myText1);
      

    }
    





    }

