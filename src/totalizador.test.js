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
});