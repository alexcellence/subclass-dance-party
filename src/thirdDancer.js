var MakeThirdDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer" id="third"></span>');
  this.setPosition(top, left);

}

MakeThirdDancer.prototype = Object.create(MakeDancer.prototype);
MakeThirdDancer.prototype.constructor = MakeThirdDancer;

MakeThirdDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this); //allows this(MakeThirdDancer) to be passed into MakeDancer..step function
  //this.step();
  this.$node;
}

// var makeThirdDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };