let data;

async function init(){
  
  let link = "311.json"; 
  let info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];

    build += `<div class="card">
                 <h3>${crash.contributing_factor_vehicle_1 || "N/A"}</h3>
                 <hr>
                 <p>${crash.borough || "N/A"}</p>
                 <p>${crash.zip_code || "N/A"}</p>
                 <p>Vehicle: ${crash.vehicle_type_code1 || "N/A"}</p>
                 <p>Injured: ${crash.number_of_persons_injured || 0}</p>
                 <p>Killed: ${crash.number_of_persons_killed || 0}</p>
                 <hr>
                 <p>${crash.crash_date || "N/A"}</p>
              </div>`;
  }

  output.innerHTML = build;
}

function filterByBorough(){

  let output = document.getElementById("output");

  let borough = document.getElementById("borough").value.toLowerCase();
  let vehicle = document.getElementById("vehicle").value.toLowerCase();

  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];

    let crashBorough = (crash.borough || "").toLowerCase();
    let crashVehicle = (crash.vehicle_type_code1 || "").toLowerCase();

    if(crashBorough.includes(borough) && crashVehicle.includes(vehicle)){

      build += `<div class="card">
                  <h3>${crash.contributing_factor_vehicle_1 || "N/A"}</h3>
                  <hr>
                  <p>${crash.borough || "N/A"}</p>
                  <p>${crash.zip_code || "N/A"}</p>
                  <p>Vehicle: ${crash.vehicle_type_code1 || "N/A"}</p>
                  <p>Injured: ${crash.number_of_persons_injured || 0}</p>
                  <p>Killed: ${crash.number_of_persons_killed || 0}</p>
                  <hr>
                  <p>${crash.crash_date || "N/A"}</p>
                </div>`;

      ct += 1;
    }
  }

  result.innerHTML = ct + " Results found.";
  output.innerHTML = build;
}