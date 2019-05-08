// require('test-sweet')

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });

  it('has a hangar, by default', function() {
    expect(airport.hangar).toEqual([]);
  });

  it('has default capacity of 20', function() {
    expect(airport.capacity).toEqual(20);
  });

  it('can be initialised with a plane in hangar', function() {
    airport = new Airport([plane])
    expect(airport.hangar[0]).toEqual(plane);
  });

  it('can be initialised with higher capacity', function() {
    airport = new Airport([], 10)
    expect(airport.capacity).toEqual(10);
  });

  describe('#land', function() {
    beforeEach(function() {
      airport.land(plane)
    });

    it('allows a plane to land', function() {
      expect(plane.land).toHaveBeenCalled();
    });

    it('stores a plane in the hangar', function() {
      expect(airport.hangar[0]).toEqual(plane)
    });
  });
});
