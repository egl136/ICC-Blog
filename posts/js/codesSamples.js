let samples = {
  'addition': {
    'cpp': "int suma(int a, int b){\n" +
      "  int resultado = a + b;\n" +
      "  return resultado;\n" +
      "}",
    'php': "function suma(int $a, int $b): int \n" +
           "{\n" +
           "  $resultado = $a + $b;\n"+
           "  return $resultado;\n" +
           "}",
    'javascript': "function suma(a, b) {\n" +
      "  resultado = a + b;\n" +
      "  return resultado;\n" +
      "}",
    'java': "public int suma(int a, int b) {\n" +
      "  int resultado = a + b;\n" +
      "  return resultado;\n" +
      "}"
  },
  'text': {
    'cpp': "void mostrarTexto(String texto){\n" +
      "  std::cout >> texto;\n" +
      "}",
    'php': "function mostrarTexto(string $texto):void \n" +
           "{\n" +
           "  echo $texto;//Muestra un <p> con el texto\n"+
           "}",
    'javascript': "function mostrarTexto(texto) {\n" +
      "  console.log(texto);//En la consola\n" +
      "  alert(texto);//Pop-up\n" +
      "}",
    'java': "public void mostrarTexto(String texto) {\n" +
      "   System.out.println(texto);\n" +

      "}"
  },
  'arrays': {
    'cpp': 'void manejoDeArreglos(){\n' +
      '  string arreglo[] = {"manzana","pera","fresa"};\n' +
      "  mostrarTexto(arrelo[0]);//Manzana\n"+
      "  mostrarTexto(arrelo[1]);//Pera\n"+
      "  mostrarTexto(arrelo[2]);//Fresa\n"+
      '}',
    'php': "function manejoDeArreglos():void \n" +
           "{\n" +
           "  $arreglo = ['manzana','pera','fresa'];\n"+
           "  mostrarTexto($arrelo[0]);//Manzana\n"+
           "  mostrarTexto($arrelo[1]);//Pera\n"+
           "  mostrarTexto($arrelo[2]);//Fresa\n"+
           "}",
    'javascript': "function manejoDeArreglos() {\n" +
      "  let arreglo = ['manzana','pera','fresa'];\n" +
      "  mostrarTexto(arrelo[0]);//Manzana\n"+
      "  mostrarTexto(arrelo[1]);//Pera\n"+
      "  mostrarTexto(arrelo[2]);//Fresa\n"+
      "}",
    'java': 'public void manejoDeArreglos() {\n' +
      '  String[] arreglo = {"manzana","pera","fresa"};\n' +
      "  mostrarTexto($arrelo[0]);//Manzana\n"+
      "  mostrarTexto($arrelo[1]);//Pera\n"+
      "  mostrarTexto($arrelo[2]);//Fresa\n"+
      '}'
  }
};


let problems = ['addition','text','arrays'];
let actualProblem = 'addition';
function selectProblem(problem,index) {
	let selectedProblem = document.getElementById(problem);
	let cards = document.getElementsByClassName('problem-card');
	for (var i = 0; i <= cards.length - 1; i++) {
		cards[i].classList.remove('selected-problem');
	}
	selectedProblem.classList.add('selected-problem');
	actualProblem = problems[index];
}

function fillBox(box) {
	let codeBox = document.getElementById('codebox'+box);
	let codePreBox = document.getElementById('codeprebox'+box);
	let selectedLang = document.getElementById('select'+box).value;
	codePreBox.classList.remove(...codePreBox.classList);
	codeBox.classList.remove(...codeBox.classList);
	//console.log(codeBox.classList);
	codePreBox.classList.add('code-comparison','language-'+selectedLang);
	codeBox.classList.add('language-'+selectedLang);
	codeBox.textContent = samples[actualProblem][selectedLang];
	Prism.highlightElement(codeBox);
}

function generarCodigos() {
	fillBox(1);
	fillBox(2);
}
