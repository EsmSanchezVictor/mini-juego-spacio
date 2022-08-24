import { Container, /*Point,*/ Sprite } from "pixi.js";

export class Lokihat extends Container{

    constructor(){
        super();
        const poli: Sprite = Sprite.from("poli1");
        const nave: Sprite = Sprite.from("player1");
        
        poli.scale.set(1.5,1.5);
        poli.position.set(710,-400);
        
       

        nave.scale.set(5.5,5.5);
        nave.position.set(-340,-40);
        nave.angle=-40;
        
       // nave.anchor.set(0);
              this.addChild(nave);     
        this.addChild(poli); 
  
       /* nave.toGlobal(new Point()); 
	nave.parent.toGlobal(nave.position);*/
	
    }

}