class PostItWidget extends Widget {
	
	constructor(id, app) {
		super(id, PostItModel, PosteItView, PosteItController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = true ;
		this.sizeX = 2;
		this.sizeY = 0.5;
		this.radius = 10;
		this.backgroundColor="";
		this.fontFamily="";
		this.textContent="";
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
		let postIt= new postItWidget;
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
		this.text=HH.create("textarea"); // on utilise value pour ecrire decu ou bien inner.HTML
		SS.style(this.text, {"position": "relative", "width": "100px", "height": h + "100px", "overflow": "hidden", "backgroundColor": "yellow"});
		



		var c = prompt("Veuillez choisir une couleur de fond");
	 	 var p = prompt("Veuillez choisir une police")

	     this.try.footer.innerHTML = "Ajouter un Post-It";
		 CSS.style(this.try.footer, {"userSelect": "none", "cursor": "pointer"});
		 Events.on(this.try.footer, "click", event => this.try.mvc.controller.ajoutPostIt(c,p));
		 this.try.stage.appendChild(this.try.footer);
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