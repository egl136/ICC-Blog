const directions = {
  		'landing': { newClass: 'hide-right', file: 'landing.html'},
  		'materias': { newClass: 'drown', file: 'materias.html' },
  		'categorias': { newClass: 'fly', file: 'categorias.html' },
  		'entradas': { newClass: 'hide-left', file: 'entradas.html' }
	};
const url_prefix = "http://localhost/consultorio/public/html/";
const actualBody = document.getElementsByTagName('body')[0];
function goTo(direction,from) {
	let actualMain = document.getElementsByClassName(from)[0];
	actualBody.classList.add('hide-scroll');
	actualMain.classList.add(directions[direction].newClass);
	stopScroll(false);
	setTimeout(() => {
  		window.location.href = url_prefix+directions[direction].file;
	}, 300);
}

function stopScroll(timed) {
	actualBody.style.overflow = "hidden";
	if(timed){
		setTimeout(()=>{
			actualBody.style.overflow = "auto";
		}, 500);
	}
}
stopScroll(true);