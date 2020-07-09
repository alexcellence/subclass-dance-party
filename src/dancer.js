var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  var newStep = this.step.bind(this);//some binding function that binds MakeDancer with originalStep()
  setTimeout(newStep, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};



// set lineUp method on dancer
// make a button in dancefloor.html where the functionality will be in lineUp
// button functionality to be defined in init.js
// button functionality should reset each dancer's position
// use debugger to figure out what this refers to and refactor if necessary
// iterate through dancers array and assign each dancer a constant top position and shift left position for each dancer

