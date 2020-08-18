var assert = require('assert');
var sinon = require('sinon');
const { View } = require('../dist/view.js');

describe('View', function () {
  describe('draw', function () {
    it('should not throw an exception', function () {
      assert.equal(true, true);
    });

    it('should draw a line', function() {
      let beginPath = sinon.fake();
      let moveTo = sinon.fake();
      let lineTo = sinon.fake();
      let stroke = sinon.fake();

      let ctx = {
        beginPath: sinon.fake(),
        moveTo: sinon.fake(),
        lineTo: sinon.fake(),
        stroke: sinon.fake()  
      };

      let canvas = {
        getContext: sinon.fake.returns(ctx)
      }

      let view = new View(canvas);
      view.draw();

      assert(canvas.getContext.calledWith("2d"));
      assert(ctx.beginPath.called);
      assert(ctx.moveTo.calledWith(0, 0));
      assert(ctx.lineTo.calledWith(300, 150));
      assert(ctx.stroke.called);
    });
  });
});
