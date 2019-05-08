// require('test-sweet')

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
  });

  it('has a hangar', function() {
    expect(airport.hangar).toEqual([])
  });

  it('landed planes are stored in the hangar', function() {
    airport.land(plane)
    expect(airport.hangar).toEqual([plane])
  });
});
