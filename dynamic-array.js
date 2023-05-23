class DynamicArray {

  constructor(defaultSize = 4) {

    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {

    return this.data[index];
  }

  push(val) {

    if (this.length === this.capacity){
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    if (this.length === 0){
      return undefined;
    }

    const popped = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return popped;
  }

  shift() {

    if (this.length === 0){
      return undefined;
    }

    const shifted = this.data[0];

    for (let i = 0; i < this.length; i++){
      this.data[i] = this.data[i+1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return shifted;
  }

  unshift(val) {

    if (this.length === this.capacity){
      this.resize();
      this.unshift(val);
    } else {
      for (let i = this.length; i > 0; i--){
        this.data[i] = this.data[i-1];
      }
  
      this.data[0] = val;
      this.length++;
    }
  }

  indexOf(val) {

    for (let i = 0; i < this.length; i++){
      if (this.data[i] === val){
        return i;
      }
    }
    return -1;
  }

  resize() {
    let newCapacity = this.capacity * 2;

    const largerArr = new Array(newCapacity);
  
    for (let i = 0; i < this.length; i++){
      largerArr[i] = this.data[i];
    }
  
    this.data = largerArr;
    this.capacity = newCapacity;
  }
}


module.exports = DynamicArray;