import { SceneManager } from "../utils/SceneManager";
import { SceneBase } from "../utils/SceneBase";
import { AnimatedSprite, Text, Texture} from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { Introduccion } from "./Introduccion";
import { Puntos } from "./Puntos";

export class Explota extends SceneBase
{
    private animaIntro:AnimatedSprite;
    private explosion:AnimatedSprite;
    private Puntos:number;


constructor(puntos:number)
{
    super();
    this.Puntos=puntos;
  
   
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
    this.explosion.scale.x = 5;
    this.explosion.scale.y = 5;
    this.explosion.scale.x=0.5;
    this.explosion.scale.y=0.5;

   
   
    Keyboard.down.on("KeyB", this.onKeyB, this);
        Keyboard.down.on("KeyS", this.onKeyS, this);
        
   
   
    
    this.addChild(this.animaIntro);
    this.addChild(this.explosion);


    const myText3: Text= new Text("¡Fuiste atrapado. Estas Muerto!",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
    myText3.position.x=SceneManager.WIDTH/3;
    myText3.position.y=SceneManager.HEIGHT/3-100;
    myText3.scale.set(1);
    this.addChild(myText3); 
    const myText1: Text= new Text("Pulsa la tecla B para Reiniciar",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
    myText1.position.x=SceneManager.WIDTH/3;
    myText1.position.y=SceneManager.HEIGHT-100;
    myText1.scale.set(1);
    this.addChild(myText1); 
    const myText2: Text= new Text("Pulsa la tecla S para ver puntos",{fontSize: 50,fill:0x0aFfFE, fontFamily:"Comic Sans MS"});
    myText2.position.x=SceneManager.WIDTH/3;
    myText2.position.y=SceneManager.HEIGHT-200;
    myText2.scale.set(1);
    this.addChild(myText2); 

}  
   
private onKeyB(): void 
{
    SceneManager.changeScene(new Introduccion());
}
private onKeyS(): void 
{
    SceneManager.changeScene(new Puntos(this.Puntos));
}
    public update(): void {
    }

}