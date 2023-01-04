//---------------title--------------
let title = document.createElement("div");
title.innerHTML = `<div class="display-2 text-center container-fluid bg-dark text-white">Mad Tree Brewing</div>`;
let div1 = document.createElement("div");
div1.innerHTML = `<div class="text-center mt-5">
<input type="text" class="center"id="txt">
<button type="button" class="btn btn-success" onclick="brew()">search</button>
<div class="text-muted"> some of list of company breweries are given below and you can also search</div>
<div id="brewSer" class="row justify-content-evenly mt-5 "></div>
</div>
`;
document.body.append(title);
document.body.append(div1);
document.body.classList.add("alert-success"); //background color
//----------------search--------------------
async function brew() {
  try {
    let nameSearch = document.getElementById("txt");
    console.log("working the functinon");
    let search = document.getElementById("brewSer");
    search.innerHTML = "Related to your search:";
    let data = await (
      await fetch(`https://api.openbrewerydb.org/breweries`)
    ) //Name based api
      .json();
    console.log(data);
    data
      .filter((e) => e.name == nameSearch.value)
      .forEach((e) => {
        search.innerHTML += `<div class="card mt-5" style="width: 18rem;">
        <div><h5 class="card-title"> ${e.name}</h5> </div>
        <img src="./img/img (4).jpg"  class="card-img-top" alt="...">
        <div class="card-body">
          
          <p class="card-text">Name : ${e.name}</p>
          <p class="card-text">type : ${e.brewery_type}</p>
          <p class="card-text">address:${e.street},${e.state}</p>
          <a href="${e.website_url}" class="btn btn-link">${e.website_url}</a>
          <p class="card-text link">phone :${e.phone}</p>
          
        </div>
      </div>`;
      });
  } catch (e) {
    console.error(e);
  }
}
//----------------listApi---------------------------
async function listBreweries() {
  try {
    let search = document.getElementById("brewSer");
    //   console.log("working the functinon");
    let data = await (
      await fetch("https://api.openbrewerydb.org/breweries")
    ) //ListApi
      .json();
    //   console.log(data);
    data.forEach((e) => {
      search.innerHTML += `<div class="card mt-5" style="width: 18rem;">
          <div><h5 class="card-title"> ${e.name}</h5> </div>
          <img src="./img/img (4).jpg"  class="card-img-top" alt="...">
          <div class="card-body">
            
            <p class="card-text">Name : ${e.name}</p>
            <p class="card-text">type : ${e.brewery_type}</p>
            <p class="card-text">address:${e.street},${e.state}</p>
            <a href="${e.website_url}" class="btn btn-link">${e.website_url}</a>
            <p class="card-text link">phone :${e.phone}</p>
            
          </div>
        </div>`;
    });
  } catch (e) {
    console.error(e);
  }
}

listBreweries();
