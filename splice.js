
//************************* Leval 1 ********************************//

// use splice to remove "Banana"

let fruits = ["apple", "banana", "cherry", "mango"]
fruits.splice(1, 1);
console.log(fruits)

// use splice to insert "yellow" at index 1

let colors = ["red", "green", "blue"]
colors.splice(1, 0, "yellow")
console.log(colors)

// use splice to remove the last element (5)
let numbers = [1, 2, 3, 4, 5]
numbers.splice(4, 1)
console.log(numbers)

//***************************** Leval 2 ***********************************/

//use splice to replace "cat" with "tiger".
let animals = ["dog", "cat", "rabbit", "lion"]
animals.splice(1, 1, "tiger")
console.log(animals)

//use splice to remove "mar" and "Apr" and insert "march-april"

let months = ["jan", "feb", "mar", "apr", "may"]
months.splice(2, 2, "march-april")
console.log(months)

//********************************* Leval 3 ********************************** */

// use splice to remove "c" and "d" & insert "x","y","z"
let letters = ["a", "b", "c", "d", "e"]
letters.splice(2, 2, "x", "y", "z")
console.log(letters)

//use splice to remove the middle two elements(30,40)

let scores = [10, 20, 30, 40, 50, 60]
scores.splice(2, 2)
console.log(scores)

//************************************** Leval 4 ******************************* */

// a user removes "Notebook" from the card. insert "marker" & "scale".
let cart = ["pen", "pencil", "notebook", "eraser", "sharpener"]
cart.splice(2, 1, "marker", "scale")
console.log(cart)

//Remove the 2nd & 3rd songs,add "newsong1","newsong2"

let playlist = ["song1", "song2", "song3", "song4", "song5"]
playlist.splice(1, 2, "newsong1", "newsong2")
console.log(playlist)

//***************************************** Leval 5 ********************************** */

// it should remove the middle element of array

function removeMiddle(arr) {
    let mid = Math.floor(arr.lenght / 2);
    if (arr.lenght % 2 === 0) {
        arr.splice(2, 1);
    }
    else {
        arr.splice(2,1);
    }
    return arr;
}
console.log(removeMiddle([1, 2, 3, 4, 5]))
console.log(removeMiddle([10, 20, 30, 40]))