import { Container } from "pixi.js";
import { PrimeraVista } from "./PrimeraVista";//  botones de control
import { Introduccion } from "./Introduccion";
import { Mandos } from "../IntroGame/Mandos";//  botones de control
import { Keyboard } from "../utils/Keyboard";


export class Main extends Container 

{
    public valor=false;
    private intro:Introduccion;
    
    private mandos:Mandos;
    constructor(){
        
        super();
        this.intro=new Introduccion;
        this.addChild(this.intro);
        const myPrimera= new PrimeraVista;
        if(this.valor){
            this.addChild(myPrimera);  
        }
        Keyboard.down.on("KeyB",this.onKeyB,this);
        Keyboard.up.on("KeyB",this.onKeyBup,this);

        this.mandos = new Mandos();
        this.mandos.scale.set(0.3);
        this.mandos.x = this.intro.posRelX + 45;
        this.mandos.y = this.intro.posRelY + 355;
        this.addChild(this.mandos);
        
       
      

      
    
}
private onKeyB():void{
    console.log("aprete la B");
    this.removeChild(this.intro);
    this.removeChild(this.mandos)
    this.intro.destroy();
    this.mandos.destroy();

   

}
  
private onKeyBup():void{
console.log("solte la B");

    const myPrimera= new PrimeraVista;
    this.addChild(myPrimera);
    this.valor=true;
  

}
}


