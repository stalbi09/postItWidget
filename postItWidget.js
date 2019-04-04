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
		this.controller.restorePostIt();
		// c ici que jappelle la fonction restore
		this.controller.load();
	}
	
	
	
}

class PostItModel extends WidgetModel {
	
	constructor() {
		super();
		
	}
	
	setUp() {
		super.setUp();
		this.couleurPostIt = "khaki";
		this.textPostIt="";
		this.policePostIt="Calibri";
	}
	
       storeData(){
		
		this.try.mvc.main.store("textData",this.textPostIt);
		this.try.mvc.main.store("colorData",this.couleurPostIt);
		this.try.mvc.main.store("policeData",this.policePostIt); 
	}
	
	restoreText(){
		if(this.try.mvc.main.has("textData")){
		   	return this.try.mvc.main.restore("textData");
		}
	}
	restoreCouleur(){
		
		if(this.try.mvc.main.has("colorData")){
			return this.try.mvc.main.restore("colorData");
		}
	}
	
	restorePolice(){
		if(this.try.mvc.main.has("policeData")){
			return this.try.mvc.main.restore("policeData");
		}
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
		SS.style(this.try.text, {"position": "absolute","top":"110px","left" : "5px", "width": "280px", "height": "80px", "backgroundColor": this.try.mvc.model.couleurPostIt + ""
, "fontFamily" : this.try.mvc.model.policePostIt + "","overflow": "hidden"});
		this.try.stage.appendChild(this.try.text);
		this.try.text.innerHTML=this.try.mvc.model.textPostIt;


		this.div1= HH.create("div");
		this.div2= HH.create("div");
		/*this.couleur= HH.create("input");
		SS.style(this.try.couleur, {"position": "absolute","top":"30px","left" : "5px","width" : "80px", "height" : "25px", "backgroundColor" : "lavender"});
		this.couleur.setAttribute("type","text");
		this.couleur.setAttribute("size","8");
		this.couleur.setAttribute("name","couleur");
		this.try.div1.appendChild(this.try.couleur); */
		
		this.couleur=HH.create("select");
		this.couleur.innerHTML="la couleur";
		this.option1=HH.create("option");
		this.option1.innerHTML="blue";
		this.option2.HH.create("option");
		this.option2.innerHTML="yellow";
		this.option3=HH.create("option");
		this.option3.innerHTML="beige";
		this.option4=HH.create("option");
		this.option4.innerHTML="black";
		this.option5=HH.create("option");
		this.option5.innerHTML="white";
		this.option6=HH.create("option");
		this.option6.innerHTML="red";
		this.option7=HH.create("option");
		this.option7.innerHTML="green";
		this.option8=HH.create("option");
		this.option8.innerHTML="fuchsia";
		this.option9=HH.create("option");
		this.option9.innerHTML="gold";
		this.option10=HH.create("option");
		this.option11.innerHTML="gray";
		this.option12=HH.create("option");
		this.option12.innerHTML="pink";
		this.option13=HH.create("option");
		this.option13.innerHTML="lightblue";
		this.option14=HH.create("option");
		this.option14.innerHTML="lightpink";
		this.option15=HH.create("option");
		this.option15.innerHTML="lavender";
		
		
		
		
		SS.style(this.try.couleur, {"position": "absolute","top":"30px","left" : "5px","width" : "80px", "height" : "25px"});
		this.try.div1.appendChild(this.try.couleur);
		this.try.couleur.appendChild(this.try.option1);
		this.try.couleur.appendChild(this.try.option2);
		this.try.couleur.appendChild(this.try.option3);
		this.try.couleur.appendChild(this.try.option4);
		this.try.couleur.appendChild(this.try.option5);
		this.try.couleur.appendChild(this.try.option6);
		this.try.couleur.appendChild(this.try.option7);
		this.try.couleur.appendChild(this.try.option8);
		this.try.couleur.appendChild(this.try.option9);
		this.try.couleur.appendChild(this.try.option10);
		this.try.couleur.appendChild(this.try.option11);
		this.try.couleur.appendChild(this.try.option12);
		this.try.couleur.appendChild(this.try.option13);
		this.try.couleur.appendChild(this.try.option14);
		this.try.couleur.appendChild(this.try.option15);
		
		/*this.police= HH.create("input");
		SS.style(this.try.police, {"position": "absolute","top":"30px","left" : "90px","width" : "80px", "height" : "25px", "backgroundColor" : "lavender"});
		this.police.setAttribute("type","text");
		this.police.setAttribute("name","police");
		this.police.setAttribute("size","8");
		this.try.div2.appendChild(this.try.police);*/
		
		this.police=HH.create("select");
		SS.style(this.try.police, {"position": "absolute","top":"30px","left" : "90px","width" : "80px", "height" : "25px"});
		this.police.innerHTML="la couleur";
		this.option16=HH.create("option");
		this.option16.innerHTML="Calibri";
		this.option17=HH.create("option");
		this.option17.innerHTML="Calibri";
		this.option18=HH.create("option");
		this.option18.innerHTML="Verdana";
		this.option19=HH.create("option");
		this.option19.innerHTML="Arial";
		this.option20=HH.create("option");
		this.option20.innerHTML="Cambria";
		this.option21=HH.create("option");
		this.option21.innerHTML="Marlett";
		this.try.div2.appendChild(this.try.police);
		this.try.police.appendChild(this.try.option16);
		this.try.police.appendChild(this.try.option17);
		this.try.police.appendChild(this.try.option18);
		this.try.police.appendChild(this.try.option19);
		this.try.police.appendChild(this.try.option20);
		this.try.police.appendChild(this.try.option21);
		
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
		Events.on(this.try.enregistrer, "click", event => this.try.mvc.controller.enregistrerPostIt());
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
		//  ca ne marche pas encore pq? je sais pas
		document.getElementById("text").value += "\n\t  *";
		
	}
	
	enregistrerPostIt(){
		
		
		this.try.mvc.model.textPostIt= this.try.mvc.view.text.value;
		this.try.mvc.model.couleurPostIt= this.try.mvc.view.couleur.value;
		this.try.mvc.model.policePostIt= this.try.mvc.view.police.value;
		
		this.try.mvc.model.storeData();
		alert(this.try.mvc.model.textPostIt);
		alert(this.try.mvc.model.couleurPostIt);
		alert(this.try.mvc.model.policePostIt);
		

	}
	
	restorePostIt(){
		this.try.mvc.view.text.value= this.mvc.model.restoreText() ;
		this.try.mvc.view.couleur.value= this.mvc.model.restoreCouleur() ;
		this.try.mvc.view.police.value= this.mvc.model.restorePolice() ;
		
	}
	
	
	async load() {
		
	}
	
}
