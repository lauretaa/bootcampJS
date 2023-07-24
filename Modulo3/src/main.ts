/*
- nombre grupo
- año
- activo
- genero musical
The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / "🎸 Rock"
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
*/

interface grupomusical {
  nombregrupo: string;
  año: number;
  activo: boolean;
  genero: string;
}
const nombregrupo = "color:black; font-size:15px; borde:green ";

const grupoA: grupomusical = {
  nombregrupo: "The Beatles",
  año: 1960,
  activo: true,
  genero: "🎵 pop rock",
};
console.log(grupoA);

const grupoB: grupomusical = {
  nombregrupo: "Queen",
  año: 1970,
  activo: false,
  genero: "🎸 Rock",
};
console.log(grupoB);

const grupoC: grupomusical = {
  nombregrupo: "AC DC",
  año: 1973,
  activo: true,
  genero: "🤘 Hard Rock",
};
console.log(grupoC);

const grupoD: grupomusical = {
  nombregrupo: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  genero: "🎼 Clásica",
};
console.log(grupoD);

const grupoE: grupomusical = {
  nombregrupo: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: "🎸 Rock",
};
console.log(grupoE);
