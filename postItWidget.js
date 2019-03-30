class PostItWidget extends Widget {
	
	constructor(id, app) {
		super(id, PostItModel, PostItView, PostItController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = false;
		this.sizeX = 2;
		this.sizeY = 1.5;
		this.radius = 10;
		
	}
	
	async ready() {
		super.ready();
		
		this.controller.load();
	}
	
}

class PostItModel extends WidgetModel {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

   /* c ici quon a la couleur par defaut du widget
	this.mvc.mainstore  c ici quon enregitrele texte https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
	mvc.main.app
	text area c un element hmtl
	creatPostIt(c,p) {
		let postIt= new PostItWidget;
		// est ce que c moi qui va definir aleatoirement le id du nouveau widget ou pas ?
		// comment changer le vew de mon nouveau widget a partir dici?
		// comment enregister le texte saisie par lutilisateur ensuite
		//fontFamily pour la police c en caracte "" https://www.zonecss.fr/javascript-css/fontfamily-js.html
		
	}
	*/

}

class PostItView extends WidgetView {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	draw() {
		super.draw();
		this.try.header.innerHTML = "Post-it";
		this.text=HH.create("textarea"); 
		// on utilise value pour ecrire decu ou bien inner.HTML
		SS.style(this.try.text, {"position": "relative", "width": "100px", "height": h + "100px", "backgroundColor": "yellow","fontFamily" : "Calibri", "overflow": "hidden" });
		//this.try.text.innerHTML="Veuillez saisir votre texte !";
		this.try.stage.appendChild(this.try.text);
// http://www.flatuicolorpicker.com/yellow-rgba-color-code pour les couleur en rgba
// les noms des couleurs en js http://www.wwg1.com/pele-mele/couleurs/noms-couleurs-html.html


		this.couleur= HH.create("input");
		SS.style(this.try.couleur, {"width" : "50%", "height" : "50%"});
		this.couleur.setAttribute("type","text");

		this.police= HH.create("input");
		SS.style(this.try.police, {"width" : "50%", "height" : "50%"});
		this.police.setAttribute("type","text");

	 	

	     this.ajout=HH.create("button");
	     this.try.ajout.innerHTML = "changer la couleur et la police";
		SS.style(this.try.ajout, {"userSelect": "none", "cursor": "pointer"});
		Events.on(this.try.ajout, "click", event => this.try.mvc.controller.ajoutPostIt());
		this.try.stage.appendChild(this.try.ajout);
		 // est ce que c ici que lutilisateur saisie son texte?
		// c ici quon fait ss background et tt
	}
	
	update(title, link) {
	}
		
		
	
}

class PostItController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	ajoutPostIt() {
		var c = this.try.mvc.view.couleur.value ;
		var p = this.try.mvc.view.police.value ;
		SS.style(this.try.mvc.view.text, {"backgroundColor": c +"", "fontFamily" : p + ""});

		//console.log("creer le nouveau post it");
		//let postIt= new postItWidget;
		//this.mvc.model.creatPostIt(c,p);
		//c ici quon change la couleur et la police du widget
	}
	
	async load() {
		
	}
	
}
