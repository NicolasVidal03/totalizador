import ImpuestoEstado from "./totalizador"

describe("Totalizador", () => {
  it("CA deberia devolver 8.25", () => {
    expect(ImpuestoEstado("CA")).toEqual(8.25);
  });
  
  it("TX deberia devolver 6.25", () => {
    expect(ImpuestoEstado("TX")).toEqual(6.25);
  });

});