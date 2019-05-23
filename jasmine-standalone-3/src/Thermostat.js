function Thermostat(){
  this.temperature = 20;
  this.powerSaveMode = "on";
}

Thermostat.prototype.up = function(){
  this.temperature += 1 ;
}

Thermostat.prototype.down = function(){
  if (this.temperature > 10) {this.temperature -= 1} ;
}

Thermostat.prototype.reset = function(){
  this.temperature = 20 ;
}

Thermostat.prototype.turnPowerSaveOff = function(){
  this.powerSaveMode = "off"
}

Thermostat.prototype.turnPowerSaveOn = function(){
  this.powerSaveMode = "on"
  if(this.temperature > 25){ this.temperature = 25}
}

Thermostat.prototype.maximumAllowedTemperature = function(){
  if(this.powerSaveMode === "on"){return 25}
  else{return 32}
}
