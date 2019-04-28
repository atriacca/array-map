


const vacationSpots = [{
    _id: "vac0001",
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
},{
    _id: "vac0002",
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
},{
    _id: "vac0003",
    place: "China",
    price: 1200,
    timeToGo: "Fall"
}
]; 
// ES6:
const sPlaces = vacationSpots.map(spot => spot.timeToGo)
console.log(sPlaces)