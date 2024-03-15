let personas = [];
function capturaDatos() {
  console.log("Capturando datos...");
  let persona = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    fecha: document.getElementById("fecha").value,
    ciudad: document.getElementById("ciudad").value,
  };
  personas.push(persona);
  mostrarCards();
}
function mostrarCards() {
  document.getElementById("cards").innerHTML = "";
  personas.map(function (persona) {
    let card = document.createElement("section");
    let nombre = document.createElement("p");
    let correo = document.createElement("p");
    let telefono = document.createElement("p");
    let fecha = document.createElement("p");
    let ciudad = document.createElement("p");
    nombre.textContent = persona.nombre;
    correo.textContent = persona.correo;
    telefono.textContent = persona.telefono;
    fecha.textContent = persona.fecha;
    ciudad.textContent = persona.ciudad;
    card.append(nombre, correo, telefono, fecha, ciudad);
    document.getElementById("cards").append(card);
  });
}

let inputs = document.querySelectorAll("#formulario input");
console.log(inputs);
inputs.forEach(function (input) {
  input.addEventListener("click", validarformulario);
  input.addEventListener("keyup", validarformulario);
});
let expresionesRegulares = {
  nombre:/[^\\p{ASCII}|!/[^\\w \\xC0-\\xFF]/g,
  email: /\b([\w\.-]+)@([\w\-]+)(\.\w{2,4})(\.\w{2,4})?\b/g,
  telefono: /^(([2]{1})|([6-7]{1}))([0-9]{3})[\-]?([0-9]{4})$/,
  fechaNacimiento:
    /((([0][1-9]|[12][\d])|[3][01])[-/]([0][13578]|[1][02])[-/][1-9]\d\d\d)|((([0][1-9]|[12][\d])|[3][0])[-/]([0][13456789]|[1][012])[-/][1-9]\d\d\d)|(([0][1-9]|[12][\d])[-/][0][2][-/][1-9]\d([02468][048]|[13579][26]))|(([0][1-9]|[12][0-8])[-/][0][2][-/][1-9]\d\d\d)/gm,
};
function validarformulario(e) {
  switch (e.target.name) {
    case "nombre":
      if (expresionesRegulares.nombre.test(e.target.value)) {
        document.getElementById("nombre").style.borderBottomColor = "";
      } else {
        console.log("no paso la validacion");
        document.getElementById("nombre").style.borderBottomColor = "red";
        console.log(document.getElementById("nombre"))
      }
      break;
    case "email":
      if (expresionesRegulares.email.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;
    case "telefono":
      if (expresionesRegulares.telefono.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;
    case "nacimiento":
      if (expresionesRegulares.nacimiento.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;
    case "ciudad":
      if (expresionesRegulares.ciudad.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;

    default:
      break;
  }
}
