const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collection = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.collection.push(dinosaur);
}


module.exports = Park