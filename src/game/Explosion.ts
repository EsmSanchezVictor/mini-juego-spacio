import {  AnimatedSprite, Texture } from "pixi.js";

import { PhysiscContainer } from "./PhysiscContainer";

export class Explosion extends PhysiscContainer {

    public explosion:AnimatedSprite;
    
    constructor()
    {
        super();

        this.explosion = new AnimatedSprite(
            [

                Texture.from("explota0"),
                Texture.from("explota1"),
                Texture.from("explota2"),
                Texture.from("explota3"),
                Texture.from("explota4"),
                Texture.from("explota5"),
                Texture.from("explota6"),
                Texture.from("explota7"),
                Texture.from("explota8"),
                Texture.from("explota9"),
                Texture.from("explota10"),
                Texture.from("explota11"),
               
               
            ],true
        );
        this.explosion.play();
        this.explosion.anchor.set(0.5, 1);
        this.explosion.animationSpeed = 0.2;
        
        this.explosion.autoUpdate=false;
        this.explosion.scale.x=0.5;
        this.explosion.scale.y=0.5;

       
        this.addChild(this.explosion);
    }
}