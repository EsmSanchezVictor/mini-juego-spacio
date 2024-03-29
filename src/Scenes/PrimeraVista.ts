import { Container, Texture, TilingSprite } from "pixi.js";

import { checkCollision } from "../game/IHitbox";
import { Platform } from "../game/Platform";
import { PlatformPoli } from "../game/PlatformPoli";
import { Player } from "../game/Player";
import { IUpdateable } from "../utils/IUpdateable";
import { Vitalidad } from "../game/Vitalidad";
import { Explosion } from "../game/Explosion";
import { SceneBase } from "../utils/SceneBase";
import { SceneManager } from "../utils/SceneManager";
import { sound } from "@pixi/sound";
import { Explota } from "./Explota";






export class PrimeraVista extends SceneBase implements IUpdateable {
    private explosion:Explosion;
    private playerNave: Player;
    private vital: Vitalidad;
    private platforms: Platform[];
    private platformPoli: PlatformPoli[];
    private cantidadVida: number = 100;
    private cantidadPuntos: number = 0;
    public world: Container;
    //public puntos: Puntos;
    

    private background: TilingSprite;//al final para que no se frene

    private gameSpeed: number = 300;
  
    
    private timePassed: number = 0;
    private timePassed2: number = 0;
    private deltaT: number = 0;


    constructor() {

        super();
        //const intro = new Introduccion;
        //this.puntos = new Puntos(this.cantidadPuntos);
        this.vital = new Vitalidad();
        this.platforms = [];
        this.platformPoli = [];
        this.world = new Container();
        this.playerNave = new Player();
        this.explosion=new Explosion;
        

        //this.removeChild(intro.worldI);

         this.background = new TilingSprite(Texture.from("Background"),SceneManager.WIDTH, SceneManager.HEIGHT);
         this.addChild(this.background); //al final para que no se frene



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
        this.soundrack();
        //this.addChild(intro);
    }


    public update(deltaTime: number, _deltaFrame: number): void {
        this.timePassed += deltaTime;
        this.timePassed2 += deltaTime;
        
    if(this.cantidadVida>0){
        if (this.timePassed > (3000 * 200 / this.gameSpeed)) {
            this.gameSpeed += 5;
            this.timePassed = 0;
            const plat = new Platform()
            plat.position.set(SceneManager.WIDTH, Math.random() * 800);
            this.world.addChild(plat);
            this.platforms.push(plat);
        }
        if (this.timePassed2 > (5000 * 200 / this.gameSpeed)) {
            this.timePassed2 = 0;
            const platPoli = new PlatformPoli()
            platPoli.position.set(SceneManager.WIDTH, Math.random() * 800);
            this.world.addChild(platPoli);
            this.platformPoli.push(platPoli);
        }

        this.playerNave.update(deltaTime);
      
        
        for (let platform of this.platforms) {
            platform.speed.x = -this.gameSpeed;
            platform.update(deltaTime / 1000);

            const overlap = checkCollision(this.playerNave, platform);

            if (overlap != null)
             {
                this.playerNave.navePlayer.tint = 0xf00000;
                platform.asteroideg.tint = 0xf00000;
                this.playerNave.separate(overlap, platform.position);
                if (this.playerNave.estado == true && this.playerNave.disparo==false) {
                    this.cantidadVida -= 2;
                    this.vital.textBlancos.text = "Vitalidad | " + this.cantidadVida + "%";
                    this.playerNave.estado = false;
                    //-----
                    sound.find("choque");
                    this.sonidoChoque();
             
                   
                }
                if (this.playerNave.disparo==true ){
                    this.explosion.x=platform.x;
                    this.explosion.y=platform.y;
                    this.world.removeChild(platform);
                    
                    this.world.addChild(this.explosion);
                    sound.find("explota");
                    this.sonidoExplota();
                    platform.destroy();
                    this.playerNave.estado=true;
                    
                   
                }
                this.deltaT+= deltaTime;
                if(this.deltaT> (1000 * 200 / this.gameSpeed)){
                    this.explosion.explosion.stop();
                    this.world.removeChild(this.explosion);
                    this.deltaT=0;
                }
            }else
                { 
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
        for (let platformPoli of this.platformPoli) {
            platformPoli.speed.x = -this.gameSpeed;
            platformPoli.update(deltaTime / 1000);
          
            const overlap2 = checkCollision(this.playerNave, platformPoli);
            if (overlap2 != null) 
            {
                this.playerNave.navePlayer.tint = 0xf00000;
                platformPoli.navepoli.tint = 0xf00000;
                this.playerNave.separate(overlap2, platformPoli.position);
                
                
                if (this.playerNave.estado2 == true  &&  this.playerNave.disparo==false) {
                    this.cantidadVida -= 5;
                    this.vital.textBlancos.text = "Vitalidad | " + this.cantidadVida + "%";
                    this.playerNave.estado2 = false;
                    this.world.addChild(this.explosion);
                    sound.find("explota");
                    this.sonidoExplota();
                    platformPoli.destroy();
                    
                  
                   
                }
                if (this.playerNave.disparo==true ){
                    this.explosion.x=platformPoli.x;
                    this.explosion.y=platformPoli.y;
                    this.world.removeChild(platformPoli);
                    this.world.addChild(this.explosion);
                    sound.find("explota");
                    this.sonidoExplota();
                    platformPoli.destroy();
                    
                  
                  this.playerNave.estado2=true;
                  
                   
                }
                this.deltaT+= deltaTime;
                if(this.deltaT> (1000 * 200 / this.gameSpeed)){
                    this.explosion.explosion.stop();
                    this.world.removeChild(this.explosion);
                    this.deltaT=0;
                }
            }else
                {
                
                this.playerNave.estado2 = true;
                this.cantidadPuntos += 2;
                this.vital.textMonedas.text = this.cantidadPuntos + " Monedas obtenidas";
                platformPoli.navepoli.tint = 0xffffff;
                this.playerNave.navePlayer.tint = 0xffffff;
               
                }
            if (platformPoli.getHitbox().right < 0) {
                platformPoli.destroy();
            }
        }
       
        this.platforms = this.platforms.filter((elem) => !elem.destroyed);
        this.platformPoli = this.platformPoli.filter((elem) => !elem.destroyed);
        this.world.x = -this.playerNave.x * this.worldTransform.a + SceneManager.WIDTH / 4;
       this.background.tilePosition.x -= this.gameSpeed * deltaTime/1000* this.world.x * 0.1; //al final para que no se frene

        if (this.playerNave.x > SceneManager.WIDTH) {
            this.playerNave.x = SceneManager.WIDTH - 430;
        } else if (this.playerNave.x < 0) {
            this.playerNave.x = 430;
        }

        if (this.playerNave.y > SceneManager.HEIGHT - 90) {
            this.playerNave.y = SceneManager.HEIGHT - 90;
            this.playerNave.exploto = true;
        }//para perder al caer del mundo
    }else{
      
        SceneManager.changeScene(new Explota(this.cantidadPuntos));
    }

    }
    sonidoChoque()
    {
        sound.play("choque", {
            loop:false,
            singleInstance:true,
            });        
    }
    soundrack(){
        sound.play("Lance", {
            loop:true,
            singleInstance:true,
            volume:0.2,
           
            });
        
    }
    sonidoExplota()
    {
        sound.play("explota", {
            loop:false,
            singleInstance:true,
            });        
    }



}






