import { SceneManager } from "../utils/SceneManager";
import { SceneBase } from "../utils/SceneBase";
import { AnimatedSprite, Text, Texture} from "pixi.js";
import { Introduccion } from "./Introduccion";
import { Puntos } from "./Puntos";
import { Explosion } from "../game/Explosion";
import { Button } from "../ui/Button";

export class Explota extends SceneBase
{
    private animaIntro:AnimatedSprite;
    private adelante: Button;
    private retorno: Button;
   private explosion:Explosion;
    private Puntos:number;


constructor(puntos:number)
{
    super();
    this.Puntos=puntos;
    this.explosion=new Explosion;
   
    this.animaIntro = new AnimatedSprite(
        [

            Texture.from("fondoIO1" ),
            Texture.from("fondoIO3" ),
            Texture.from("fondoIO5" ),
            Texture.from("fondoIO7" ),
            Texture.from("fondoIO9" ),
            Texture.from("fondoIO11"),
            Texture.from("fondoIO13"),
            Texture.from("fondoIO15"),
            Texture.from("fondoIO17"),
            Texture.from("fondoIO19"),
            Texture.from("fondoIO21"),
            Texture.from("fondoIO23"),
        ], true
    );
    this.animaIntro.play();
    this.animaIntro.anchor.set(1, 1);
    this.animaIntro.animationSpeed = 0.8;
    this.animaIntro.scale.x = 5;
    this.animaIntro.scale.y = 5;
    this.animaIntro.position.x=2000;
    this.animaIntro.position.y=1500;

   
    this.explosion.x=SceneManager.WIDTH/2;
    this.explosion.y=SceneManager.HEIGHT/1.2-100;
    
    this.explosion.scale.x=3;
    this.explosion.scale.y=3;
    
   
    
    this.addChild(this.animaIntro);
    this.addChild(this.explosion);


    const myText3: Text= new Text("¡Fuiste atrapado. Estas Muerto!",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
    myText3.position.x=SceneManager.WIDTH/3;
    myText3.position.y=SceneManager.HEIGHT/3-100;
    myText3.scale.set(1);
    this.addChild(myText3); 
    const myText2: Text= new Text("Ver puntos   Reiniciar",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
    myText2.position.x=SceneManager.WIDTH/3+90;
    myText2.position.y=SceneManager.HEIGHT/1.2+100;
    myText2.scale.set(1);
    this.addChild(myText2); 
    this.adelante= new Button(Texture.from("adelante"),"Right");
    this.adelante.on("buttonClick", this.clickAdelante,this)
 
    this.adelante.x=SceneManager.WIDTH/3+225;
    this.adelante.y=SceneManager.HEIGHT/1.2;
    this.adelante.scale.set(0.1);
    this.adelante.interactive= true;
    this.adelante.buttonMode= true;
    this.addChild(this.adelante);

    this.retorno= new Button(Texture.from("retorno"),"Right");
    this.retorno.on("buttonClick", this.clickRetorno,this)
 
    this.retorno.x=SceneManager.WIDTH/3+345;
    this.retorno.y=SceneManager.HEIGHT/1.2;
    this.retorno.scale.set(0.1);
    this.retorno.interactive= true;
    this.retorno.buttonMode= true;
    this.addChild(this.retorno);
   

}  
   





private clickAdelante():void {
    SceneManager.changeScene(new Puntos(this.Puntos));
    }

private clickRetorno():void {
    SceneManager.changeScene(new Introduccion());
    }

public update(): void 
    {
    }

}