
/*
new IntBuilder(int) // constructor takes starting integer, if not passed starts with 0;
.plus(...n)         // take infinite number of integers and sum all with stored value;
.minus(...n)        // take infinite number of integers and subtract from stored value; 
.multiply(n)        // multiply param n on stored value;
.divide(n)          // leaves integer part of division stored value on n; 
.mod(n)             // leaves remainder of the division stored value with on n;
.get()              // returns stored value;
*/
"use strict"

class  baseBilder{  // 
    constructor(value){
        this.value = value 
    }
    get storedValue() { 
        return this.value
    }
}


class IntBuilder extends baseBilder{
    constructor(value){
        value = typeof value === 'number' ? value : 0
        super(value)
    }
    multiply(n){
        this.value = this.value * n
        return this // this
    }
    divide(n){
        this.value = this.value / n
        return this // this
    }
    mod(n){
        this.value = this.value % n
        return this // this
    }
    minus(...n){
        this.value = this.value - n.reduce((dif, value) => dif + value)
        return this // this
    }
    multiply(n){
        this.value = this.value * n
        return this 
    }
    divide(n){
        this.value = this.value / n
        return this // this
    }
    mod(n){
        this.value = this.value % n
        return this // this
    }
    static random(from, to) {
      let min = Math.ceil(from)
      let max = Math.floor(to)
      return Math.floor(Math.random() * (max - min)) + min
    }
}


let intBuilder = new IntBuilder(10)
console.log(intBuilder.plus(2, 3, 2)) //17
console.log(intBuilder.minus(1, 2)) //14
console.log(intBuilder.multiply(2)) //28
console.log(intBuilder.divide(4)) //7
console.log(intBuilder.mod(3))//1
console.log(intBuilder.storedValue); // get method
console.log(IntBuilder.random(10, 100)); // static method
