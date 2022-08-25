/*import { Container, Sprite, Text, Texture } from "pixi.js";
import { PrimeraVista } from "../Scenes/PrimeraVista";
import { SceneManager } from "../utils/SceneManager";


export class Button extends Container {
  // public static readonly CLICKED_EVENT: string = "mousedown";
    private boton: Texture;
    private sprBoton: Sprite;
    private clase: String;
    public textBase: Text;
   

    constructor(boton: Texture, clase: String) {

        super();
        
        this.boton = boton;
        this.clase = clase;
        this.textBase = new Text("", { fontSize: 45, fill: 0x00e000, fontFamily: "Comic Sans MS" });
 
        this.sprBoton = Sprite.from(boton);


        // this.spr.anchor.set(0.5);
        this.addChild(this.sprBoton);
        this.textBase.position.set(20,280);
        this.addChild(this.textBase);


        this.sprBoton.on("mousedown", this.onMouseDown, this);
        this.sprBoton.on("mouseover", this.onMouseOver, this);
        this.sprBoton.on("mouseout", this.onMouseOut, this);
        this.sprBoton.interactive = true;

        //Textura
        this.sprBoton.texture = this.boton;
    }
  

    
   
    private onMouseDown(): void {
        
     if(this.textBase.text==""){ 
        if (this.clase == "adelante") {
            
           // this.emit("buttonCLick")
           SceneManager.changeScene(new PrimeraVista());
            this.textBase.text = "Proximo Nivel";
            console.log("entre aca");
          
   
         
        } else if (this.clase == "atras") {
          //  this.emit("buttonCLick")
            this.textBase.text = "Anterior Nivel";
            console.log("atras")

        } else if (this.clase == "repetir") {
           // this.emit("buttonCLick")
            this.textBase.text = "Repetir Nivel";
            console.log("repetir")

        } else if (this.clase == "home") {
          //  this.emit("buttonCLick")
            this.textBase.text = "Menu principal";
            console.log("home")
        }
    }else {
        this.emit("buttonCLick")
        this.textBase.text = "";
    }
        
    }
    

    private onMouseOver(): void {
        this.sprBoton.angle = 10;


    }
    private onMouseOut(): void {
        this.sprBoton.angle = 0;


    }

}*/


import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{

    private def:Texture;

    private spr:Sprite;



constructor(def:Texture, _name:string){
    super();
    this.def = def;
    //this.nameButton = name;

    this.spr = Sprite.from(def);
    //this.spr.anchor.set(0.5);
    this.addChild(this.spr);

    this.spr.interactive = true;
    this.spr.on("pointerdown", this.onMouseDown, this);
    this.spr.on("pointerup", this.onMouseUp, this);
    this.spr.on("pointerover", this.onMouseOver, this);
    this.spr.on("pointerover", this.onMouseOut, this);


};

private onMouseDown(): void {
    this.spr.texture = this.def;
   
}

private onMouseOver():void{
    this.spr.texture = this.def;
    this.spr.angle=10;
    
}

private onMouseOut():void{
    this.spr.texture = this.def;
    this.spr.angle=0;
    
}

private onMouseUp(): void {
    this.emit("buttonClick");
    this.spr.texture = this.def;
    
}


}