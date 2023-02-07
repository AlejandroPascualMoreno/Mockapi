const api_url = "https://63dbefd4c45e08a043519fbe.mockapi.io/MenuBarPuffPuff";

fetch(api_url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

  const mostrarData = (data) => {
    let body = ''
    for(let i = 0; i<data.length; i++){
      body += `<li id="${[data[i].nombre]}">Chupa</li><div class="platoGeneral"><div class="platoTexto"><h3>${data[i].nombre}</h3><p>${data[i].ingredientes}</p><p>${data[i].precio}</p></div><div class="platoImagen"><img src=${data[i].imagen}></img></div></div>`
    }
    document.getElementById('platitos').innerHTML = body;

  }

  // get favorites from local storage or empty array
  var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // add class 'fav' to each favorite
  favorites.forEach(function(favorite) {
    document.getElementById(favorite).className = 'fav';
  });
  // register click event listener
  document.querySelector('.mortimer').addEventListener('click', function(e) {
    var id = e.target.id,
        item = e.target,
        index = favorites.indexOf(id);
    // return if target doesn't have an id (shouldn't happen)
    if (!id) return;
    // item is not favorite
    if (index == -1) {
      favorites.push(id);
      item.className = 'fav';
    // item is already favorite
    } else {
      favorites.splice(index, 1);
      item.className = '';
    }
    // store array in local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage

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