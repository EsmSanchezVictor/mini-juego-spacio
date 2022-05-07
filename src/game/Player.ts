import { AnimatedSprite, Graphics, ObservablePoint, Rectangle, Texture } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { IHitbox } from "./IHitbox";
import { PhysiscContainer } from "./PhysiscContainer";

export class Player extends PhysiscContainer implements IHitbox {

    private static readonly GRAVITY = 50;
    //private static readonly MOVE_SPEED = 350; // 350; nover el pato
    //private static readonly JUMP_SPEED= 150;

    public exploto = false;
    private navePlayer: AnimatedSprite;
    private hitbox: Graphics;
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

        const auxZero = new Graphics;
        auxZero.beginFill(0xff00ff);
        auxZero.drawCircle(0, 0, 10);
        auxZero.endFill();

        //---caja----
        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xff00ff, 0);
        this.hitbox.drawRect(0, 0, 220, 80);
        this.hitbox.endFill;
        this.hitbox.x = -115;
        this.hitbox.y = -115;



        this.addChild(this.navePlayer);
        this.addChild(auxZero);
        this.navePlayer.addChild(this.hitbox);

        this.acceleration.y = Player.GRAVITY;

       

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



        } else if (Keyboard.state.get("ArrowLeft")) {
            this.navePlayer.x -=50;
            this.navePlayer.scale.x = -3;

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
    /* private jump(){
         if(this.canJump)
         {
             this.canJump=false;
             this.speed.y = -Player.JUMP_SPEED;
         }
     }*/
    public getHitbox(): Rectangle {
        return this.hitbox.getBounds();
    }
    public separate(overlap: Rectangle, platform: ObservablePoint<any>) {
        if (overlap.width < overlap.height) {
            if (this.x > platform.x) {
                this.x += overlap.width;
            } else if (this.x < platform.x) {
                this.x -= overlap.width;
            }

        }
        else {
            if (this.y > platform.y) {
                this.y -= overlap.height;
                this.speed.y = 0;
                this.exploto = true;
            } else if (this.y < platform.y) {
                this.y += overlap.height;
            }
        }
    }
}