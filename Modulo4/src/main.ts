let contador = 0;

const aumentarTurno = () => contador++;
const decrementarTurno = () => contador--;

function pintarContador(): void {
  const turnoDisplay = document.getElementById("numero-turno");

  if (
    turnoDisplay !== null &&
    turnoDisplay !== undefined &&
    turnoDisplay instanceof HTMLHeadingElement
  ) {
    turnoDisplay.textContent = contador.toString().padStart(2, "0");
  }
}

function siguiente(): void {
  aumentarTurno();
  pintarContador();
}

function anterior(): void {
  if (contador !== 0) {
    decrementarTurno();
    pintarContador();
  }
}

function reset(): void {
  contador = 0;
  pintarContador();
}

const eventos = () => {
  const botonSiguiente = document.getElementById("siguiente");
  if (
    botonSiguiente !== null &&
    botonSiguiente !== undefined &&
    botonSiguiente instanceof HTMLButtonElement
  ) {
    botonSiguiente.addEventListener("click", siguiente);
  }

  const botonAnterior = document.getElementById("anterior");
  if (
    botonAnterior !== null &&
    botonAnterior !== undefined &&
    botonAnterior instanceof HTMLButtonElement
  ) {
    botonAnterior.addEventListener("click", anterior);
  }

  const botonReset = document.getElementById("reset");
  if (
    botonReset !== null &&
    botonReset !== undefined &&
    botonReset instanceof HTMLButtonElement
  ) {
    botonReset.addEventListener("click", reset);
  }
};

document.addEventListener("DOMContentLoaded", eventos);
