import { Container } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { checkCollision } from "../game/IHitbox";
import { Introduccion } from "./Introduccion";
import { Platform } from "../game/Platform";
import { Player } from "../game/Player";
import { IUpdateable } from "../utils/IUpdateable";




export class PrimeraVista extends Container implements IUpdateable {

    private playerNave: Player;

    private platforms: Platform[];

  public world: Container;



    // private background: TilingSprite;//al final para que no se frene

    private gameSpeed: number = 300;

    private timePassed: number = 0;



    constructor() {

        super();
        const intro = new Introduccion;
        
        this.platforms = [];
        this.world = new Container();
        this.playerNave = new Player();
      
       
           //this.removeChild(intro.worldI);
            


            /* this.background = new TilingSprite(Texture.from("Background"), WIDTH, HEIGHT);
             this.addChild(this.background);*/ //al final para que no se frene

          

            let plat = new Platform()
            plat.position.set(150, 700);
            this.world.addChild(plat);
            this.platforms.push(plat);

            plat = new Platform()
            plat.position.set(1100, 600);
            this.world.addChild(plat);
            this.platforms.push(plat);

            plat = new Platform()
            plat.position.set(1900, 500);
            this.world.addChild(plat);
            this.platforms.push(plat);


            this.playerNave.x = 300;
            this.playerNave.y = 300;
            this.playerNave.scale.set(0.5)
            this.world.addChild(this.playerNave);

            this.addChild(this.world);
            console.log("entre")
        
            this.addChild(intro);
            console.log(intro.valor)
        
    }


    public update(deltaTime: number, _deltaFrame: number): void {
        this.timePassed += deltaTime;

        if (this.timePassed > (3000 * 200 / this.gameSpeed)) {
            this.gameSpeed += 5;
            this.timePassed = 0;
            const plat = new Platform()
            plat.position.set(WIDTH, Math.random() * 1600);
            this.world.addChild(plat);
            this.platforms.push(plat);
        }

        this.playerNave.update(deltaTime);

        for (let platform of this.platforms) {
            platform.speed.x = -this.gameSpeed;
            platform.update(deltaTime / 1000);

            const overlap = checkCollision(this.playerNave, platform);
            if (overlap != null) {
                this.playerNave.separate(overlap, platform.position);
            }
            if (platform.getHitbox().right < 0) {

                platform.destroy();
            }
        }
        this.platforms = this.platforms.filter((elem) => !elem.destroyed);

        this.world.x = -this.playerNave.x * this.worldTransform.a + WIDTH / 4;
        //  this.background.tilePosition.x -= this.gameSpeed * deltaTime/1000* this.world.x * 0.1; //al final para que no se frene

        if (this.playerNave.x > WIDTH) {
            this.playerNave.x = WIDTH - 430;
        } else if (this.playerNave.x < 0) {
            this.playerNave.x = 430;
        }

        if (this.playerNave.y > HEIGHT) {
            this.playerNave.y = HEIGHT;
            this.playerNave.exploto = true;
        }//para perder al caer del mundo


    }





}






