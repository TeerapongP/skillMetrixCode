// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruit1 = fruits.at(1); // This will retrieve "Orange"
// const fruit2 = fruits[2];     // This will retrieve "Apple"


const ages = [3, 10, 18, 20];
const index = ages.findIndex(checkAge); //จะเช็คค่า Index ตัวแรกที่มากกว่า 18

function checkAge(age) {
    return age > 18;
}
console.log(index); //  

