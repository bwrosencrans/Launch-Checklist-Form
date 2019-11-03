window.addEventListener("load", function() {
var form = document.querySelector('form');
  
  let index = Math.floor(Math.random()* 6);
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
     response.json().then(function(json) {
        let destination = this.document.getElementById("missionTarget");
        destination.innerHTML = `
        <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${json[index].name}</li>
              <li>Diameter: ${json[index].diameter}</li>
              <li>Star: ${json[index].star}</li>
              <li>Distance from Earth: ${json[index].distance}</li>
              <li>Number of Moons: ${json[index].moons}</li>
           </ol>
        <img src="${json[index].image}">
        `;
     });
  });

form.addEventListener('submit', function(event){
   event.preventDefault();
   let pilotName = document.querySelector("input[name=pilotName]").value;
   let copilotName = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   let cargoMass = document.querySelector("input[name=cargoMass]").value;



   if(pilotName == "" || copilotName == "") {
      alert("NEED A PILOT AND A COPILOT")
      event.preventDefault()
   } 
   else if(!isNaN(pilotName) || !isNaN(copilotName)) {
      alert("PILOT AND COPILOT MUST NOT BE NUMBERS")
      event.preventDefault()
   }
   else if(isNaN(fuelLevel) || isNaN(cargoMass)) {
      alert("NEED NUMBERS FOR FUEL AND CARGO MASS")
      event.preventDefault()
   }
   else {
      document.getElementById("pilotStatus").style.visibility = "visible";
      document.getElementById("pilotStatus").innerHTML = `${pilotName} is ready for launch`
      document.getElementById("copilotStatus").style.visibility = "visible";
      document.getElementById("copilotStatus").innerHTML = `${copilotName} is ready for launch`
      document.getElementById("fuelStatus").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `${fuelLevel}`
      document.getElementById("cargoStatus").style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML = `${cargoMass}`
      alert(`Welcome, ${pilotName}`)
      event.preventDefault();
   }
   
   let heading2 = document.getElementById("launchStatus");
   if(Number(fuelLevel) < 10000) {
      document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
      heading2.textContent = "Shuttle Not Ready for Launch";
      heading2.style.color = "red";
      event.preventDefault();
   }
   else {
      heading2.textContent = "Shuttle Ready for Launch";
      heading2.style.color = "green";
      document.getElementById("fuelStatus").innerHTML = "Enough fuel for launch";
      event.preventDefault();
   }
   
   if(Number(cargoMass) > 10000) {
      document.getElementById("cargoStatus").innerHTML = "Cargo level too high for launch";
      heading2.textContent = "Shuttle Not Ready for Launch";
      heading2.style.color = "red";
      event.preventDefault();
   }
   else {
      heading2.textContent = "Shuttle Ready for Launch";
      heading2.style.color = "green";
      document.getElementById("cargoStatus").innerHTML = "Cargo weight appropriate for launch";
      event.preventDefault();
   }


});
});
