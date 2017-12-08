const houseColors = [
   {
    "house": "gryffindor",
    "firstColor": "#4D0505",
    "secondColor": "#F3C01B"
  },
   {
    "house": "hufflepuff",
    "firstColor": "#F3DE0B",
    "secondColor": "#0C0D09"
  },
   {
    "house": "slytherin",
    "firstColor": "#25581F",
    "secondColor": "#9E9997"
  },
   {
    "house": "ravenclaw",
    "firstColor": "#0B304A",
    "secondColor": "#A67A53"
  }
];

const wizardLocations = [
  {
    "location": "home",
    "cords": 45
  },
  {
    "location": "work",
    "cords": 90
  },
  {
    "location": "school",
    "cords": 180
  }
];

const wizardNames = [
  {
    "name": "Harry",
    "cords": 45
  },
  {
    "name": "Hermonie",
    "cords": 90
  },
  {
    "name": "Ron",
    "cords": 180
  }
];

const clock = document.querySelector(".location-circle");
const colorSelect = document.querySelector(".house-colors");
const locationSelect = document.querySelector(".wizard-places");
const wizardSelect = document.querySelector(".wizard-names");
const locationHands = document.querySelectorAll(".location-hand");
let currentElement;

for (i = 0; i < houseColors.length; i++){
  const option = document.createElement("option");
  option.innerHTML = houseColors[i].house;
  option.value = houseColors[i].house;
  colorSelect.appendChild(option);
}

for (i = 0; i < wizardLocations.length; i++){
  const option = document.createElement("option");
  option.innerHTML = wizardLocations[i].location;
  option.value = wizardLocations[i].location;
  locationSelect.appendChild(option);
}

for (i = 0; i < wizardNames.length; i++){
  const option = document.createElement("option");
  option.innerHTML = wizardNames[i].name;
  option.value = wizardNames[i].name;
  wizardSelect.appendChild(option);
}

function changeColor(){
  for(let i = 0; i < houseColors.length; i++){
    if(colorSelect.value === houseColors[i].house){
      document.body.style.backgroundColor = houseColors[i].firstColor;
      clock.style.backgroundColor = houseColors[i].secondColor;
    }
  }
}

function changeLocation(){
  for(let i = 0; i < wizardLocations.length; i++){
    if(locationSelect.value === wizardLocations[i].location){
      currentElement.style.transform = `rotate(${currentLocation(wizardLocations[i].cords)}deg)`;
    }
  }
}

function currentLocation(place){
  const location = ((place / 60) * 360) + 90;
  return location;
}

function changeWizard(){
  for(let i = 0; i < locationHands.length; i++){
    if(wizardSelect.value === locationHands[i].dataset.name){
      currentElement = document.querySelector(`[data-name=${locationHands[i].dataset.name}]`);
    }
  }
}

colorSelect.addEventListener('change', changeColor);
locationSelect.addEventListener('change', changeLocation);
wizardSelect.addEventListener('change', changeWizard);
window.onload = function(){
  changeColor();
  changeWizard();
  changeLocation();
};
