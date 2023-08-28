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

function Impuesto(prec_neto, impu) {
  return prec_neto*impu/100;
}

function PrecioTotal(prec_neto, impu, desc) {
  return prec_neto + impu - desc;
}

function Descuento(prec) {
  var descuento = Float32Array;
  if(prec >= 1000 && prec < 3000)
    descuento = 0.03;
  if(prec >= 3000 && prec < 7000)
    descuento = 0.05;
  if(prec >= 7000 && prec < 10000)
    descuento = 0.07;
  if(prec >= 10000 && prec < 30000)
    descuento = 0.10;
  if(prec >= 30000)
    descuento = 0.15;
  return prec * descuento;

}

const metodos={ImpuestoEstado, PrecioNeto, Impuesto, PrecioTotal, Descuento};

export default metodos;