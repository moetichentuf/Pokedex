var url = 'https://pokeapi.co/api/v2/generation/2/';
const targetDiv = document.getElementById("pokeInfo");
const btn = document.getElementById("img");
targetDiv.style.display = "none";
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
function updateAmount(action) {
  var num = parseInt(document.getElementById("number").innerHTML);
  switch(action) {
     case 'minus':
        num--;
        break;
     case 'plus':
        num++;
        break;
  }
  document.getElementById("number").innerHTML = num;
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  // JSON data array
  var data = result.pokemon_species;
  console.log(data[0]['name']);
  
var pokemon = 'https://pokeapi.co/api/v2/pokemon/'+ data[num]['name'];

 
  $.ajax({
    url: pokemon,
    method: 'GET',
  }).done(function(result2) {
    // JSON data array
    var data2 = result2;
    console.log(data2);
    console.log(data2.types[0].type['name']);
    // get DOM node to be parent of child list nodes
    var $data2 = $('#data2');
    document.querySelector("#img").innerHTML = `${data2.sprites.other.dream_world.front_default}`
    // Becomes
    document.querySelector("#img").src = `${data2.sprites.other.dream_world.front_default}`
    document.querySelector("#p").innerHTML = `${data[num]['name']}`
    document.querySelector("#pokeType").innerHTML ="Type:" +`${data2.types[0].type['name']}`
    document.querySelector("#pokeHeight").innerHTML ="Height:" +`${data2.height}` * 10 + "cm";
    document.querySelector("#pokeWeight").innerHTML ="Weight:" +`${data2.weight}` / 10 + "kg";
   
  })

  // get DOM node to be parent of child list nodes
  var $data = $('#data');

  // iterate through each object in JSON array
  data.forEach(function(item) {

    // create an unordered list node
    var $ul = $('<ul></ul>');
    var $img = $('<div></div>');
    // iterate through all the properties of current JSON object
   
      // append list item node to list node
      // $ul.append(`<p>${item['name']}</p>`);
      // $img.append(`<img src="${data2}"></img>`);
    // append list node to parent node
    $data.append($ul);
    $data.append($img);
  });
}).fail(function(error) {
  console.error(error);
});



        }
        updateAmount()