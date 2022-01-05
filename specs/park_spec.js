const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic', 250);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 75);
    dinosaur3 = new Dinosaur('megasaurus', 'omnivore', 60);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 250);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.collection.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.collection.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.findMostPopular();
    assert.strictEqual(actual, 'diplodocus');
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.sameSpecies(dinosaur1);
    assert.strictEqual(actual, 2);

  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.visitorCount();
    assert.strictEqual(actual, 125)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.annualVisitorCount();
    assert.strictEqual(actual, 18250)
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.annualRevenue();
    assert.strictEqual(actual, 4562500)
  });

  it('should remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeSpecies(dinosaur1);
    const actual = park.collection.length;
    assert.strictEqual(actual, 1);
  });

  it('should return an object with diet types and number of dinosaurs', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dietType();
    assert.deepStrictEqual(actual, { carnivore: 2, herbivore: 1, omnivore: 1 })
  });

});
