const api_url = "https://63dbefd4c45e08a043519fbe.mockapi.io/MenuBarPuffPuff";
const template = document.querySelector("#platito")
const divMostrar = document.querySelector(".menu")
function mostrar() {
  fetch(api_url)
    .then(response => response.json())
    .then(data => {
      console.log("Mostrando platos")
      console.table(data)
      data.forEach(mostrarPlato)
    })
    .catch(err => console.log(err))
    
}

function mostrarPlato(plato) {
  let platito = template.content.cloneNode(true);
  
  platito.querySelector(".nombre").innerText = plato.nombre;
  platito.querySelector(".ingrediente").innerText = plato.ingredientes;//El .ingredientes se refiere al nombre de la variable del mockapi
  platito.querySelector(".foto-plato").setAttribute("src", plato.imagen); 
  divMostrar.appendChild(platito);
}


document.querySelector(".menu").mostrar;