
//https://stackoverflow.com/questions/6299500/tersest-way-to-create-an-array-of-integers-from-1-20-in-javascript
numbers = Array.from(Array(101),(x,i)=>i);
numbers.shift(); //1 to 100, not 0 to 100

function cracklePop(num){
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            return "<em><strong>CracklePop</strong></em><br>";
        }

        return "<em>Crackle</em>";

    } else if (num % 5 == 0) {
        return "<strong>Pop</strong>";
    } else if (num < 10) {
        return "0" + num
    }

    return num;

    }

crackedPoppedNumbers = numbers.map((num) => cracklePop(num));

cracklepop = document.querySelector('#cracklepop');

cracklepop.innerHTML += crackedPoppedNumbers;