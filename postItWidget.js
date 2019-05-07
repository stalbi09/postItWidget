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
		this.mvc.controller.restorePostIt();  // je charge toutes les données à partir du navigateur
		this.mvc.controller.load();
	}
	
	
	
}

class PostItModel extends WidgetModel {
	
	constructor() {
		super();
		
	}
	
	setUp() {
		super.setUp();
		// les données de mon poste-it
		this.textPostIt="";
		this.couleurPostIt ="khaki";
		this.policePostIt="Calibri";
		this.nombrePostIt=1;
		

	}
	
       storeData(){
		// j'enregistre les données entrés par l'utilisateur dans le navigateur
		this.try.mvc.main.store("textData",this.textPostIt);
		this.try.mvc.main.store("colorData",this.couleurPostIt);
		this.try.mvc.main.store("policeData",this.policePostIt);
	        this.try.mvc.main.store("nombrePostItData",this.nombrePostIt);
	       	
	       
	       	
	}
	
	// les fonctions qui charges les données enregistrées dans le navigateur
	restoreText(){
		var textDefault="";
		if(this.try.mvc.main.has("textData")){
		   	return this.try.mvc.main.restore("textData");
		}
		else return textDefault;
	}
	restoreCouleur(){
		var couleurDefault="khaki";
		if(this.try.mvc.main.has("colorData")){
			 return this.try.mvc.main.restore("colorData");
		}
		else return couleurDefault;
		
	}
	
	restorePolice(){
		var policeDefault="Calibri";
		if(this.try.mvc.main.has("policeData")){
			return this.try.mvc.main.restore("policeData");
		}
		else return policeDefault;
	}
	restoreNombrePostIt(){
		var nombrePostItDefault=1;
		if(this.try.mvc.main.has("nombrePostItData")){
			return this.try.mvc.main.restore("nombrePostItData");
		}
		else return nombrePostItDefault;
	}
	
