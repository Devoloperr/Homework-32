let shopItem = {
    id: 13,
    place: "Washington",
    weight: 200,
}
let stockItem = {...shopItem, price: 1000};
delete stockItem.place
console.log(shopItem);
console.log(stockItem);

