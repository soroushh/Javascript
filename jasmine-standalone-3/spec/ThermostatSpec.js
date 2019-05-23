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

  it("The minimum temperature of thermostat is 10 degrees",function(){
    var times = 11;
    for(var i=0; i < times; i++){
        thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10)
  })

  it("We can reset the thermostat's temperture to 20 centigrades", function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  })

  it("Power save mode is on by default", function(){
    expect(thermostat.powerSaveMode).toEqual("on")
  })

  it("We can turn the power save mode off", function(){
    thermostat.turnPowerSaveOff();
    expect(thermostat.powerSaveMode).toEqual("off");
  })

  it("We can turn the power save mode on", function(){
    thermostat.turnPowerSaveOff();
    thermostat.turnPowerSaveOn();
    expect(thermostat.powerSaveMode).toEqual("on");
  })

  it("The temperature will be 25 when turning on the power powerSaveMode and if the initial temperature is more than 25",function(){
    thermostat.turnPowerSaveOff();
    var times = 11;
    for(var i=0; i < times; i++){
        thermostat.up();
    }
    thermostat.turnPowerSaveOn();
    expect(thermostat.temperature).toEqual(25)
  })

  it("On power save mode, the maximum allowed temperature is 25 degrees",function(){
    thermostat.turnPowerSaveOn();
    expect(thermostat.maximumAllowedTemperature()).toEqual(25);
  })

  it("Not on power save mode, the maximum allowed temperature is 32 degrees",function(){
    thermostat.turnPowerSaveOn();
    expect(thermostat.maximumAllowedTemperature()).toEqual(25);
  })

  it("The temperature can not go futher than the maximum allowed temperature", function(){
    var times = 11;
    for(var i=0; i < times; i++){
        thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25)
  })

  it("the temperature can not go further than the maximum allowed temperature",function(){
    thermostat.turnPowerSaveOff();
    for(var i=0; i < 20; i++){
        thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32)

  })

});
