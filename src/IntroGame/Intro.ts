import { Container,NineSlicePlane,Point,Text,Texture } from "pixi.js";

export class Intro extends Container{
private textBlancos: Text;
//private textMonedas: Text;
    constructor(){
        super();
      
        const contenedor = new NineSlicePlane(

            Texture.from("contenedor"),35,35,35,35

        );
        contenedor.scale.set(2.5,0.3);
        contenedor.position.x=-200;
        
            this.textBlancos= new Text("hello word",{fontSize: 100,fill:0x00e000, fontFamily:"Comic Sans MS"});
            this.textBlancos.text="Piloto Listo"
            this.textBlancos.scale.set(1);
            this.textBlancos.position.set(250,30);

            // evento de teclado
           // document.addEventListener("keydown", this.onKeyDown.bind(this));
         



        /*this.textMonedas= new Text("hello word",{fontSize: 40,fill:0x00e000, fontFamily:"Comic Sans MS"});
            this.textMonedas.text="3000 Monedas obtenidas"
            this.textMonedas.scale.set(1);
            this.textMonedas.position.set(330,180);*/
            
            // evento de teclado
          //  document.addEventListener("keyup", this.onKeyUp.bind(this));

       
            
        this.addChild(contenedor);
        //this.addChild(monedas);
     //   this.addChild(blancos);
        this.addChild(this.textBlancos);
       // this.addChild(this.textMonedas);
        
        /*this.textMonedas.toGlobal(new Point()); 
	    this.textMonedas.parent.toGlobal(this.textMonedas.position);*/
        this.textBlancos.toGlobal(new Point()); 
	    this.textBlancos.parent.toGlobal(this.textBlancos.position);
       /* monedas.toGlobal(new Point()); 
	    monedas.parent.toGlobal(monedas.position);
        blancos.toGlobal(new Point()); 
	    blancos.parent.toGlobal(blancos.position);*/
        
    }
  /*  private onKeyDown(e:KeyboardEvent):void{
        console.log("key pressed! ",e.code);
        this.textBlancos.text="key pressed "+e.code;
    }
    private onKeyUp(e:KeyboardEvent):void{
        console.log("key released! ",e.code);
        this.textMonedas.text="key released "+e.code;
    }*/
}