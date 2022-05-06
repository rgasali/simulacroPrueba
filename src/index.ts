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
let comisionA: number[] = new Array(8, 5, 7, 10, 9, 2, 4, 8, 6, 8);
let comisionB: number[] = new Array(3, 6, 8, 5, 4, 7, 7, 4, 6, 8);
let comisionC: number[] = new Array(7, 6, 9, 8, 9, 8, 5, 7, 10, 9);

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
  return promedio / notasDelAlumno.length;
}

function mejorPromedio(
  comision1: Array<number>,
  comision2: Array<number>,
  comision3: Array<number>
) {if(promediarNota(comision1)> promediarNota(comision2)&&
  promediarNota(comision1)> promediarNota(comision3){
  return console.log(`el promedio mas alto es ${}`)
}
  
}

calcularDesaprobados(notasAlumno);
calcularMenorNota(notasAlumno);
calcularMejorNota(notasAlumno);
console.log(`el promedio del alumno es ${promediarNota(notasAlumno)}`);
