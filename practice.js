export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let name = 'Gabriel'
  let number = 0;

  console.log(name, typeof(name))
  console.log(number, typeof(number))
}

function operators(element) {
  let a = 1+1
  let b = 2-2
  let c = 3*3

  console.log(a, b, c)
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar

  let i = 0
  let a = true

  for (i = 0 ; i <= 10 ; i++) {
    console.log(i)
  }

  if (a === true) {
    console.log('IF-sats')
  }
}

function arraysAndObjects (element) {
  let a = [1, 2, 3, 4, 5]
  a.push(6)

  let obj = {}

  console.log(a)
  console.log(obj)
}

function domAndEvents (element) {
  let button = document.querySelector('#tryck')
  
  button.addEventListener('click', () => {
    button.textContent = 'Du tryckte!'
  })

}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}