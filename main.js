// Constructor que crea cuadraditos
class Cuadrado {
  constructor(id){
    this.box = document.createElement('div')
    this.box.classList.add('sqr')
    this.box.setAttribute('id','x'+id)
    return this.box
  } 
}

// Función autoinvocada para llenar el tablero de cuadraditos
(llenarTablero = (cantidadCuadritos) => {
  let tablero = document.getElementById('tablero')
  for(let i = 0; i < cantidadCuadritos; i++){
    let cuadrito = new Cuadrado(i)
    tablero.appendChild(cuadrito)
  }
})(100);

// Acá asignamos el cuadrito donde comienza a caminar el robot. 
// El número se asigna de manera aleatoria.
let randomId = (Math.floor(Math.random() * 100) + 1).toString();
console.log(randomId)
document.getElementById('x'+randomId).classList.add('robot')

// Función que mueve al robot con las flechas del teclado
document.onkeydown = function(ev) {
  let rob = document.getElementsByClassName('robot')[0] // El robot
    
  // Función para mover el robot arriba y abajo
  const upDown = donde => {
    let idRobot = rob.getAttribute('id').split("")
    idRobot.shift()
    let numeroIdRobot = idRobot.toString()
    let numeritoo = parseInt(numeroIdRobot.charAt(0)+numeroIdRobot.charAt(2))
    let elementoArobotear;
    if(donde=='up'){
      elementoArobotear = document.getElementById('x'+(numeritoo-10))
    } else {
      elementoArobotear = document.getElementById('x'+(numeritoo+10))    
    }
    rob.classList.remove('robot')
    elementoArobotear.classList.add('robot')
    rob.classList.add('recorrido')
  }
  
  // Función para mover el robot a la derecha y a la izquierda
  const leftRight = donde => {
    if(donde == 'left'){
      rob.previousSibling.classList.add('robot')
    } else {
      rob.nextSibling.classList.add('robot')
    }
    rob.classList.remove('robot')
    rob.classList.add('recorrido')
  }
  
  // Switch por tecla
  switch (ev.keyCode) {
    case 37:
      leftRight('left')
      break;
    case 38:
      upDown('up')
      break;
    case 39:
      leftRight('right')
      break;
    case 40:
      upDown('down')
      break;
    }
}