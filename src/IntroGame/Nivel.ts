import { Container, Point, Sprite,Text } from "pixi.js";

export class Nivel extends Container{

    constructor(){
        super();
        const nivel: Sprite = Sprite.from("completoNivel");
        const myText: Text= new Text("E.S.M. Apoyo y movimiento",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
        
       
        myText.scale.set(1);
        myText.position.set(90,100);
        nivel.scale.set(1.35,1);
        nivel.anchor.set(0);
            
        this.addChild(nivel);
        this.addChild(myText);
        
        myText.toGlobal(new Point()); 
	    myText.parent.toGlobal(myText.position);
	
        
    }

}