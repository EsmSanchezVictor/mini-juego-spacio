import { Container, NineSlicePlane, Point, Text, Texture } from "pixi.js";

export class Vitalidad extends Container {
   public textBlancos: Text;
    public textMonedas: Text;

    constructor() {
        super();

        const contenedor = new NineSlicePlane(

            Texture.from("contenedor"), 35, 35, 35, 35

        );
        contenedor.scale.set(1.5, 0.15);
        contenedor.position.x = 50;
        contenedor.position.y = 960;

        const contenedor2 = new NineSlicePlane(

            Texture.from("contenedor"), 35, 35, 35, 35

        );
        contenedor2.scale.set(1.5, 0.15);
        contenedor2.position.x = 950;
        contenedor2.position.y = 960;


        this.textBlancos = new Text("hello word", { fontSize: 40, fill: 0x00e000, fontFamily: "Comic Sans MS" });
        this.textBlancos.text = "Voda | *************"
        this.textBlancos.scale.set(1);
        this.textBlancos.position.set(250, 980);


        this.textMonedas = new Text("hello word", { fontSize: 40, fill: 0x00e000, fontFamily: "Comic Sans MS" });
        this.textMonedas.text = " Monedas obtenidas"
        this.textMonedas.scale.set(1);
        this.textMonedas.position.set(1150, 980);


        this.addChild(contenedor);
        this.addChild(contenedor2);

        this.addChild(this.textBlancos);
        this.addChild(this.textMonedas);

        this.textMonedas.toGlobal(new Point());
        this.textMonedas.parent.toGlobal(this.textMonedas.position);
        this.textBlancos.toGlobal(new Point());
        this.textBlancos.parent.toGlobal(this.textBlancos.position);

    }
    
}