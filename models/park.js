const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collection = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
    let index = this.collection.indexOf(dinosaur);
    this.collection.splice(index, 1);
}

Park.prototype.findMostPopular = function() {
    let mostPopular;
    let highestNumber = 0;
    for(var dinosaur of this.collection) {
        if(dinosaur.guestsAttractedPerDay > highestNumber) {
            mostPopular = dinosaur.species;
        }
    }
    return mostPopular;
}

Park.prototype.sameSpecies = function(dinosaur) {
    let count = 0;
    for(var obj of this.collection) {
        if(obj.species === dinosaur.species){
            count += 1;
        }
    }
    return count;
}

Park.prototype.visitorCount = function() {
    let count = 0;
    for(var dinosaur of this.collection) {
        count += dinosaur.guestsAttractedPerDay;
    }
    return count;
}

Park.prototype.annualVisitorCount = function() {
    return (this.visitorCount())*365;
}

Park.prototype.annualRevenue = function() {
    return this.annualVisitorCount() * this.ticketPrice;
}

Park.prototype.removeSpecies = function(dinosaur) {
    let newCollection = [];
    for(var obj of this.collection) {
        if(obj.species !== dinosaur.species) {
            newCollection.push(obj);
        }
    }
    this.collection = newCollection;
}

Park.prototype.dietType = function() {
    let dietType = {};
    let carnivoreCount = 0;
    let herbivoreCount = 0;
    let omnivoreCount = 0;
    for (var dinosaur of this.collection) {
       if (dinosaur.diet === 'carnivore') {
            carnivoreCount += 1;
       } else if (dinosaur.diet === 'herbivore') {
           herbivoreCount += 1;
       } else {
           omnivoreCount += 1;
       }
    }
    return dietType = {'carnivore': carnivoreCount, 'herbivore': herbivoreCount, 'omnivore': omnivoreCount }
}


module.exports = Park