let notasAlumno: number[] = new Array(7, 6, 9, 5, 8, 7, 10, 4, 8);
let meses: string[] = new Array(
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre"
);
let mesesDesaprobados: string[] = new Array();
let peorMes: number;
let mejorMes: number;
let promedio: number;

function calcularDesaprobados(notasDelAlumno: Array<number>) {
  notasDelAlumno.forEach((element) => {
    if (element < 7) {
      mesesDesaprobados.push(meses[notasDelAlumno.indexOf(element)]);
    }
  });
  return console.log(`los meses que desaprobo son: ${mesesDesaprobados}`);
}

function calcularMenorNota(notasDelAlumno: Array<number>) {
  let menorNota = 10;
  for (let i = 0; i < notasDelAlumno.length; i++) {
    if (notasDelAlumno[i] < menorNota) {
      menorNota = notasAlumno[i];
      peorMes = i;
    }
  }

  return console.log(
    `la menor nota es ${menorNota} en el mes ${meses[peorMes]}`
  );
}

function calcularMejorNota(notasDelAlumno: Array<number>) {
  let mejorNota = 0;
  for (let i = 0; i < notasDelAlumno.length; i++) {
    if (notasDelAlumno[i] > mejorNota) {
      mejorNota = notasAlumno[i];
      mejorMes = i;
    }
  }

  return console.log(
    `la mejor nota es ${mejorNota} en el mes ${meses[mejorMes]}`
  );
}

function promediarNota(notasDelAlumno: Array<number>) {
  let promedio = 0;
  for (let i = 0; i < notasDelAlumno.length; i++) {
    promedio = promedio + notasDelAlumno[i];
  }
  return Number(promedio / notasDelAlumno.length);
}

calcularDesaprobados(notasAlumno);
calcularMenorNota(notasAlumno);
calcularMejorNota(notasAlumno);
console.log(
  `el promedio del alumno es ${(promedio = promediarNota(notasAlumno))}`
);
