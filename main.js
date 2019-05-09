window.addEventListener("load", event => {
	window.Main = new Main();
	window.Main.load();
});

class Main {
	
	constructor() {
		trace("load dash");
		this._name = "dash";
		this._widgets = new Map();
		this._id = 0;
	}
	
	
		
		
		
	load() {
		var i;
		
		/*c'est pour faire en sorte que tout les post-it crée par l'utilisateur s'affiche sur la page mais etant donné qu'il
		 n'arrive pas a definir "widget" alors j'ai fait 1 pour qu'il affiche le premier par default mais 
		 si vous cliquer sur le bouton "new" vous pourrez afficher les autres post-it deja enregistrer */
		
		var n=1;//normalement je dois ecrire "widget.mvc.model.restoreNombrePostIt();" a la place de 1
		for(i=0;i<n;i++){
			this.loadWidget(PostItWidget);
			
		}
	}
	
	loadWidget(classRef) {
		let widget = new classRef(++this._id, this);
		document.body.appendChild(widget.mvc.view.stage);
		trace("new widget", widget.name);
		this._widgets.set(widget.name, widget);
	}
	
	async get(url) {
		return await Comm.urlrequest("https://node.nicopr.fr/" + this._name + url, {});
	}
	
	async post(url, data) {
		return await Comm.urlrequest("https://node.nicopr.fr/" + this._name + url, {"method": "POST", "data": data});
	}
	
	get appname() {
		return this._name;
	}
	
	get widgets() {
		return this._widgets;
	}
}



