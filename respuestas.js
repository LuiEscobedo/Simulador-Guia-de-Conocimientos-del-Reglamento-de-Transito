async function loadJSON(url) {
  const res = await fetch(url);
  return await res.json();
}
loadJSON("./preguntas.json").then((data) => {
  const contenido = document.getElementById("Contenido");
  for (let i = 0; i <= data.length; i++) {
    //Construimos el la Pregunta
    let divPregunta = document.createElement("div");
    divPregunta.className = "col-12 questions";
    let Pregunta = document.createElement("p");
    let text = document.createTextNode([i + 1] + ". " + data[i].pregunta);
    Pregunta.appendChild(text);

    //Contruimos las respuestas
    let divRespuestas = document.createElement("div");
    divRespuestas.className = "col-12";

    let j = 1;
    data[i].opciones.forEach(function (key) {
      let divOpciones = document.createElement("div");
      divOpciones.className = "form-check";
      let opcion = document.createElement("input");
      opcion.className = "form-check-input";
      opcion.setAttribute("type", "radio");
      opcion.setAttribute("name", "respuesta" + [i + 1]);
      opcion.setAttribute("id", "respuesta" + [i + 1] + "_" + [j]);
      opcion.setAttribute("value", [j]);
      if (data[i].respuesta == j) {
        opcion.setAttribute("onclick",'validaRespuesta(1,this.id,this.name)');
      }else{
        opcion.setAttribute("onclick",'validaRespuesta(0,this.id,this.name)');
      }
      let labelOpcion = document.createElement("label");
      labelOpcion.className = "form-check-label";
      labelOpcion.setAttribute("for", "respuesta" + [i + 1] + "_" + [j]);
      labelOpcion.setAttribute("id", "spanRespuesta"+[i + 1] + "_" + [j]);
    let texto = document.createTextNode(key);
      labelOpcion.appendChild(texto);
      divRespuestas.appendChild(divOpciones).appendChild(opcion);
      divRespuestas.appendChild(divOpciones).appendChild(labelOpcion);
      j = j + 1;
    });
    contenido.appendChild(divPregunta).appendChild(Pregunta);
    contenido.appendChild(divRespuestas);
  }
});

function validaRespuesta(valor,id,name) {
    let span = id.replace('respuesta','spanRespuesta');
    for (let i = 1; i <= 3; i++) {
    let names = name + '_'+i;
    let span2 = name.replace('respuesta','spanRespuesta') + '_'+i;
    document.getElementById(names).style.backgroundColor = "#fff";    
    document.getElementById(names).style.borderColor = "#00000040";
    document.getElementById(span2).style.color = "#000";    
  }
  if (valor == 1 ) {
    document.getElementById(id).style.backgroundColor = "#20c997";    
    document.getElementById(id).style.borderColor = "#20c997";    
    document.getElementById(span).style.color = "#20c997";    
  }else{
    document.getElementById(id).style.backgroundColor = "red";    
    document.getElementById(span).style.color = "red";    
  }
  
}

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});