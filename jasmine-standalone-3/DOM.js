$(document).ready(function(){
  thermostat = new Thermostat();
  updateTemperature();
  $("#power_save_status").text(thermostat.powerSaveMode);
  $('#up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature();
    $("#power_save_status").text(thermostat.powerSaveMode); // update view
  });

  $("#down").click(function(){
    thermostat.down();
    updateTemperature();
    $("#power_save_status").text(thermostat.powerSaveMode);
  })

  $("#reset").click(function(){
    thermostat.reset();
    updateTemperature();
    $("#power_save_status").text(thermostat.powerSaveMode);
  })

  $("#power_on").click(function(){
    thermostat.turnPowerSaveOn();
    updateTemperature();
    $("#power_save_status").text(thermostat.powerSaveMode)
  })

  $("#power_off").click(function(){
    thermostat.turnPowerSaveOff();
    updateTemperature();
    $("#power_save_status").text(thermostat.powerSaveMode);
  })

  function updateTemperature(){
    $("#current_temperature").text(thermostat.temperature);
    if(thermostat.energy_usage() === "low-usage"){ $("#current_temperature").css('color','green')}
    else if (thermostat.energy_usage() === "medium-usage"){$("#current_temperature").css('color','blue')}
    else {$("#current_temperature").css('color', 'red')}
  }


})
