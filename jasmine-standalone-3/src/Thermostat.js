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
  this.temperture = 20 ;
}

Thermostat.prototype.turnPowerSaveOff = function(){
  this.powerSaveMode = "off"
}
