// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
//  that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
//  Print a new set of invitation messages, one for each person in your list

let guestList : String[] = ["Rabia", "Jia","Sharooq"];
console.log("Great news! We found bigger table")

guestList.unshift("Sadaf");
// console.log(guestList)

// splice()

guestList.splice(Math.floor(guestList.length/2), 0, "Ali");

// console.log(guestList)

// push

guestList.push("Areeb")
// console.log(guestList)

guestList.forEach(guest => {
    console.log(`dear ${guest}, you all are invited to dinner`)
})