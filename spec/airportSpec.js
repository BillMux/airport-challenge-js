describe('Airport', function() {
  var airport = new Airport

  it('has a hangar', function() {
    expect(airport.hangar).toEqual(jasmine.any(Array))
  });
});
