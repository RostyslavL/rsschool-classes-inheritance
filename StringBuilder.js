// API:

// new StringBuilder(str)   // constructor takes starting string, if not passed starts with ''
// plus(...str)             // takes infinite number of strings and concat with stored string
// minus(n)                 // cut last n chars from stored string
// multiply(int)            // repeat stored strings n times
// divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n)
// remove(str)              // remove taken string str from stored Prohibited to use String.prototype.replace() 
// sub(from, n)             // leaves substring starting from and with length n
// get()                    // returns stored value

// // EXAMPLE:
// let strBuilder = new StringBuilder('Hello') // 'Hello'
// strBuilder
//   .plus(' all', '!')                         // 'Hello all!'
//   .minus(4)                                  // 'Hello '
//   .multiply(3)                               // 'Hello Hello Hello '
//   .divide(4)                                 // 'Hell'
//   .remove('l')                               // 'He'
//   .sub(1,1)                                  // 'e'
//   .get()                                    // -> 'e'

class  baseBilder{  // 
    constructor(value){
        this.value = value 
    }
    plus(...n) {
        this.value =  this.value  + n.reduce((sum, value) => sum + value) // this
        return this
    }
    divide(n){
        this.value = this.value / n
        return this // this
    }

    get storedValue() { 
        return this.value
    }
}

function StringBuilder(value) {
    value = typeof value === 'string' ? value : ''
    Object.assign(this, new baseBilder(value))
}

StringBuilder.prototype = Object.create(baseBilder.prototype)

StringBuilder.prototype.multiply = function(n){
    // return this.value.repeat(n)
    return console.log(this.value.repeat(n))
  }
  StringBuilder.prototype.minus = function(n) {
    return this.value.slice(0, -n)
  }
  StringBuilder.prototype.divide = function(n) {
    return this.value.slice(0, n)
  }
  StringBuilder.prototype.remove = function(string) {
    return this.value.replace(string, '')
  }
  StringBuilder.prototype.sub = function(length, n) {
    return this.value.substring(length, n)
  }

let strBuilder = new StringBuilder('Test')

console.log(strBuilder.plus('adasa', '!5678'))
console.log(strBuilder.minus(3))
console.log(StringBuilder.multiply)
console.log(strBuilder.divide(4))
console.log(strBuilder.remove('s'))
console.log(strBuilder.sub(3, 1))
console.log(strBuilder.storedValue)


  

