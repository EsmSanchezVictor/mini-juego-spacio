

import { Container, Texture,/* NineSlicePlane,*/ Text, 
AnimatedSprite} from "pixi.js";
import { Lokihat } from "../IntroGame/Lokihat";  // imagen de loki con sombrero 
//import { Estrellas } from "../IntroGame/Estrellas"; // cantidad de estralla obtenidas
import { Nivel } from "../IntroGame/Nivel"; // mensaje de estado de nivel
import { Puntos } from "../IntroGame/Puntos"; // cantidad de puntos y objetivos obtiendos 

//import { Mandos } from "../IntroGame/Mandos";
import { HEIGHT, WIDTH } from "..";
import { Keyboard } from "../utils/Keyboard";




//

export class Introduccion extends Container {
    public posRelX: number;
    public posRelY: number;
  //  private panelPlane: NineSlicePlane;
    public valor = true;
    public valor2= false;
   // private mandos: Mandos;
    private animaIntro:AnimatedSprite;
    
    public worldI: Container;
    constructor() {
        super();
        this.worldI = new Container();

        /*this.panelPlane = new NineSlicePlane(

            Texture.from("panelLcd"), 35, 35, 35, 35

        );

        this.worldI.addChild(this.panelPlane);
        this.panelPlane.width = 500;
        this.panelPlane.height = 480;*/
        this.posRelX = /*this.panelPlane.position.x =*/ (WIDTH / 3) + 50;
        this.posRelY = /*this.panelPlane.position.y =*/ (HEIGHT / 2) - 200;

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
        this.animaIntro.scale.x = 5;
        this.animaIntro.scale.y = 5;
        this.animaIntro.position.x=2000;
        this.animaIntro.position.y=1500;
        this.worldI.addChild(this.animaIntro);
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

        //estrellas
        /*const estrellas: Estrellas = new Estrellas();
        estrellas.scale.set(0.5);
        estrellas.x = this.posRelX + 200;
        estrellas.y = this.posRelY + 70;
        this.worldI.addChild(estrellas);*/

        //panel de nivel
        const nivel: Nivel = new Nivel();
        nivel.scale.set(0.5);
        nivel.x = this.posRelX + 150;
        nivel.y = this.posRelY + 150;
        this.worldI.addChild(nivel);

        //panel de puntos
        const puntos: Puntos = new Puntos();
        puntos.scale.set(0.5);
        puntos.x = this.posRelX - 5;
        puntos.y = this.posRelY + 250;
        this.worldI.addChild(puntos);
       

    

        this.addChild(this.worldI)

        if (this.valor) {

            Keyboard.down.on("KeyB", this.onKeyB, this);
            Keyboard.up.on("KeyB", this.onKeyBup, this);
        }
        //text

         const myText: Text= new Text("NATALIA NATALIA EN EL ESPACIO",{fontSize: 60,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
         
         myText.position.x=WIDTH/4;
         myText.position.y=HEIGHT/5;
         myText.scale.set(1);
 
         const myText1: Text= new Text("Pulsa la tecla B para iniciar",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
         myText1.position.x=WIDTH/3;
         myText1.position.y=HEIGHT-100;
         myText1.scale.set(1);
 
         this.worldI.addChild(myText);
         this.worldI.addChild(myText1);
      

    }
    private onKeyB(): void {
        this.valor = false;


    }

    private onKeyBup(): void {

        console.log("solte la B");
        if (this.valor == false && this.valor2 == false) {
            this.removeChild(this.worldI);
            this.worldI.destroy();
            console.log("11");
        } else {
            this.valor = false;
            this.valor2 = true;
        }





    }
}
