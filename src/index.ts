
import { Application, Loader, Ticker } from 'pixi.js'
import { asseets } from './assets';
import { PrimeraVista } from './Scenes/PrimeraVista';
import { Keyboard } from './utils/Keyboard';



export const WIDTH = 1920;
export const HEIGHT = 1080;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: WIDTH,
	height: HEIGHT,
});

Keyboard.initialize();

window.addEventListener("resize", () => {
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));

Loader.shared.add(asseets);

Loader.shared.onComplete.add(() => {

	const myPrimera = new PrimeraVista;
	app.stage.addChild(myPrimera);
	Ticker.shared.add(function (deltaFrame) {

		myPrimera.update(Ticker.shared.deltaMS, deltaFrame);

		
		this.valor = false;
	});


});

Loader.shared.load();





