export function setupPractice(element) {
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

function varsAndTypes(element) {
  // Några variabler och typer
  let name = 'Gabriel'
  let number = 0;
  let array = []
  let obj = {}

  console.log(name, typeof (name))
  console.log(number, typeof (number))
  console.log(array, typeof(array))
  console.log(obj, typeof(obj))
}

function operators(element) {
  // Några matematiska operatorer
  let a = 1 + 1
  let b = 2 - 2
  let c = 3 * 3

  console.log(a, b, c)
}

function controlStructures(element) {
  // Variabler för For-loopen och If-satsen
  let i = 0
  let a = true

  // For-Loop
  for (i = 0; i <= 10; i++) {
    console.log(i)
  }

  // If-sats
  if (a === true) {
    console.log('If-sats')
  }
}

function arraysAndObjects(element) {
  // Array där det läggs till siffran 6 med hjälp av push funktionen
  let a = [1, 2, 3, 4, 5]
  a.push(6)

  // Lade till en foreach-loop
  a.forEach((sak) => {
    console.log(sak)
  })

  // Objekt
  // Lade till objekt egenskaper
  let obj = { name: 'Gabriel', Age: 18 }
  console.log(obj)
}

function domAndEvents(element) {
  // Variabel med hjälp av selektorn id (#)
  // Ändrade document.querySelector till element.queryselector
  let button = element.querySelector('#tryck')

  // Lägger till en EventListener på knappen som ändrar texten med textcontent
  button.addEventListener('click', () => {
    button.textContent = 'Kolla i konsollen!'
  })

}

function domManipulation(element) {
  // Skapar nya element och lägger till dem
  let h1 = document.createElement('h1')
  element.appendChild(h1)

  let p = document.createElement('p')
  element.appendChild(p)

  // Sätter texten på nylagda elementen
  h1.textContent = 'En header som lades till med DOM manipulation'
  p.textContent = 'Jag lades till med hjälp av DOM manipulation ifrån practice.js!'
}