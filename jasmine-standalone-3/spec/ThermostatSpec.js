describe("Thermostat", function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("The thermostat's initial temperature is 20 degree", function() {
    expect(thermostat.temperature).toEqual(20)

  });
});