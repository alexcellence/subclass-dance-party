describe('secondDancer', function() {

  var secondDancer, clock;
  var timeBetweenSteps = 200;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    secondDancer = new MakeSecondDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(secondDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(secondDancer.$node, 'toggle');
    secondDancer.step();
    expect(secondDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(secondDancer, 'step');
      expect(secondDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(secondDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(secondDancer.step.callCount).to.be.equal(2);
    });
  });
});
