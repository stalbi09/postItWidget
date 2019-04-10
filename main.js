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
		this.loadWidget(PostItWidget);
		//this.loadWidget(SomeWidgetClass);
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



