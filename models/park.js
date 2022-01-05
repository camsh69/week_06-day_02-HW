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


module.exports = Park