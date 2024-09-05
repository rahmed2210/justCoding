

let restaurant = {
    name: 'ASB',
    guessCapacity: 75,
    guessCount: 0,

//  A method is nothing more than an object property whose value is a function
    checkAvailability: function (partySize) {
//   THIS references the object the method is defined on
//        console.log(this.guessCapacity)
        let seatLeft = this.guessCapacity - this.guessCount
        return partySize <= seatLeft
    },
    // changing it via method calls  -->
//    SeatParty
    seatParty: function (partySize) {
        this.guessCount = this.guessCount + partySize
    },
//   removeParty
    removeParty: function (partySize) {
        this.guessCount = this.guessCount - partySize
    }
}


restaurant.seatParty(72)

console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))