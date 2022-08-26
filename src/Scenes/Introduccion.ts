

import { Texture,Text,AnimatedSprite} from "pixi.js";
import { Lokihat } from "../IntroGame/Lokihat";  // imagen de loki con sombrero 
import { sound } from "@pixi/sound";
import { Nivel } from "../IntroGame/Nivel"; // mensaje de estado de nivel
import { Intro } from "../IntroGame/Intro"; // cantidad de puntos y objetivos obtiendos 
//import { Keyboard } from "../utils/Keyboard";
import { SceneManager } from "../utils/SceneManager";
import { SceneBase } from "../utils/SceneBase";
import { Button } from "../ui/Button";
import { PrimeraVista } from "./PrimeraVista";
import { ToggleButton } from "../ui/ToggleButton";







export class Introduccion extends SceneBase {
   
    public posRelX: number;
    public posRelY: number;
    public valor = true;
    public valor2= false;
    private adelante: Button;
    private configura:Button;
 
    
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
       
        

       
        //text

         const myText: Text= new Text("ESCAPE",{fontSize: 75,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
         
         myText.position.x=SceneManager.WIDTH/4.5;
         myText.position.y=SceneManager.HEIGHT/5;
         myText.scale.set(1);
 
   
         
         this.adelante= new Button(Texture.from("adelante"),"Right");
         this.adelante.on("buttonClick", this.clickAdelante,this)
      
         this.adelante.x=this.posRelX+95;
         this.adelante.y=this.posRelY+355;
         this.adelante.scale.set(0.1);
         this.adelante.interactive= true;
         this.adelante.buttonMode= true;


         this.configura= new Button(Texture.from("config"),"Config");
         this.configura.on("buttonClick", this.Config,this)
      
         this.configura.x=this.posRelX+355;
         this.configura.y=this.posRelY+355;
         this.configura.scale.set(0.1);
         this.configura.interactive= true;
         this.configura.buttonMode= true;


        sound.find("Lance");
        
        const toggleMute = new ToggleButton(Texture.from("MusicOn"), Texture.from("MusicOff"));
        toggleMute.x=this.posRelX+225;
        toggleMute.y=this.posRelY+355; 
        toggleMute.scale.set(0.1);
        toggleMute.on(ToggleButton.TOGGLE_EVENT, this.toggleMute, this);

         this.addChild(toggleMute);
         this.addChild(this.adelante);
         this.addChild(this.configura);
         this.addChild(myText);
       
         
         this.soundrack();
         
    }
    private clickAdelante():void {
   
        SceneManager.changeScene(new PrimeraVista());
        console.log("estoy aca");
        sound.pause;
       
        
    }

    private Config():void {
       /* let menuConfig = new MenuConfig();
        menuConfig.position.set(SceneManager.WIDTH * 1/3, SceneManager.HEIGHT * 1/7);
        this.addChild(menuConfig);*/
        
    }

    public toggleMute(unMute:boolean) {
        if (unMute) 
        {
            sound.unmuteAll();
        }else
        {
            sound.muteAll();
        }
    }

    public soundrack(){
        sound.play("Lance", {
            loop:true,
            singleInstance:true,
            });
    }

    public update(): void {
    }
}
