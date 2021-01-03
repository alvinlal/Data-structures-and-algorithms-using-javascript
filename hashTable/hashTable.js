class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    var total = 0;
    var value;
    var WEIRD_PRIME = 13;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    var index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    var index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] == key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    var valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!valueArr.includes(this.keyMap[i][j][1])) {
          valueArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueArr;
  }
  keys() {
    var keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!keysArr.includes(this.keyMap[i][j][0])) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

var ht1 = new HashTable();

ht1.set("hello world", "goodbye!!");
ht1.set("dogs", "are cool");
ht1.set("cats", "are fine");
ht1.set("i love", "pizza");
ht1.set("french", "fries");
ht1.set("french", "revolution");

console.log(ht1._hash("french"));

console.log(ht1.keyMap);
console.log(ht1.get("hello world"));
console.log(ht1.get("dogs"));
console.log(ht1.get("cats"));
console.log(ht1.get("i love"));
console.log(ht1.get("french"));

console.log(ht1.keys());
console.log(ht1.values());
