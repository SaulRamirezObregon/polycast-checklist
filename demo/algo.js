class Animal{
	comer(){
		console.log('el animal come')
	}
}

class Caballo extends Animal{
	
	comer(){
		console.log('el caballo come')
	}
}

const caballo = new Caballo();
caballo.comer();