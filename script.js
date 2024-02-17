function dodajZadanie() {
    var noweZadanie = document.getElementById("nowe-zadanie").value;
    var elementListy = document.createElement("li");
    elementListy.innerHTML = `<span class="zadanie">${noweZadanie}</span>
    <button class="usun" onclick="usunZadanie(this)">Usuń</button>
    <button class="zrobione" onclick="zrobione(this)">Zrobione</button>`;
    var listaZadan = document.getElementById("lista-zadan");
    listaZadan.appendChild(elementListy);
    document.getElementById("nowe-zadanie").value = "";
  }
  
  function usunZadanie(element) {
    var elementListy = element.parentNode;
    elementListy.parentNode.removeChild(elementListy);
  }
  
  function zrobione(element) {
    var elementListy = element.parentNode;
    elementListy.classList.toggle("zrobione");
  }