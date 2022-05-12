import {  AnimatedSprite, Graphics, Rectangle,  Texture } from "pixi.js";
import { IHitbox } from "./IHitbox";
import { PhysiscContainer } from "./PhysiscContainer";

export class PlatformPoli extends PhysiscContainer /*Container  nover el pato*/ implements IHitbox {
    private hitbox: Graphics;
    public navepoli:AnimatedSprite;
    
    constructor()
    {
        super();

        this.navepoli = new AnimatedSprite(
            [

                Texture.from("poli1"),
                Texture.from("poli2"),
                Texture.from("poli3"),
                
                               
            ], true
        );
        this.navepoli.play();
        this.navepoli.anchor.set(0.5, 1);
        this.navepoli.animationSpeed = 0.2;
        this.navepoli.scale.x=0.4;
        this.navepoli.scale.y=0.4;

       
        this.addChild(this.navepoli);

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0x00FFFF, 0.2);
        this.hitbox.drawRect(0,0,373,123);
        this.hitbox.endFill();
        this.hitbox.x=-188;
        this.hitbox.y=-160;
        this.addChild(this.hitbox);
        
    }

    public getHitbox():Rectangle
    {
        return this.hitbox.getBounds()
    }
}