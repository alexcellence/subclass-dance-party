$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
      );
      window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.makeDancersLineUp').on('click', function(event) {

    var lineUp = function() {
      //should access the global variable window.dancers array
      var allDancers = window.dancers;
      //should reset the first dancer's position top: 450px and left: 150px
      //set first dancer to position
      allDancers[0].setPosition(885, 150);
      // allDancers[0].left = 150;

      for (var i = 1; i < allDancers.length; i++) {
        // should reassign allDancers[i].top = 450 px
        allDancers[i].setPosition(885, allDancers[i - 1].left + 120);
        //should increment left for following dancers by +175px
      }
    };
    lineUp();
  });

});



