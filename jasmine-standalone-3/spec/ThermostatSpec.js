describe("Thermostat", function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("The thermostat's initial temperature is 20 degree", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("we can increase the temperature of the thermostat",function(){

    thermostat.up()

    expect(thermostat.temperature).toEqual(21)
  })

  it("we can decrease  the temperature of the thermostat",function(){

    thermostat.down()

    expect(thermostat.temperature).toEqual(19)
  })

});
