// Write your JavaScript code here!
let pilot = null;
let copilot = null;
let fuelLevel = null;
let cargoMass = null;
let pilotStatus = null;
let copilotStatus = null;
let fuelStatus = null;
let cargoStatus = null;
let faultyItems = null;
let launchStatus = null;




window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then ( function(response) {
   response.json().then ( function(json) {
      let randomDestination = (Math.round(Math.random()*5));
      missionTarget.innerHTML = 
         `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randomDestination].name}</li>
               <li>Diameter: ${json[randomDestination].diameter}</li>
               <li>Star: ${json[randomDestination].star}</li>
               <li>Distance from Earth: ${json[randomDestination].distance}</li>
               <li>Number of Moons: ${json[randomDestination].moons}</li>
            </ol>
         <img src=${json[randomDestination].image}>`
      });
   });
   
   let launchForm = document.getElementById("launchForm");
   pilotStatus = document.getElementById("pilotStatus");
   copilotStatus = document.getElementById("copilotStatus");
   fuelStatus = document.getElementById("fuelStatus");
   cargoStatus = document.getElementById("cargoStatus");
   faultyItems = document.getElementById("faultyItems");
   launchStatus = document.getElementById("launchStatus");

 launchForm.addEventListener("submit", function() {
    
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    cargoMass = document.querySelector("input[name=cargoMass]");
    if((pilot.value === "" || copilot.value === "" || fuelLevel.value === "") || cargoMass.value === "") {
      alert ("Information incomplete");
      event.preventDefault();
    } else if (!isNaN(Number(pilot.value)) || !isNaN(Number(copilot.value)) || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
       alert ("Information invalid");
       event.preventDefault();

    } else {
      pilotStatus.innerHTML = `${pilot.value} is Ready`;
      console.log (pilotStatus.innerHTML);
      copilotStatus.innerHTML = `${copilot.value} is Ready`;
      console.log (copilotStatus.innerHTML);
      if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
         launchStatus.innerHTML = ("Shuttle is ready for launch");
         launchStatus.style.color = "green";
      } else {
         if (fuelLevel.value < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = ("Shuttle not ready for launch");
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = ("Not enough fuel for the journey");
            console.log (fuelStatus.innerHTML);
         }
         if (cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = ("Shuttle not ready for launch");
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = ("Too much mass for takeoff");
            console.log(cargoStatus.innerHTML);
            console.log(launchStatus.innerHTML);
      } 
      }
   }
      event.preventDefault();
    });
   });




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