	// je met a jour les données qui se trouve dans le model au cas ou elles ont changé
	dataPostIt(){
		
		this.textPostIt=this.try.restoreText()+"";
		this.couleurPostIt =this.try.restoreCouleur()+"";
		this.policePostIt=this.try.restorePolice()+"";
		this.nombrePostIt=this.try.restoreNombrePostIt()+"";
		
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
		
		this.text=HH.create("textarea"); // je crée mon champ de texte
		
		this.try.mvc.model.dataPostIt(); // je charge les données enregistré par l'utilisateur si y'en a
		
		this.text.setAttribute("id","text");
		SS.style(this.try.text, {"position": "absolute","top":"110px","left" : "5px", "width": "280px", "height": "80px", "backgroundColor": this.try.mvc.model.couleurPostIt + ""
, "fontFamily" : this.try.mvc.model.policePostIt + "","overflow": "hidden"});
		this.try.stage.appendChild(this.try.text);
		this.try.text.value=this.try.mvc.model.textPostIt;


		this.div1= HH.create("div"); // va contenir le bouton select des couleurs de fond (facultatif juste pour structurer mes idées)
		this.div2= HH.create("div"); // va contenir le bouton select des polices (facultatif)
		
		// je crée un bouton pour que l'utilisateur selectionne la couleur de fond
		this.couleurSelect=HH.create("select");
		SS.style(this.try.couleurSelect, {"position": "absolute","top":"30px","left" : "5px","width" : "80px", "height" : "25px","backgroundColor" : "lavenderblush"});
		this.couleurSelect.value=this.try.mvc.model.couleurPostIt;
		
		this.option1=HH.create("option");
		this.option1.innerHTML="khaki";
		this.option2=HH.create("option");
		this.option2.innerHTML="blue";
		this.option3=HH.create("option");
		this.option3.innerHTML="yellow";
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
		this.option10.innerHTML="gray";
		this.option11=HH.create("option");
		this.option11.innerHTML="pink";
		this.option12=HH.create("option");
		this.option12.innerHTML="lightblue";
		this.option13=HH.create("option");
		this.option13.innerHTML="lightpink";
		this.option14=HH.create("option");
		this.option14.innerHTML="lavender";
		this.try.div1.appendChild(this.try.couleurSelect);
		this.try.couleurSelect.appendChild(this.try.option1);
		this.try.couleurSelect.appendChild(this.try.option2);
		this.try.couleurSelect.appendChild(this.try.option3);
		this.try.couleurSelect.appendChild(this.try.option4);
		this.try.couleurSelect.appendChild(this.try.option5);
		this.try.couleurSelect.appendChild(this.try.option6);
		this.try.couleurSelect.appendChild(this.try.option7);
		this.try.couleurSelect.appendChild(this.try.option8);
		this.try.couleurSelect.appendChild(this.try.option9);
		this.try.couleurSelect.appendChild(this.try.option10);
		this.try.couleurSelect.appendChild(this.try.option11);
		this.try.couleurSelect.appendChild(this.try.option12);
		this.try.couleurSelect.appendChild(this.try.option13);
		this.try.couleurSelect.appendChild(this.try.option14);
		
		
		// je crée un bouton pour que l'utilisateur selectionne la police du text
		this.policeSelect=HH.create("select");
		this.policeSelect.value=this.try.mvc.model.policePostIt;
		SS.style(this.try.policeSelect, {"position": "absolute","top":"30px","left" : "90px","width" : "80px", "height" : "25px","backgroundColor" : "lavenderblush"});
		
		this.option16=HH.create("option");
		this.option16.innerHTML="Calibri";
		this.option17=HH.create("option");
		this.option17.innerHTML="Consolas";
		this.option18=HH.create("option");
		this.option18.innerHTML="Verdana";
		this.option19=HH.create("option");
		this.option19.innerHTML="Arial";
		this.option20=HH.create("option");
		this.option20.innerHTML="Cambria";
		this.option21=HH.create("option");
		this.option21.innerHTML="Marlett";
		this.try.div2.appendChild(this.try.policeSelect);
		this.try.policeSelect.appendChild(this.try.option16);
		this.try.policeSelect.appendChild(this.try.option17);
		this.try.policeSelect.appendChild(this.try.option18);
		this.try.policeSelect.appendChild(this.try.option19);
		this.try.policeSelect.appendChild(this.try.option20);
		this.try.policeSelect.appendChild(this.try.option21);
		
		// j'ajoute les deux div qui sontiennent les deux boutons select de la couleur et de la police dans mon stage
		this.try.stage.appendChild(this.try.div1);
		this.try.stage.appendChild(this.try.div2);
		
		
		// le bouton qui permet d'appliquer la couleur et la police choisie par l'utilisateur
	    	this.btnColorPolice=HH.create("button");
	     	this.try.btnColorPolice.innerHTML = "Appliquer";
		SS.style(this.try.btnColorPolice, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"65px","left" : "10px", "backgroundColor" : "lavenderblush"});
		Events.on(this.try.btnColorPolice, "click", event => this.try.mvc.controller.changeColorPolice());
		this.try.stage.appendChild(this.try.btnColorPolice);
		
		
		// le bouton "new" qui permet de créer un nouveau post-it
		this.newPostIt=HH.create("button");
	     	this.try.newPostIt.innerHTML = "New";
		SS.style(this.try.newPostIt, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"30px","left" : "180px", "backgroundColor" : "lavenderblush"});
		Events.on(this.try.newPostIt, "click", event => this.try.mvc.controller.addPostIt());
		this.try.stage.appendChild(this.try.newPostIt);
		
		
		// le bouton "supprimer" qui permet de suprimer le post-it ainsi que ses données enregistrés dans le navigateur
		this.removePostIt=HH.create("button");
	     	this.try.removePostIt.innerHTML = "supprimer";
		SS.style(this.try.removePostIt, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"200px","left" : "10px", "backgroundColor" : "lavenderblush"});
		Events.on(this.try.removePostIt, "click", event => this.try.mvc.controller.deletePostIt());
		this.try.stage.appendChild(this.try.removePostIt);
		
		
		// le bouton "list"  qui permet de créer une liste à puce dans le champ de text
		this.listePuce=HH.create("button");
	     	this.try.listePuce.innerHTML = "liste";
		SS.style(this.try.listePuce, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"30px","left" : "230px", "backgroundColor" : "lavenderblush"});
		Events.on(this.try.listePuce, "click", event => this.try.mvc.controller.addListe());
		this.try.stage.appendChild(this.try.listePuce);
		
		
		// le bouton "enregistrer" qui permet d'enregistrer les données dans le navigateur
		this.enregistrer=HH.create("button");
	        this.try.enregistrer.innerHTML = "enregistrer";
		SS.style(this.try.enregistrer, {"userSelect": "none", "cursor": "pointer","position": "absolute","top":"200px","left" : "210px", "backgroundColor" : "lavenderblush"});
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

	changeColorPolice() {
		
		var c = this.try.mvc.view.couleurSelect.value ;
		var p = this.try.mvc.view.policeSelect.value ;
		this.try.mvc.model.couleurPostIt=c;
		this.try.mvc.model.policePostIt=p;
		SS.style(this.try.mvc.view.text, {"fontFamily" : p + "","backgroundColor": c +""});
		
	
	}
	
	addPostIt(){
		window.Main.loadWidget(PostItWidget);
		this.try.mvc.model.nombrePostIt++; // le nombre de post-it est initialisé a 1 et a chaque fois qu'on ajout un autre on incremente
		console.log(this.try.mvc.model.nombrePostIt);
		
	}
	
	deletePostIt(){
		// on supprime les donnés du post-it et en les initialise avec leurs valeurs par default
		this.try.mvc.main.destroy("textData");
		this.try.mvc.main.destroy("colorData");
		this.try.mvc.main.destroy("policeData");
		
		this.try.mvc.view.text.value="";
		this.try.mvc.view.couleurSelect.value="khaki";
		this.try.mvc.view.policeSelect.value="Calibri";
		
		this.try.mvc.main.store("textData","");
		this.try.mvc.main.store("colorData","khaki");
		this.try.mvc.main.store("policeData","Calibri");
		
		this.try.changeColorPolice();
		this.try.mvc.model.nombrePostIt--; // pas sur
		console.log(this.try.mvc.model.nombrePostIt); // pas sur
		document.body.removeChild(this.mvc.view.stage);
	}
	
	addListe(){
	
		this.try.mvc.view.text.value += "\n\t  *";
		
	}
	
	enregistrerPostIt(){

		this.try.mvc.model.textPostIt= this.try.mvc.view.text.value;
		this.try.mvc.model.couleurPostIt= this.try.mvc.view.couleurSelect.value;
		this.try.mvc.model.policePostIt= this.try.mvc.view.policeSelect.value;
		
		this.try.mvc.model.storeData();
		
		

	}
	
	restorePostIt(){
		
		this.try.mvc.view.text.value= this.mvc.model.restoreText() ;
		this.try.mvc.view.couleurSelect.value=this.mvc.model.restoreCouleur() ;
		this.try.mvc.view.policeSelect.value= this.mvc.model.restorePolice() ;
		
		this.try.mvc.model.textPostIt=this.mvc.model.restoreText() ;
		this.try.mvc.model.couleurPostIt=this.mvc.model.restoreCouleur() ;
		this.try.mvc.model.policePostIt= this.mvc.model.restorePolice() ;
		this.try.mvc.model.nombrePostIt= this.mvc.model.restoreNombrePostIt(); // pas sur
		
		
		
	}
	
	
	async load() {
		
	}
	
}





