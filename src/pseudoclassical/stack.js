var Stack = function(){
  // Use an object with numeric keys to store values
   // Hint: set an initial value here

  // Implement the methods below
  this.storage = {};
  this.size = 0;
};

Stack.prototype.push = function(value){
  this.size += 1;
  this.storage[this.size] = value;
};

Stack.prototype.pop = function(){
  var temp = this.storage[this.size];
  delete this.storage[this.size];
  if (this.size > 0) {
    this.size -= 1;
  }
  return temp;
};

Stack.prototype.returnsize = function(){
  return this.size;
};


