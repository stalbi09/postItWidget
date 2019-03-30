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
		SS.style(this.try.text, {"position": "relative", "width": "100px", "height": "100px", "backgroundColor": "rgba(255, 246, 143, 1)"
, "overflow": "hidden"});
		//this.try.text.innerHTML="Veuillez saisir votre texte !";
		this.try.stage.appendChild(this.try.text);



		this.couleur= HH.create("input");
		SS.style(this.try.couleur, {"width" : "50%", "height" : "50%"});
		this.couleur.setAttribute("type","text");
		this.try.stage.appendChild(this.try.couleur);

		this.police= HH.create("input");
		SS.style(this.try.police, {"width" : "50%", "height" : "50%"});
		this.police.setAttribute("type","text");
		this.try.stage.appendChild(this.try.police);

	 	

	     this.ajout=HH.create("button");
	     this.try.ajout.innerHTML = "changer la couleur et la police";
		SS.style(this.try.ajout, {"userSelect": "none", "cursor": "pointer"});
		Events.on(this.try.ajout, "click", event => this.try.mvc.controller.ajoutPostIt());
		this.try.stage.appendChild(this.try.ajout);
		
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

		
	}
	
	async load() {
		
	}
	
}
