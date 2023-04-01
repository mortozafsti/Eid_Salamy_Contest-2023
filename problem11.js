const menuItem = [
    {name:"Burger", price: 5.99},
    {name:"Fries", price: 1.99},
    {name:"Soda", price: 2.99},
    {name:"Pizza", price: 3.99},
]

menuItem.sort((a,b) => a.price - b.price);
console.log(menuItem);