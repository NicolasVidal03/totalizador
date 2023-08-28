function ImpuestoEstado(estado) {
  var impuesto = Float32Array;
  if(estado=="CA")
    impuesto = 8.25;
  if(estado=="TX")
    impuesto = 6.25;
  if(estado=="UT")
    impuesto = 6.65;
  if(estado=="NV")
    impuesto = 8.00;
  if(estado=="AL")
    impuesto = 4.00;
  return impuesto;
}

function PrecioNeto(cant, prec) {
  return cant * prec;
}

const metodos={ImpuestoEstado, PrecioNeto};

export default metodos;