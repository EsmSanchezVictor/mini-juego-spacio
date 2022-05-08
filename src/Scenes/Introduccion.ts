

import { Container, Texture, NineSlicePlane /*Text*/ } from "pixi.js";
import { Lokihat } from "../IntroGame/Lokihat";  // imagen de loki con sombrero 
import { Estrellas } from "../IntroGame/Estrellas"; // cantidad de estralla obtenidas
import { Nivel } from "../IntroGame/Nivel"; // mensaje de estado de nivel
import { Puntos } from "../IntroGame/Puntos"; // cantidad de puntos y objetivos obtiendos 

import { HEIGHT, WIDTH } from "..";






export class Introduccion extends Container {
    public posRelX:number;
    public posRelY:number;
    private panelPlane: NineSlicePlane;
    constructor() {
        super();


        this.panelPlane = new NineSlicePlane(

            Texture.from("panelLcd"), 35, 35, 35, 35

        );

        this.addChild(this.panelPlane);
        this.panelPlane.width = 500;
        this.panelPlane.height = 480;
        this.posRelX = this.panelPlane.position.x = (WIDTH / 3) + 50;
        this.posRelY = this.panelPlane.position.y = (HEIGHT / 2) - 200;
        
        //panel de mandos
      

        //Loki con sobrero
        const lokiconfez: Lokihat = new Lokihat();
        lokiconfez.scale.set(0.5);
        lokiconfez.x = this.posRelX + 10;
        lokiconfez.y = this.posRelY + 70;
        this.addChild(lokiconfez);

        //estrellas
        const estrellas: Estrellas = new Estrellas();
        estrellas.scale.set(0.5);
        estrellas.x = this.posRelX + 200;
        estrellas.y = this.posRelY + 70;
        this.addChild(estrellas);

        //panel de nivel
        const nivel: Nivel = new Nivel();
        nivel.scale.set(0.5);
        nivel.x = this.posRelX + 150;
        nivel.y = this.posRelY + 150;
        this.addChild(nivel);

        //panel de puntos
        const puntos: Puntos = new Puntos();
        puntos.scale.set(0.5);
        puntos.x = this.posRelX - 5;
        puntos.y = this.posRelY + 250;
        this.addChild(puntos);




        //text

        /* const myText: Text= new Text("¿Solo una estrella y media?",{fontSize: 20,fill:0x00c000, fontFamily:"Comic Sans MS"});
         
         myText.position.x=610;
         myText.position.y=130;
         myText.scale.set(1);
 
         const myText1: Text= new Text("¡Mirá como te mira Loki..!",{fontSize: 20,fill:0x00e000, fontFamily:"Comic Sans MS"});
      
         myText1.position.x=615;
         myText1.position.y=250;
         myText1.scale.set(1);
 
         this.addChild(myText);
         this.addChild(myText1);
      */   
    
    }
    
}
