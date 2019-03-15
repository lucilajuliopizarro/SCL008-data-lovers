/* Manejo del DOM */
/*Global google*/
const data = window.POKEMON.pokemon;//me traigo la data de pokemon y la guargo en una const
//console.log(DATA);
const pokebox = document.getElementById('root'); // creo una constatante para llammar a mi contenedor root

const pokeType = document.getElementById('type'); // llamo a mi select para poder filtrar por el valor que me da

const pokehuevo = document.getElementById('huevo');//llamo a mi id huevo que esta en html

//const pokeweight = document.getElementById('weight');//calculo por peso y lo llamo desde mi html

//document.getElementById("num_5").value = result;


const pokeOrden = document.getElementById('order');

//hola vamos a mostrar pagina 1 y 2 a travez de display none y display block 
document.getElementById("start").addEventListener("click",(evento)=>{
  evento.preventDefault();
  document.getElementById("pag1").style.display="none";// el que se muestra primero
  document.getElementById("pag2").style.display="block";// esta forma hace que se vea en bloques las paginas

})

const seeData = (data) => {

    let result = '';
    data.forEach(element => {//element es === a DAATA[i]
        result = pokebox.innerHTML += `
        <div class="carta-box">
                    <div class="carta">    
                      <div class="cara">
                      <h3 class="tituloPoke" >
                      Nombre: ${element.name}
                      </h3> 
                        <img src="${element.img}">
                      </div>
                      <div class="cara detras">
                          <img src="${element.img}">
                          <div class="pokeinfo">
                          <p>Tipo: ${element.type}</p>
                          <p>Debilidad: ${element.weaknesses}</p>
                          <p> Candy: ${element.candy}</p>
                        </div> 
                      </div>    
                    </div>
                  </div>
        `

    });
    return result;
};
pokeType.addEventListener('change', () => {// a mi poketype le paso el evento escuchar 
    let condition = pokeType.value
    let filtered = window.filterPokemon(data, condition);
    pokebox.innerHTML = ''; // limpiando el div
    filtered.forEach(element => { //foreach es un for para array que devuelve un nuevo array con element que es igua a DATA[i]
      pokebox.innerHTML += `
        <div class="carta-box">
        <div class="carta">    
          <div class="cara">
          <h3 class="tituloPoke" >
          Nombre: <hr/> ${element.name}
          </h3> 
            <img src="${element.img}">
          </div>  
          <div class="cara detras">
            <img src="${element.img}">
            <div class="pokeinfo">
            <p>Tipo: ${element.type}</p>
            <p>Evolucion: ${element.next_evolution[0].name}, ${element.next_evolution[1 ].name}</p>
            <p>Debilidad: ${element.weaknesses}</p>
            <p> Candy: ${element.candy}</p>
          </div>
          </div>    
        </div>
      </div>
        `
    })
})
pokehuevo.addEventListener('change',() => {
let condition = pokehuevo.value
let filtrohuevo = window.filtereggs(data,condition);
pokebox.innerHTML = '';// limpiando el div
filtrohuevo.forEach(element => {
  pokebox.innerHTML += `
        <div class="carta-box">
        <div class="carta">    
          <div class="cara">
          <h3 class="tituloPoke" >
          ${element.name}
          </h3>
            <img src="${element.img}">
          </div>  
          <div class="cara detras">
            <p>${element.egg}</p>
          </div>    
        </div>
      </div>

        `
})
})
//implementacion de calculo por peso//
//pokehuevo.addEventListener('change',() => {
  //let condition = pokeweight.value //pokeweight se saca de la parte superior (const pokeweight = document.getElementById('weight')
  //let filterporpesote = filterporpeso(data,condition);
  //pokebox.innerHTML = '';// limpiando el div
  //filterporpesote.forEach(element => {
    //pokebox.innerHTML += `
         // <div class="carta-box">
          //<div class="carta">    
           // <div class="cara">
            //<h3 class="tituloPoke" >
            //${element.name}
            //</h3>
              //<img src="${element.img}"> 
           // </div>  
            //<div class="cara detras">
             // <p>${element.weight}</p>
            //</div>    
          //</div>
        //</div>
  
       //   `
 // })
  //})
 // termino de mi implementacion de calculo por peso//
// pokeOrden.addEventListener('change', () => {
//     let option = pokeOrden.value;
//     let ordenando = //aqui va mi funcion order junto con sus parametros


// })

//Conexion de los select para ordenar con funcion sortPokemon proveniente de data.js 
pokeOrden.addEventListener('change', () => {
    let option = pokeOrden.value;
     let ordering = window.sortPokemon(data, 'name', option); //aqui va mi funcion order junto con sus parametros
     pokebox.innerHTML = '';
     ordering.forEach(element => { 
         pokebox.innerHTML += `
         <div class="carta-box">
         <div class="carta">    
           <div class="cara">
           <h3 class="tituloPoke" >
           Nombre: <hr/> ${element.name}
           </h3> 
             <img src="${element.img}">
           </div>  
           <div class="cara detras">
             <img src="${element.img}">
             <p>Poke tipo: ${element.type}</p>
             <p>Poke numero: ${element.num}</p>
           </div>    
         </div>
       </div>
         `
     })
})
//const compute =document.getElementById('type');
//compute.addEventListener('click',()=>
//let porcentajeee = document.getElementById('type').value;
//let total = window.getComputeStats(data,'type',porcentajeee);



//comienzo de mi funcion porcentaje modo prueba// google chart
//google.charts.load('current', {'packages':['corechart']});
     // google.charts.setOnLoadCallback(drawChart);

      //function drawChart() {

        //const data = google.visualization.arrayToDataTable([
         // ['Task', 'Hours per Day'],
          //['Work',     11],
          //['Eat',      2],
          //['Commute',  2],
          //['Watch TV', 2],
          //['Sleep',    7]
        //]);

        //const options = {
         // title: 'My Daily Activities'
        //};

        //const chart = new google.visualization.PieChart(document.getElementById('piechart'));

        //chart.draw(data, options);
      //}
  pokebox.innerHTML='';

  let calcule = document.getElementById("type");
  calcule.addEventListener("click", () => {
  let condition = calcule.value;
  let result = window.computeStats(data,condition);
  pokebox.innerHTML+=`<h3>Resultado</h3>
  <p>${result}</p>`
})

window.onload = seeData(data);