/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

/* Primero llamamos a el evento click(submit)*/
var form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  /* Guardamos el valor que tiene cada input al hacerle click */
  var alert = document.getElementById("alerta");
  var textoDelInput = document.getElementById("exampleInputText");
  var textoDelInput2 = document.getElementById("exampleInputText2");
  var textoDelInput3 = document.getElementById("exampleInputText3");
  var firsname = document.getElementById("firsname");
  var lasname = document.getElementById("lasname");
  var cityS = document.getElementById("cityS");
  var combobox = document.getElementById("inputGroupSelect04");
  var postal = document.getElementById("postal");
  var bordeRadio = document.getElementById("bordeRadio");
  var radio1 = document.getElementById("radio1").checked;
  var radio2 = document.getElementById("radio2").checked;
  var radio3 = document.getElementById("radio3").checked;
  var radio4 = document.getElementById("radio4").checked;
  var exampleFormControlTextarea1 = document.getElementById(
    "exampleFormControlTextarea1"
  );

  /* Guardamos todos los input en un array para comprovar quienes estan cumpliendo */
  var inputs = [];
  inputs[0] = textoDelInput;
  inputs[1] = textoDelInput2;
  inputs[2] = textoDelInput3;
  inputs[3] = firsname;
  inputs[4] = lasname;
  inputs[5] = cityS;
  inputs[6] = postal;
  inputs[7] = exampleFormControlTextarea1;
  inputs[8] = combobox;

  /* Nos fijamos si tenemos un radio buton activado, en caso de 
  que haya uno solo que este activado le damos para delante ;D*/
  var radioactivada;
  if (
    radio1 === true ||
    radio2 === true ||
    radio3 === true ||
    radio4 === true
  ) {
    radioactivada = true;
    bordeRadio.style.border = "solid 1px #fff";
  } else {
    bordeRadio.style.border = "solid 3px #F83C3C";
    radioactivada = false;
  }
  /* ********************************************** */

  /* validamos si hay algun input vacio para sacar la alerta */
  if (
    validator.isEmpty(textoDelInput.value) ||
    validator.isEmpty(textoDelInput2.value) ||
    validator.isEmpty(textoDelInput3.value) ||
    validator.isEmpty(firsname.value) ||
    validator.isEmpty(lasname.value) ||
    validator.isEmpty(cityS.value) ||
    combobox.value === "Soy de..." ||
    validator.isEmpty(postal.value) ||
    radioactivada === false ||
    validator.isEmpty(exampleFormControlTextarea1.value)
  ) {
    alert.classList.add("d-block");
  } else {
    /* Si no esta vacio ningun input, quitamos el d-block del alert y ponemos un d-none*/
    alert.classList.remove("d-block");
    alert.classList.add("d-none");
  }

  /* Si el contenido de los input, "cualquiera" de ellos llega a estar vacio, le decimos que aparezca el alert */
  inputs.forEach(element => {
    /* El segundo parametro del if es referente al Select */
    if (element.value === "" || element.value === "Soy de...") {
      element.style.background = "#F83C3C";
    } else {
      element.style.background = "#fff";
    }
  });
});
