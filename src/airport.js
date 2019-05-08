var Airport = function(hangar = [], capacity = 20) {
  this.hangar = hangar;
  this.capacity = capacity;
};

Airport.prototype.land = function(plane) {
  plane.land();
  this.hangar.push(plane);
};
