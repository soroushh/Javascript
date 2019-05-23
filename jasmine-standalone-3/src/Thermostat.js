function Thermostat(){
  this.temperature = 20;
  this.powerSaveMode = "on";
}

Thermostat.prototype.up = function(){
  if(this.temperature < this.maximumAllowedTemperature()){this.temperature += 1} ;
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

Thermostat.prototype.energy_usage = function(){
  if(this.temperature >=10 && this.temperature <= 18){return "low-usage"}
  else if(this.temperature > 18 && this.temperature <= 25){return "medium-usage"}
  else {return "high-usage"}
}
