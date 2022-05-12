import {  AnimatedSprite, Graphics, Rectangle,  Texture } from "pixi.js";
import { IHitbox } from "./IHitbox";
import { PhysiscContainer } from "./PhysiscContainer";

export class Platform extends PhysiscContainer /*Container  nover el pato*/ implements IHitbox {
    private hitbox: Graphics;
    public asteroideg:AnimatedSprite;
    
    constructor()
    {
        super();

        this.asteroideg = new AnimatedSprite(
            [

                Texture.from("asteroideg0" ),
                Texture.from("asteroideg1" ),
                Texture.from("asteroideg2" ),
                Texture.from("asteroideg3" ),
                Texture.from("asteroideg4" ),
                Texture.from("asteroideg5" ),
                Texture.from("asteroideg6" ),
                Texture.from("asteroideg7" ),
                Texture.from("asteroideg8" ),
                Texture.from("asteroideg9" ),
                Texture.from("asteroideg10"),
                Texture.from("asteroideg11"),
                Texture.from("asteroideg12"),
                Texture.from("asteroideg13"),
                Texture.from("asteroideg14"),
                Texture.from("asteroideg15"),
       
               
            ], true
        );
        this.asteroideg.play();
        this.asteroideg.anchor.set(0.5, 1);
        this.asteroideg.animationSpeed = 0.2;
        this.asteroideg.scale.x=3;
        this.asteroideg.scale.y=3;

       
        this.addChild(this.asteroideg);

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0x00FFFF, 0.2);
        this.hitbox.drawRect(0,0,183,183);
        this.hitbox.endFill();
        this.hitbox.x=-90;
        this.hitbox.y=-270;
        this.addChild(this.hitbox);
        
    }

    public getHitbox():Rectangle
    {
        return this.hitbox.getBounds()
    }
}