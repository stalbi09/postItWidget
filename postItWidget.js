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
		this.color = "khaki";
		this.textPostIt="";
		this.police="Calibri";
	}
	

	storeText(){
		this.try.textPostIt=this.try.mvc.controller.textData;
		var ta= this.try.textPostIt;
		console.log(ta);
		
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
		this.text.setAttribute("id","text");
		SS.style(this.try.text, {"position": "absolute","top":"110px","left" : "5px", "width": "280px", "height": "80px", "backgroundColor": this.try.mvc.model.color + ""
, "fontFamily" : this.try.mvc.model.police + "","overflow": "hidden"});
		this.try.stage.appendChild(this.try.text);
		var textdata=this.try.text.select();


		this.div1= HH.create("div");
		this.div2= HH.create("div");
		this.couleur= HH.create("input");
		SS.style(this.try.couleur, {"position": "absolute","top":"30px","left" : "5px","width" : "80px", "height" : "25px", "backgroundColor" : "lavender"});
		this.couleur.setAttribute("type","text");
		this.couleur.setAttribute("size","8");
		this.couleur.setAttribute("name","couleur");
		this.try.div1.appendChild(this.try.couleur);

		this.police= HH.create("input");
		SS.style(this.try.police, {"position": "absolute","top":"30px","left" : "90px","width" : "80px", "height" : "25px", "backgroundColor" : "lavender"});
		this.police.setAttribute("type","text");
		this.police.setAttribute("name","police");
		this.police.setAttribute("size","8");
		this.try.div2.appendChild(this.try.police);

		this.try.stage.appendChild(this.try.div1);
		this.try.stage.appendChild(this.try.div2);
		
		

	 	

	    	this.btnColor=HH.create("button");
	     	this.try.btnColor.innerHTML = "Appliquer";
		SS.style(this.try.btnColor, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"65px","left" : "10px", "backgroundColor" : "lavender"});
		Events.on(this.try.btnColor, "click", event => this.try.mvc.controller.changeColor());
		this.try.stage.appendChild(this.try.btnColor);
		
		
		this.btnPolice=HH.create("button");
	     	this.try.btnPolice.innerHTML = "Appliquer";
		SS.style(this.try.btnPolice, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"65px","left" : "95px", "backgroundColor" : "lavender"});
		Events.on(this.try.btnPolice, "click", event => this.try.mvc.controller.changePolice());
		this.try.stage.appendChild(this.try.btnPolice);
		
		this.newPostIt=HH.create("button");
	     	this.try.newPostIt.innerHTML = "New";
		SS.style(this.try.newPostIt, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"30px","left" : "180px", "backgroundColor" : "lavender"});
		Events.on(this.try.newPostIt, "click", event => this.try.mvc.controller.addPostIt());
		this.try.stage.appendChild(this.try.newPostIt);
		
		this.listePuce=HH.create("button");
	     	this.try.listePuce.innerHTML = "liste";
		SS.style(this.try.listePuce, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"30px","left" : "230px", "backgroundColor" : "lavender"});
		Events.on(this.try.listePuce, "click", event => this.try.mvc.controller.addListe());
		this.try.stage.appendChild(this.try.listePuce);
		
		this.enregistrer=HH.create("button");
	        this.try.enregistrer.innerHTML = "enregistrer";
		SS.style(this.try.enregistrer, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"200px","left" : "210px", "backgroundColor" : "lavender"});
		Events.on(this.try.enregistrer, "click", event => this.try.mvc.controller.enregistrerText());
		this.try.stage.appendChild(this.try.enregistrer);
		
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

	changeColor() {
		var c = this.try.mvc.view.couleur.value ;
		SS.style(this.try.mvc.view.text, {"backgroundColor": c +""});	
	}
	
	changePolice(){
		var p = this.try.mvc.view.police.value ;
		SS.style(this.try.mvc.view.text, {"fontFamily" : p + ""});
	}
	
	addPostIt(){
		var i=2; // pour le id du nouveau widget
		let newpostit=new PostItWidget(i,this);
		document.body.appendChild(newpostit.view.stage);
		i++;
			

	}
	
	addListe(){
		this.div3=HH.create("div");
		this.try.mvc.view.text.appendChild(this.try.divi);
		this.liste=HH.create("ul"); 
		//SS.style(this.try.text, {"position": "absolute","top":"110px","left" : "5px", "width": "280px", "height": "80px", "backgroundColor": this.try.mvc.model.color + ""
//, "overflow": "hidden"});
		this.try.divi.appendChild(this.try.liste);
		
		this.puce=HH.create("li");
		this.try.puce.innerHTML="*";
		this.try.liste.appendChild(this.try.puce);
		
	}
	
	enregistrerText(){
		
		this.try.mvc.model.textPostIt= this.try.mvc.view.textdata;
		console.log("this.try.mvc.model.textPostIt");
		

	}
	
	async load() {
		
	}
	
}
