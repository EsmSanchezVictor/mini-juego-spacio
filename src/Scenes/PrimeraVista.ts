import { Container } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { checkCollision } from "../game/IHitbox";
import { Introduccion } from "./Introduccion";
import { Platform } from "../game/Platform";
import { PlatformPoli } from "../game/PlatformPoli";
import { Player } from "../game/Player";
import { IUpdateable } from "../utils/IUpdateable";
import { Vitalidad } from "../game/Vitalidad";
import { Puntos } from "./Puntos";
import { Explosion } from "../game/explosion";






export class PrimeraVista extends Container implements IUpdateable {
    private explosion:Explosion;
    private playerNave: Player;
    private vital: Vitalidad;
    private platforms: Platform[];
    private platformPoli: PlatformPoli[];
    private cantidadVida: number = 100;
    private cantidadPuntos: number = 0;
    public world: Container;
    public puntos: Puntos;
    

    //private background: TilingSprite;//al final para que no se frene

    private gameSpeed: number = 300;
   // private aux: Boolean =true;
  //  private aux2: Boolean =true;
    private timePassed: number = 0;
    private timePassed2: number = 0;



    constructor() {

        super();
        const intro = new Introduccion;
        this.puntos = new Puntos(this.cantidadPuntos);
        this.vital = new Vitalidad();
        this.platforms = [];
        this.platformPoli = [];
        this.world = new Container();
        this.playerNave = new Player();
        this.explosion=new Explosion;
        

        //this.removeChild(intro.worldI);

        // this.background = new TilingSprite(Texture.from("Background"), WIDTH, HEIGHT);
        // this.addChild(this.background); //al final para que no se frene



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

        let platPoli = new PlatformPoli
        plat.position.set(1100, 800);
        this.world.addChild(platPoli);
        this.platformPoli.push(platPoli);

        platPoli = new PlatformPoli
        plat.position.set(1500, 800);
        this.world.addChild(platPoli);
        this.platformPoli.push(platPoli);

        platPoli = new PlatformPoli
        plat.position.set(1600, 700);
        this.world.addChild(platPoli);
        this.platformPoli.push(platPoli);

        platPoli = new PlatformPoli
        plat.position.set(1900, 800);
        this.world.addChild(platPoli);
        this.platformPoli.push(platPoli);

        this.playerNave.x = 300;
        this.playerNave.y = 300;
        this.playerNave.scale.set(0.5)
        this.world.addChild(this.playerNave);
      
        this.addChild(this.vital);
        
        this.addChild(this.world);
       
        this.addChild(intro);
    }


    public update(deltaTime: number, _deltaFrame: number): void {
        this.timePassed += deltaTime;
        this.timePassed2 += deltaTime;
        
    if(this.cantidadVida>0){
        if (this.timePassed > (3000 * 200 / this.gameSpeed)) {
            this.gameSpeed += 5;
            this.timePassed = 0;
            const plat = new Platform()
            plat.position.set(WIDTH, Math.random() * 800);
            this.world.addChild(plat);
            this.platforms.push(plat);
        }
        if (this.timePassed2 > (5000 * 200 / this.gameSpeed)) {
            this.timePassed2 = 0;
            const platPoli = new PlatformPoli()
            platPoli.position.set(WIDTH, Math.random() * 800);
            this.world.addChild(platPoli);
            this.platformPoli.push(platPoli);
        }

        this.playerNave.update(deltaTime);
      
        
        for (let platform of this.platforms) {
            platform.speed.x = -this.gameSpeed;
            platform.update(deltaTime / 1000);

            const overlap = checkCollision(this.playerNave, platform);

            if (overlap != null) {
                this.playerNave.navePlayer.tint = 0xf00000;
                platform.asteroideg.tint = 0xf00000;
                this.playerNave.separate(overlap, platform.position);
                if (this.playerNave.estado == true && this.playerNave.disparo==false) {
                    this.cantidadVida -= 5;
                    this.vital.textBlancos.text = "Vitalidad | " + this.cantidadVida + "%";
                    this.playerNave.estado = false;
                   
                }
                if (this.playerNave.disparo==true ){
                    this.explosion.x=platform.x;
                    this.explosion.y=platform.y;
                    this.world.removeChild(platform);
                    this.world.addChild(this.explosion);
                    this.playerNave.estado=true;
                   // this.cantidadVida += 5;
                    //this.aux = false;
                   
                }

            }else
                {  // siempre entra aqui.....!!!!!!!!!!!!!!!!!!!!!!!
                this.playerNave.estado=true;
                this.cantidadPuntos += 2;
                this.vital.textMonedas.text = this.cantidadPuntos + " Monedas obtenidas";
                this.playerNave.navePlayer.tint = 0xffffff;
                platform.asteroideg.tint = 0xffffff;
                
                }
           
                
           

            if (platform.getHitbox().right < 0) {
                platform.destroy();
            }

        }
       /* for (let platformPoli of this.platformPoli) {
            platformPoli.speed.x = -this.gameSpeed;
            platformPoli.update(deltaTime / 1000);
          
            const overlap2 = checkCollision(this.playerNave, platformPoli);
            if (overlap2 != null) 
            {
                this.playerNave.separate(overlap2, platformPoli.position);
                this.playerNave.navePlayer.tint = 0xf00000;
                platformPoli.navepoli.tint = 0xf00000;
                
                if (this.aux2 == true) {
                    this.cantidadVida -= 5;
                    this.vital.textBlancos.text = "Vitalidad | " + this.cantidadVida + "%";
                    this.aux2 = false;
                }
               
            }else
                {
                
                this.aux2 = true;
                this.cantidadPuntos += 2;
                this.vital.textMonedas.text = this.cantidadPuntos + " Monedas obtenidas";
                platformPoli.navepoli.tint = 0xffffff;
                this.playerNave.navePlayer.tint = 0xffffff;
               
                }
            if (platformPoli.getHitbox().right < 0) {
                platformPoli.destroy();
            }
        }*/
       
        this.platforms = this.platforms.filter((elem) => !elem.destroyed);
        this.platformPoli = this.platformPoli.filter((elem) => !elem.destroyed);
        this.world.x = -this.playerNave.x * this.worldTransform.a + WIDTH / 4;
        //  this.background.tilePosition.x -= this.gameSpeed * deltaTime/1000* this.world.x * 0.1; //al final para que no se frene

        if (this.playerNave.x > WIDTH) {
            this.playerNave.x = WIDTH - 430;
        } else if (this.playerNave.x < 0) {
            this.playerNave.x = 430;
        }

        if (this.playerNave.y > HEIGHT - 90) {
            this.playerNave.y = HEIGHT - 90;
            this.playerNave.exploto = true;
        }//para perder al caer del mundo
    }else{
        const puntosS =new Puntos(this.cantidadPuntos);
        this.world.removeChild(this.playerNave);
        this.removeChild(this.world);
       // this.world.destroy();
       
       this.addChild(puntosS)
  
        //this.removeChild(this.world);
      

       
       
        
       
  
    }

    }





}






