var canvas = document.querySelector('canvas'),
	context = canvas.getContext("2d");


var keyboard = {
	one: false,
	two: false,
	three: false,
	four: false,
	five: false,
	six: false,
	seven: false,
	eight: false,
	nine: false,
	zero: false,
	a: false,
	z: false,
	e: false,
	r: false,
	t: false,
	y: false,
	u: false,
	i: false,
	o: false,
	p: false,
	q: false,
	s: false,
	d: false,
	f: false,
	g: false,
	h: false,
	j: false,
	k: false,
	l: false,
	m: false,
	w: false,
	x: false,
	c: false,
	v: false,
	b: false,
	n: false,
	interogation: false,
	point: false,
	equal: false,
	plus: false,
	superior: false,
	inferior: false,
	escape: false,
	enter: false

};



/* 
    La fonction loop sera appelée dès que possible
    Plus l'ordinateur est performant, plus la fréquence sera rapide
    La fonction ne sera pas appelée tant que l'ordinateur n'est pas prêt
*/
function loop() {
	window.requestAnimationFrame(loop);
	context.clearRect(0, 0, canvas.width, canvas.height);



	// HAUT DE LA MACHINE À ÉCRIRE

	//IMMOBILE

	context.beginPath(); // Commencer un tracé
	context.moveTo(160, 362); // Placer le tracé
	context.lineTo(745, 362); // Tracer une ligne
	context.lineWidth = 4;
	context.strokeStyle = '#6c6c6c';
	context.stroke(); // Faire apparaitre les lignes tracées

	context.beginPath(); // Commencer un tracé
	context.moveTo(220, 380); // Placer le tracé
	context.lineTo(160, 460); // Tracer une ligne
	context.lineTo(164, 490); // Tracer une ligne
	context.lineTo(158, 491); // Tracer une ligne
	context.lineTo(159, 459); // Tracer une ligne
	context.closePath();
	context.lineWidth = 4;
	context.lineJoin = 'round';
	context.fill();
	context.strokeStyle = '#000000';
	context.stroke(); // Faire apparaitre les lignes tracées


	function headLeftSideTypewriter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "rgba(0, 0, 0, 0)";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#343131'; //Couleur du remplissage

		context.fill();
		context.stroke();
	}
	headLeftSideTypewriter(155, 350, 10, 28, 2);

	function headRightSideTypewriter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "rgba(0, 0, 0, 0)";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#343131'; //Couleur du remplissage
		context.fill();
		context.stroke();
	}
	headRightSideTypewriter(745, 350, 10, 28, 2);


	function headTypewriter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		var gradient = context.createLinearGradient(740, 420, 180, 350); // x1, y1, x2, y2
		gradient.addColorStop(0, '#101010'); // Départ
		gradient.addColorStop(0.5, '#3f3f3f'); // Milieu
		gradient.addColorStop(1, '#474747'); // Arrivée

		context.beginPath();
		context.strokeStyle = "rgba(0, 0, 0, 0)";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = gradient; //Couleur du remplissage
		context.fill();
		context.stroke();
	}
	headTypewriter(180, 330, 550, 70, 12);

	function sheet(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;
		context.beginPath();
		context.strokeStyle = "#ffffff";
		context.lineWidth = "2";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#ffffff'; //Couleur du remplissage
		context.fill();
		context.stroke();
	}
	sheet(250, 150, 400, 500, 2);

	function thicknessTypewriter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;
		context.beginPath();
		context.strokeStyle = "rgba(49, 49, 49, 0)";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#1e1e1e'; //Couleur du remplissage
		context.fill();

		context.shadowColor = 'rgba(31, 31, 31, 0.72)'; // Couleur de l'ombre
		context.shadowBlur = 50; // Largeur du flou
		context.shadowOffsetX = 10; // Décalage en X
		context.shadowOffsetY = 25; // Décalage en Y
		context.stroke();
	}
	thicknessTypewriter(200, 650, 500, 70, 12);


	function bodyTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		var gradient = context.createLinearGradient(200, 400, 700, 700); // x1, y1, x2, y2
		gradient.addColorStop(0, '#101010'); // Départ
		gradient.addColorStop(0.5, '#3f3f3f'); // Milieu
		gradient.addColorStop(1, '#474747'); // Arrivée

		context.beginPath();
		context.strokeStyle = "rgba(49, 49, 49, 0)";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = gradient; //Couleur du remplissage
		context.fill();
		context.stroke();
	}
	bodyTypewiter(200, 370, 500, 330, 12);


	function bodyTopTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		var gradient = context.createLinearGradient(200, 400, 700, 700); // x1, y1, x2, y2
		gradient.addColorStop(0, '#7e7e7e'); // Départ
		gradient.addColorStop(0.5, '#3f3f3f'); // Milieu
		gradient.addColorStop(1, '#1a1a1a'); // Arrivée

		context.beginPath();
		context.strokeStyle = "rgba(49, 49, 49, 0)";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - 0);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - 0);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = gradient; //Couleur du remplissage
		context.fill();

		/*context.beginPath();
		context.arc(440, 380, 80, 0, Math.PI, false);
		context.fillStyle = 'rgb(0, 0, 0)';
		context.fill();*/

		context.beginPath();
		context.moveTo(430, 372); // X et Y du point de départ
		context.bezierCurveTo(
			425, // X du premier point de tension
			440, // Y du premier point de tension
			300, // X du second point de tension
			410, // Y du second point de tension
			320, // X du point d'arrivée
			430 // Y du point d'arrivée
		);
		context.quadraticCurveTo(
			460, // X du seul point de tension
			500, // Y du seul point de tension
			585, // X du point d'arrivée
			430 // Y du point d'arrivée
		);

		context.bezierCurveTo(
			600, // X du premier point de tension
			410, // Y du premier point de tension
			480, // X du second point de tension
			440, // Y du second point de tension
			480, // X du point d'arrivée
			372 // Y du point d'arrivée
		);
		context.closePath();
		context.lineWidth = 3;
		context.strokeStyle = 'black';
		context.fillStyle = 'black';
		context.fill();
		context.stroke();

		context.beginPath(); // Commencer un tracé

		context.moveTo(460, 375); // Placer le tracé
		context.lineTo(400, 350); // Tracer une ligne
		context.lineTo(400, 330); // Tracer autre une ligne
		context.lineWidth = 3;
		context.strokeStyle = 'black';
		context.stroke();

	}
	bodyTopTypewiter(200, 370, 500, 110, 12);


	function contentTouchTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "rgba(0, 0, 0, 0)";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#0d0d0d'; //Couleur du remplissage
		context.fill();
		context.stroke();
	}
	contentTouchTypewiter(230, 490, 440, 170, 2);

	function contentTouchSpaceTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "rgba(0, 0, 0, 0)";
		context.lineWidth = "1";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#0d0d0d'; //Couleur du remplissage
		context.fill();
		context.stroke();
	}
	contentTouchSpaceTypewiter(300, 650, 300, 40, 2);

	function touchSpaceTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "#eaeaea";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		if (keyboard.escape == true)
			context.fillStyle = '#808080';
		else
			context.fillStyle = '#0d0d0d';
		context.fill();
		context.stroke();
	}
	touchSpaceTypewiter(375, 660, 150, 20, 2);

	function touchShiftTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "#eaeaea";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#0d0d0d'; //Couleur du remplissage
		context.fill();
		context.stroke();
		var text = '7';
		context.font = '15px Helvetica'; // Font
		context.textAlign = 'center'; // Alignement horizontal (left | center | right)
		context.textBaseline = 'top';
		context.strokeText(text, 510, 500);
	}
	touchShiftTypewiter(320, 660, 30, 20, 2);

	function touchShiftTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "#eaeaea";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		context.fillStyle = '#0d0d0d'; //Couleur du remplissage
		context.fill();
		context.stroke();
	}
	touchShiftTypewiter(550, 660, 30, 20, 2);

	/*
	// Créé la variable image
	var image_s = new Image();
	// Écoute l'événement load
	image_s.onload = function () {
		// Dessine l'image
		context.drawImage(image_s, 332, 662, image_s.width / 7, image_s.height / 7);
	};
	// Ajoute le chemin de l'image
	image_s.src = "/images/shift.png";
*/

	function touchEnterTypewiter(x, y, w, h, radius) {
		var r = x + w;
		var b = y + h;

		context.beginPath();
		context.strokeStyle = "#eaeaea";
		context.lineWidth = "0";
		context.moveTo(x + radius, y);
		context.lineTo(r - radius, y);
		context.quadraticCurveTo(r, y, r, y + radius);
		context.lineTo(r, y + h - radius);
		context.quadraticCurveTo(r, b, r - radius, b);
		context.lineTo(x + radius, b);
		context.quadraticCurveTo(x, b, x, b - radius);
		context.lineTo(x, y + radius);
		context.quadraticCurveTo(x, y, x + radius, y);
		if (keyboard.enter == true)
			context.fillStyle = '#808080';
		else
			context.fillStyle = '#0d0d0d';
		context.fill();
		context.stroke();
	}
	touchEnterTypewiter(635, 545, 25, 45, 5);
	/*
		// Créé la variable image
		var image = new Image();
		// Écoute l'événement load
		image.onload = function () {
			// Dessine l'image
			context.drawImage(image, 640, 560, image.width / 2.5, image.height / 2.5);
		};
		// Ajoute le chemin de l'image
		image.src = "/images/enter.png";

	*/


	// KEYBOARD ANIMATION

	// KEYCODES


	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 49) {
			keyboard.one = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 49) {
			keyboard.one = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 50) {
			keyboard.two = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 50) {
			keyboard.two = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 51) {
			keyboard.three = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 51) {
			keyboard.three = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 52) {
			keyboard.four = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 52) {
			keyboard.four = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 53) {
			keyboard.five = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 53) {
			keyboard.five = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 54) {
			keyboard.six = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 54) {
			keyboard.six = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 55) {
			keyboard.seven = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 55) {
			keyboard.seven = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 56) {
			keyboard.eight = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 56) {
			keyboard.eight = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 57) {
			keyboard.nine = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 57) {
			keyboard.nine = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 48) {
			keyboard.zero = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 48) {
			keyboard.zero = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 65) {
			keyboard.a = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 65) {
			keyboard.a = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 90) {
			keyboard.z = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 90) {
			keyboard.z = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 69) {
			keyboard.e = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 69) {
			keyboard.e = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 82) {
			keyboard.r = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 82) {
			keyboard.r = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 84) {
			keyboard.t = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 84) {
			keyboard.t = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 89) {
			keyboard.y = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 89) {
			keyboard.y = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 85) {
			keyboard.u = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 85) {
			keyboard.u = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 73) {
			keyboard.i = true;
		}
	});

	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 73) {
			keyboard.i = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 79) {
			keyboard.o = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 79) {
			keyboard.o = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 80) {
			keyboard.p = true;
		}
	});



	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 80) {
			keyboard.p = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 81) {
			keyboard.q = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 81) {
			keyboard.q = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 83) {
			keyboard.s = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 83) {
			keyboard.s = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 68) {
			keyboard.d = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 68) {
			keyboard.d = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 70) {
			keyboard.f = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 70) {
			keyboard.f = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 71) {
			keyboard.g = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 71) {
			keyboard.g = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 72) {
			keyboard.h = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 72) {
			keyboard.h = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 74) {
			keyboard.j = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 74) {
			keyboard.j = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 75) {
			keyboard.k = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 75) {
			keyboard.k = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 76) {
			keyboard.l = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 76) {
			keyboard.l = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 77) {
			keyboard.m = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 77) {
			keyboard.m = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 87) {
			keyboard.w = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 87) {
			keyboard.w = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 88) {
			keyboard.x = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 88) {
			keyboard.x = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 67) {
			keyboard.c = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 67) {
			keyboard.c = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 86) {
			keyboard.v = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 86) {
			keyboard.v = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 66) {
			keyboard.b = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 66) {
			keyboard.b = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 78) {
			keyboard.n = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 78) {
			keyboard.n = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 191) {
			keyboard.interrogation = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 191) {
			keyboard.interrogation = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 190) {
			keyboard.point = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 190) {
			keyboard.point = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 187) {
			keyboard.equal = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 187) {
			keyboard.equal = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 187) {
			keyboard.plus = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 187) {
			keyboard.plus = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 32) {
			keyboard.escape = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 32) {
			keyboard.escape = false;
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 13) {
			keyboard.enter = true;
		}
	});


	document.addEventListener('keyup', function (event) {
		if (event.keyCode == 13) {
			keyboard.enter = false;
		}
	});




	// INTERACTIVE  KEYBOARD

	context.beginPath();
	context.arc(270, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.one == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '1';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 270, 500);

	context.beginPath();
	context.arc(310, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.two == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '2';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 310, 500);

	context.beginPath();
	context.arc(350, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.three == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '3';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 350, 500);

	context.beginPath();
	context.arc(390, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.four == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '4';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 390, 500);

	context.beginPath();
	context.arc(430, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.five == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '5';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 430, 500);

	context.beginPath();
	context.arc(470, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.six == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '6';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 470, 500);

	context.beginPath();
	context.arc(510, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.seven == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '7';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 510, 500);

	context.beginPath();
	context.arc(550, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.eight == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '8';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 550, 500);

	context.beginPath();
	context.arc(590, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.nine == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '9';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 590, 500);

	context.beginPath();
	context.arc(630, 510, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.zero == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '0';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 630, 500);


	// 2e ligne


	context.beginPath();
	context.arc(250, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.a == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'A';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 250, 540);

	context.beginPath();
	context.arc(290, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.z == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'Z';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 290, 540);

	context.beginPath();
	context.arc(330, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.e == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'E';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 330, 540);

	context.beginPath();
	context.arc(370, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.r == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'R';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 370, 540);

	context.beginPath();
	context.arc(410, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.t == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'T';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 410, 540);

	context.beginPath();
	context.arc(450, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.y == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'Y';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 450, 540);

	context.beginPath();
	context.arc(490, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.u == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'U';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 490, 540);

	context.beginPath();
	context.arc(530, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.i == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'I';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 530, 540);

	context.beginPath();
	context.arc(570, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.o == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'O';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 570, 540);

	context.beginPath();
	context.arc(610, 550, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.p == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'P';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 610, 540);


	// 3e ligne


	context.beginPath();
	context.arc(250, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.q == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'Q';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 250, 580);

	context.beginPath();
	context.arc(290, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.s == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'S';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 290, 580);

	context.beginPath();
	context.arc(330, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.d == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'D';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 330, 580);

	context.beginPath();
	context.arc(370, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.f == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'F';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 370, 580);

	context.beginPath();
	context.arc(410, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.g == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'G';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 410, 580);

	context.beginPath();
	context.arc(450, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.h == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'H';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 450, 580);

	context.beginPath();
	context.arc(490, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.j == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'J';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 490, 580);

	context.beginPath();
	context.arc(530, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.k == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'K';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 530, 580);

	context.beginPath();
	context.arc(570, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.l == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'L';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 570, 580);

	context.beginPath();
	context.arc(610, 590, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.m == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'M';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 610, 580);


	// 4e ligne

	context.beginPath();
	context.arc(270, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.w == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'W';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 270, 620);

	context.beginPath();
	context.arc(310, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.x == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'X';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 310, 620);

	context.beginPath();
	context.arc(350, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.c == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'C';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 350, 620);

	context.beginPath();
	context.arc(390, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.v == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'V';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 390, 620);

	context.beginPath();
	context.arc(430, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.b == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'B';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 430, 620);

	context.beginPath();
	context.arc(470, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.n == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = 'N';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 470, 620);

	context.beginPath();
	context.arc(510, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.interrogation == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '?';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 510, 620);

	context.beginPath();
	context.arc(550, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.point == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '.';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 550, 620);

	context.beginPath();
	context.arc(590, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.equal == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '=';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 590, 620);

	context.beginPath();
	context.arc(630, 630, 12, -20, Math.PI, false);
	context.strokeStyle = "#eaeaea";
	if (keyboard.plus == true)
		context.fillStyle = '#808080';
	else
		context.fillStyle = '#0d0d0d';
	context.fill();
	context.stroke();
	var text = '+';
	context.font = '15px Helvetica'; // Font
	context.textAlign = 'center'; // Alignement horizontal (left | center | right)
	context.textBaseline = 'top';
	context.strokeText(text, 630, 620);

}
window.requestAnimationFrame(loop);