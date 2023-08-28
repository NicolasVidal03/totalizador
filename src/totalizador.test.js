import metodos from "./totalizador"

describe("Totalizador", () => {
  it("CA deberia devolver 8.25", () => {
    expect(metodos.ImpuestoEstado("CA")).toEqual(8.25);
  });
  
  it("TX deberia devolver 6.25", () => {
    expect(metodos.ImpuestoEstado("TX")).toEqual(6.25);
  });

  it("Deberia devolver cantidad", () => {
    expect(metodos.PrecioNeto(14, 1)).toEqual(14);
  });

  it("Deberia devolver el precio", () => {
    expect(metodos.PrecioNeto(1, 10)).toEqual(10);
  });

  it("Deberia devolver cantidad*precio (35)", () => {
    expect(metodos.PrecioNeto(5, 7)).toEqual(35);
  });

  it("Deberia devolver precio neto dividido entre 100 (1)", () => {
    expect(metodos.Impuesto(100, 1)).toEqual(1);
  });

  it("Deberia devolver impuesto de CA (8.25)", () => {
    expect(metodos.Impuesto(1, 8.25*100)).toEqual(8.25);
  });

  it("Deberia devolver impuesto de NV (8)", () => {
    expect(metodos.Impuesto(1, 8*100)).toEqual(8);
  });

  it("Deberia devolver impuesto de TX (6.25)", () => {
    expect(metodos.Impuesto(1, 6.25*100)).toEqual(6.25);
  });

  it("Deberia devolver impuesto de AL (4)", () => {
    expect(metodos.Impuesto(1, 4*100)).toEqual(4);
  });

  it("Deberia devolver suma de precio neto mas impuesto (80)", () => {
    expect(metodos.PrecioTotal(60, 20)).toEqual(80);
  });

});