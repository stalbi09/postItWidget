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
*/
	creatPostIt(c,p) {
		let postIt= new PostItWidget;
		// est ce que c moi qui va definir aleatoirement le id du nouveau widget ou pas ?
		// comment changer le vew de mon nouveau widget a partir dici?
		// comment enregister le texte saisie par lutilisateur ensuite
		//fontFamily pour la police c en caracte "" https://www.zonecss.fr/javascript-css/fontfamily-js.html
		
	}
	

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
		this.try.text.innerHTML="Veuillez saisir votre texte !";
		// on utilise value pour ecrire decu ou bien inner.HTML
		SS.style(this.try.text, {"position": "relative", "width": "50px", "height": "50px", "overflow": "hidden", "backgroundColor": "rgba(255, 246, 143, 1)"});
		this.try.stage.appendChild(this.try.text);
		
		var c = prompt("Veuillez choisir une couleur de fond");
	 	var p = prompt("Veuillez choisir une police");
		
		this.ajout=HH.create("button");
	        this.try.ajout.innerHTML = "Ajouter un Post-It";
		SS.style(this.try.ajout, {"userSelect": "none", "cursor": "pointer"});
		Events.on(this.try.ajout, "click", event => this.try.mvc.controller.ajoutPostIt(c,p));
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
		creatPostIt();
		//c ici quon change la couleur et la police du widget
	}
	
	async load() {
		
	}
	
}
