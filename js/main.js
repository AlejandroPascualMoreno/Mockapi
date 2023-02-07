const api_url = "https://63dbefd4c45e08a043519fbe.mockapi.io/MenuBarPuffPuff";

fetch(api_url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

  const mostrarData = (data) => {
    let body = ''
    for(let i = 0; i<data.length; i++){
      body += `<div class="platoGeneral"><div class="platoTexto"><h3>${data[i].nombre}</h3><p>${data[i].ingredientes}</p><p>${data[i].precio}</p><button id="favBoton">Añadir a favoritos</button></div><div class="platoImagen"><img src=${data[i].imagen}></img></div></div>`
    }
    document.getElementById('platitos').innerHTML = body;

  }



  // var bbdd = window.localStorage;
  // var favoritos = [];
  // var divada = document.querySelector("#platitos");
  
  // if (bbdd.getItem("favoritos")) {
  //   favoritos = JSON.parse(bbdd.getItem("favoritos"));
  // } else {
  //   bbdd.setItem("favoritos", JSON.stringify(favoritos));
  // }
  
  // document.getElementById("favBoton").addEventListener("click", function(e){
  //   const botoncito = e.target.botoncito,
  //   item = e.target,
  //   index = favoritos.indexOf(botoncito);
  //   bbdd.setItem("favoritos", JSON.stringify(favoritos));
  //   mostrarFavoritos();
  // });
  
  // document.querySelector("#favoritos").addEventListener("click", function () {
  //   mostrarFavoritos();
  // });
  
  // // document.querySelector("button#delete").addEventListener("click", function () {
  // //   favoritos=[]
  // //   bbdd.clear()
  // //   mostrarFavoritos();
  // // });
  
  // function mostrarFavoritos() {
  //   document.querySelector("#platitos").innerText = "";
  //   favoritos.forEach(function (el) {
  //     console.log(el);
  //     let n = divada.content.cloneNode(true);
  //     n.querySelector(".platoGeneral").innerText = el;
  //     document.querySelector("#platitos").appendChild(n);
  //   });
  // }