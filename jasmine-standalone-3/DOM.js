$(document).ready(function(){
  thermostat = new Thermostat();
  $("#current_temperature").text(thermostat.temperature);
  $("#power_save_status").text(thermostat.powerSaveMode);
  $('#up').on('click', function() { // event listener
    thermostat.up(); // update model
    $('#current_temperature').text(thermostat.temperature);
    $("#power_save_status").text(thermostat.powerSaveMode); // update view
  });

  $("#down").click(function(){
    thermostat.down();
    $("#current_temperature").text(thermostat.temperature);
    $("#power_save_status").text(thermostat.powerSaveMode);
  })

  $("#reset").click(function(){
    thermostat.reset();
    $("#current_temperature").text(thermostat.temperature);
    $("#power_save_status").text(thermostat.powerSaveMode);
  })

  $("#power_on").click(function(){
    thermostat.turnPowerSaveOn();
    $("#current_temperature").text(thermostat.temperature);
    $("#power_save_status").text(thermostat.powerSaveMode)
  })

  $("#power_off").click(function(){
    thermostat.turnPowerSaveOff();
    $("#current_temperature").text(thermostat.temperature);
    $("#power_save_status").text(thermostat.powerSaveMode);
  })

  
})
