

import {  Texture,Text,AnimatedSprite} from "pixi.js";
import { Lokihat } from "../IntroGame/Lokihat";  // imagen de loki con sombrero 
//import { sound } from "@pixi/sound";
import { Nivel } from "../IntroGame/Nivel"; // mensaje de estado de nivel
import { Intro } from "../IntroGame/Intro"; // cantidad de puntos y objetivos obtiendos 
import { Keyboard } from "../utils/Keyboard";
import { SceneManager } from "../utils/SceneManager";
import { SceneBase } from "../utils/SceneBase";
import { Button } from "../ui/Button";
import { PrimeraVista } from "./PrimeraVista";







export class Introduccion extends SceneBase {
   
    public posRelX: number;
    public posRelY: number;
    public valor = true;
    public valor2= false;
    private adelante: Button;
    // private atras: Button;
    /*private repetir: Button;
    private home: Button;*/
    
    private animaIntro:AnimatedSprite;


    
   
    constructor() {
        super();
        this.posRelX = /*this.panelPlane.position.x =*/ (SceneManager.WIDTH / 3) + 50;
        this.posRelY = /*this.panelPlane.position.y =*/ (SceneManager.HEIGHT / 2) - 200;
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
        this.animaIntro.play();
        this.animaIntro.anchor.set(1, 1);
        this.animaIntro.animationSpeed = 0.8;
        this.animaIntro.scale.x = 5;
        this.animaIntro.scale.y = 5;
        this.animaIntro.position.x=2000;
        this.animaIntro.position.y=1500;
        this.addChild(this.animaIntro);
       

        //Loki con sobrero
        const lokiconfez: Lokihat = new Lokihat();
        lokiconfez.scale.set(0.5);
        lokiconfez.x = this.posRelX - 130;
        lokiconfez.y = this.posRelY + 70;
        this.addChild(lokiconfez);

      
        //panel de nivel
        const nivel: Nivel = new Nivel();
        nivel.scale.set(0.5);
        nivel.x = this.posRelX + 150;
        nivel.y = this.posRelY + 150;
        this.addChild(nivel);

        //panel de puntos
        const introd: Intro = new Intro();
        introd.scale.set(0.5);
        introd.x = this.posRelX - 5;
        introd.y = this.posRelY + 250;
        this.addChild(introd);
       
        

        if (this.valor) {

            Keyboard.down.on("KeyB", this.onKeyB, this);
            Keyboard.up.on("KeyB", this.onKeyBup, this);
        }
        //text

         const myText: Text= new Text("ESCAPE",{fontSize: 80,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
         
         myText.position.x=SceneManager.WIDTH/4.5;
         myText.position.y=SceneManager.HEIGHT/5;
         myText.scale.set(1);
 
         const myText1: Text= new Text("Pulsa la tecla B para iniciar",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
         myText1.position.x=SceneManager.WIDTH/3;
         myText1.position.y=SceneManager.HEIGHT-100;
         myText1.scale.set(1);
         
         this.adelante= new Button(Texture.from("adelante"),"Right");
         this.adelante.on("buttonClick", this.clickAdelante,this)
      
         this.adelante.x=this.posRelX+45;
         this.adelante.y=this.posRelY+355;
         this.adelante.scale.set(0.3);
         this.adelante.interactive= true;
         this.adelante.buttonMode= true;

     


         this.addChild(this.adelante);
         this.addChild(myText);
         this.addChild(myText1);
         //this.worldI.addChild(mandos);
        


         
    }
    clickAdelante():void {
   
        //this.removeChild(this.worldI);
        SceneManager.changeScene(new PrimeraVista());
        this.destroy();
        console.log("estoy aca");
       
        
    }

 
    private onKeyB(): void {
        this.valor = false;


    }

    private onKeyBup(): void {

        
        if (this.valor == false && this.valor2 == false) {
            SceneManager.changeScene(new Introduccion());
        } else {
            this.valor = false;
            this.valor2 = true;
        }





    }
    public update(): void {
    }
}
