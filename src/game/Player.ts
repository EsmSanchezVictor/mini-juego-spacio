import { AnimatedSprite, Graphics, ObservablePoint, Rectangle, Texture } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { IHitbox } from "./IHitbox";
import { PhysiscContainer } from "./PhysiscContainer";

export class Player extends PhysiscContainer implements IHitbox {

    private static readonly GRAVITY = 50;
    //private static readonly MOVE_SPEED = 350; // 350; nover el pato
    //private static readonly JUMP_SPEED= 150;

    public exploto = false;
    public navePlayer: AnimatedSprite;
    public rayo: AnimatedSprite;
    public rayo2: AnimatedSprite;
    public disparo:Boolean=false;
    private hitbox: Graphics;
    public estado:Boolean=true;
    public estado2:boolean=true;
    constructor() {
        super();
        //animated sprite
        
        this.navePlayer = new AnimatedSprite(
            [

                Texture.from("player1"),
                Texture.from("player2"),


            ], true
        );

        
        this.navePlayer.play();
        this.navePlayer.anchor.set(0.5, 1);
        this.navePlayer.animationSpeed = 0.8;
        this.navePlayer.scale.x = 3;
        this.navePlayer.scale.y = 3;

        this.rayo = new AnimatedSprite(
            [

                Texture.from("rayo1"),
                Texture.from("rayo2"),
                Texture.from("rayo3"),

            ], true
        );
        this.rayo.anchor.set(0.5, 1);
        this.rayo.animationSpeed = 0.8;
        this.rayo.scale.x = 1;
        this.rayo.scale.y = 0.5;
         this.rayo.x=this.navePlayer.x+400;
        this.rayo.y=this.navePlayer.y-150;

           this.rayo2 = new AnimatedSprite(
            [

                Texture.from("rayo1"),
                Texture.from("rayo2"),
                Texture.from("rayo3"),

            ], true
        );

        
        this.rayo2.anchor.set(0.5, 1);
        this.rayo2.animationSpeed = 0.8;
        this.rayo2.scale.x = 0.31;
        this.rayo2.scale.y = 0.5;
         this.rayo2.x=this.navePlayer.x-400;
        this.rayo2.y=this.navePlayer.y-150;

       /* const auxZero = new Graphics;
        auxZero.beginFill(0xff00ff);
        auxZero.drawCircle(0, 0, 10);
        auxZero.endFill();*/

        //---caja----
        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xff00ff, 0);
        this.hitbox.drawRect(0, 0, 220, 80);
        this.hitbox.endFill;
        this.hitbox.x = -115;
        this.hitbox.y = -115;



        this.addChild(this.navePlayer);
   
        this.navePlayer.addChild(this.hitbox);

        this.acceleration.y = Player.GRAVITY;
        Keyboard.down.on("KeyA", this.onKeyB, this);
        Keyboard.up.on("KeyA", this.onKeyBup, this);
       

    }

    public override  destroy(options: any) {
        super.destroy(options);
        
    }

    public override update(deltaMS: number) {

        super.update(deltaMS / 1000);
        this.navePlayer.update(deltaMS / (1000 / 60));


        if (Keyboard.state.get("ArrowRight")) {
            this.navePlayer.x +=50;
            this.navePlayer.scale.x = 3;
            this.rayo.scale.x=1;
            this.rayo.x=this.navePlayer.x+400;
            this.rayo2.x=this.navePlayer.x-400;
            

           


        } else if (Keyboard.state.get("ArrowLeft")) {
            this.navePlayer.x -=50;
            this.navePlayer.scale.x = -3;
            this.rayo.scale.x=-1;
            this.rayo.x=this.navePlayer.x-400;
            this.rayo2.x=this.navePlayer.x+400;


        } else {
            this.speed.x = 0;

        }
        if (Keyboard.state.get("ArrowDown")) {
            this.speed.y = 250;

        } else if (Keyboard.state.get("ArrowUp")) {
            this.speed.y = -250;

        }

        else {
            this.acceleration.y = Player.GRAVITY;
        }
     



    }

    private onKeyB(): void {
        this.disparo=true;

        this.rayo.play();
       
        this.addChild(this.rayo)
        this.addChild(this.rayo2)
        this.hitbox.scale.x=1.6;
    
        
       
        



    }

    private onKeyBup(): void {
        this.disparo=false;
        this.rayo.stop();
        this.removeChild(this.rayo);
        this.rayo2.stop();
        this.removeChild(this.rayo2);
        this.hitbox.scale.x=1;
      
       
    }
   
    public getHitbox(): Rectangle {
        return this.hitbox.getBounds();
    }
    public separate(overlap: Rectangle, platform: ObservablePoint<any>) {
        if (overlap.width < overlap.height) {
            this.navePlayer.tint = 0xf00000;
            //this.estado=false;
            if (this.x > platform.x) 
            {
                this.y +=Math.random() * 50// overlap.width+200;
            } else if (this.x < platform.x) 
            {
               this.y -=Math.random() * 50// overlap.width+200;
            }

        }
        else {
            this.estado=false;
            this.estado2=false;
            this.navePlayer.tint = 0xf00000;
            if (this.y > platform.y) 
            {
                this.y -=Math.random() * 50// overlap.height+200;
                this.exploto = true;
            } else if (this.y < platform.y) 
            {
                this.y +=Math.random() * 50// overlap.height+200;
            }
        }
    }
}