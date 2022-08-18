function TheConstructor () {
	this.region = 'Ashanti Region';
	this.town = 'Kumasi';
	this.size = 'Big';
	this.greet = function(){
		return 'Hello '+ this.region;
	}
}


var hod = TheConstructor;
