//ASAL SAYI BULMA
function findPrime(...numbers) {
    let asal=[]
    let asalolmayan=[]
    for(let i = 0 ; i < numbers.length; i++) {
        for(let j = 2 ; j < numbers[i]; j++) {
        if (numbers[i]%2 == 0){
            asalolmayan.push(numbers[i])
            break;
        }else{
            asal.push(numbers[i])
            break;
    
        }
    }
}
    console.log("asal sayılar:" + asal)
    console.log("asal olmayanlar:" +asalolmayan)
    console.log("********************************")
}
findPrime(19,48,77,13,23,36)
findPrime(58,92,41,63,103)


//ARKADAŞ SAYILAR
let number1;
let number2;
let total1=0;
let total2=0;
function FindFriendNumbers(number1,number2){
    for(let i = 1; i<number1; i++){
        if(number1 % i == 0){
            total1 += i;
        }
    }
    for(let j = 1; j < number2 ; j++){
        if(number2 % j == 0){
            total2 += j;
        }
    }
    if(number1==total2 && number2==total1) {
        console.log(number1 + " ve " + number2 + " arkadas sayilardir ")
    }else{
        console.log(number1 + " ve " + number2 + " arkadas sayilar degildirler")
        console.log("********************************")
}
}
FindFriendNumbers(220,284)
FindFriendNumbers(23,127)


//MÜKEMMEL SAYILARI LİSTELEME
function PerfectNumbers(){
let numbers=[]
for(let i = 1; i<=1000; i++) {
    let total = 0;
    for ( let j = 0; j<i; j++){
        if(i % j == 0 ) {
            total += j
        }
    }
    if (total==i) {
        numbers.push(i)

    }
}
console.log("mükemmel Sayılar:" + numbers)
console.log("********************************")
}
PerfectNumbers()

//ASAL SAYILARI LİSTELEME
function ListPrime() {
    let PrimeNumbers=[]
    let divisor = 0;
    for (let i = 2; i < 1000; i++) {
        divisor = 0;
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                divisor++;
            }
        }
        if (divisor == 2) {
            PrimeNumbers.push(i)
            divisor = 0;
        }       
    }
     console.log(...PrimeNumbers)
}
ListPrime()



