function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_POWER_SAVE = 25;
  this.MAXIMUM_TEMPERATURE_NOT_POWER_SAVE = 32;
  this.temperature =this.DEFAULT_TEMPERATURE ;
  this.powerSaveMode = "on";
}

Thermostat.prototype.up = function(){
  if(this.temperature < this.maximumAllowedTemperature()){this.temperature += 1} ;
}

Thermostat.prototype.down = function(){
  if (this.temperature > this.MINIMUM_TEMPERATURE) {this.temperature -= 1} ;
}

Thermostat.prototype.reset = function(){
  this.temperature = this.DEFAULT_TEMPERATURE ;
}

Thermostat.prototype.turnPowerSaveOff = function(){
  this.powerSaveMode = "off"
}

Thermostat.prototype.turnPowerSaveOn = function(){
  this.powerSaveMode = "on"
  if(this.temperature > this.MAXIMUM_TEMPERATURE_POWER_SAVE){ this.temperature = this.MAXIMUM_TEMPERATURE_POWER_SAVE}
}

Thermostat.prototype.maximumAllowedTemperature = function(){
  if(this.powerSaveMode === "on"){return this.MAXIMUM_TEMPERATURE_POWER_SAVE }
  else{return this.MAXIMUM_TEMPERATURE_NOT_POWER_SAVE}
}

Thermostat.prototype.energy_usage = function(){
  if(this.temperature >=10 && this.temperature <= 18){return "low-usage"}
  else if(this.temperature > 18 && this.temperature <= 25){return "medium-usage"}
  else {return "high-usage"}
}
