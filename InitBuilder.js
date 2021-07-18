"use strict";

class  BaseBuilder{  // 
    constructor(value){
      this.value = value;
    }
    plus(...n) {
      this.value =  this.value  + n.reduce((sum, value) => sum + value); // this
      return this;
    }
    get() { 
      return this.value;
    }
}

class IntBuilder extends BaseBuilder{
    constructor(value){
      value = typeof value === 'number' ? value : 0;
      super(value);
    }
    multiply(n){
      this.value = this.value * n;
      return this;
      
    }
    divide(n){
      this.value = this.value / n;
      return this;
    }
    mod(n){
      this.value = this.value % n;
      return this;
    }
    minus(...n){
      this.value = this.value - n.reduce((dif, value) => dif + value);
      return this;
    }
    static random(from, to){
      let min = Math.ceil(from);
      let max = Math.floor(to);
      return Math.floor(Math.random() * (max - min)) + min;
    }
}

let intBuilder = new IntBuilder(10);
console.log(intBuilder.plus(2, 3, 2)); //17
console.log(intBuilder.minus(1, 2)); //14
console.log(intBuilder.multiply(2)); //28
console.log(intBuilder.divide(4)); //7
console.log(intBuilder.mod(3));//1
console.log(intBuilder.get()); // get method
console.log(IntBuilder.random(10, 100)); // static method

function StringBuilder(value){
  value = typeof value === 'string' ? value : '';
  Object.assign(this, new BaseBuilder(value));
}

StringBuilder.prototype = Object.create(BaseBuilder.prototype);

StringBuilder.prototype.multiply = function(n){
    this.value = this.value.repeat(n);
    return this;
  }
  StringBuilder.prototype.minus = function(n){
    this.value = this.value.slice(0, -n);
    return this;
  }
  StringBuilder.prototype.divide = function(n){
    this.value = this.value.slice(0, n);
    return this;
  }
  StringBuilder.prototype.remove = function(string){
    this.value = this.value.split(string).join('');
    return this;
  }
  StringBuilder.prototype.sub = function (start, length){ 
    this.value = this.value.substring(start, start + length); 
    return this; 
  }
let strBuilder = new StringBuilder('Test');

console.log(strBuilder.plus('adasa', '!5678'));
console.log(strBuilder.minus(3));
// console.log(StringBuilder.multiply(3));
console.log(strBuilder.divide(4));
console.log(strBuilder.remove('s'));
console.log(strBuilder.sub(3, 1));
console.log(strBuilder.get());