// © RRTeam

var webgl = null;

function runWebGL(){
	webgl = new CanvasWebGl([["modelos/puzzle_triangulocubo/triangulo.txt", "triangulo"],
													["modelos/puzzle_triangulocubo/cubo_1.txt", "cubo_1"]
													 ]);
 	setEventListeners();
}
