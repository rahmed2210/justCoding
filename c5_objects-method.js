
console.log('\r\n <==== example ONE ====> \r\n')
let restaurant = {
    name: 'ASD',
    guestCapacity: 75,
    guestCount: 0,
    checkavailability: function (partySize) {
      console.log(this.guestCapacity)
      let seatLeft = this.guestCapacity - this.guestCount
      return partySize <= seatLeft
    } /* ^^ method ^^ */
  }
  
  
  let status = restaurant.checkavailability(4)
  
  console.log(status)
  
  //  Method is nothing more than an Object property whose value is a function
  // this --> references the Object, the method is undefined on


  
 //---------------------------------------------------------------
//================== CHALLENGE AREA ===================================
console.log('\r\n <==== CHALLENGE AREA ====> \r\n')

let restaurantOne = {
  name: 'The As',
  guestCapacityOne: 75,
  guestCountOne: 0,
  checkavailabilityOne: function (partySizeOne) {
    let seatLeft = this.guestCountOne - this.guestCountOne
    return partySizeOne <= seatLeft
  },
  seatPartyOne: function (partySizeOne) {
    this.guestCountOne = this.guestCountOne + partySizeOne
  },
  removePartyOne: function (partySizeOne) {
    this.guestCountOne = this.guestCountOne - partySizeOne
  }
}


restaurantOne.seatPartyOne(72)
console.log(restaurantOne.checkavailabilityOne(4))
restaurantOne.removePartyOne(5)
console.log(restaurantOne.checkavailabilityOne(4))

