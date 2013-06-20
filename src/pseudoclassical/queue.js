var Queue = function(){
  // Use an object with numeric keys to store values
  //var storage = {};

//  var size = 0; // Hint: set an initial value here

  // Implement the methods below
    this.storage = {};
    this.size = 0;
};


Queue.prototype.enqueue = function(value){
  this.size += 1;
  this.storage[this.size] = value;
};

Queue.prototype.dequeue = function(){
  var temp = this.storage[1];
  // delete storage[1];
  var n = this.size;
  for (var key in this.storage) {
    this.storage[key] = this.storage[parseInt(key, 10)+1];
  }

  if (this.size > 0) {
    this.size -= 1;
  }
  return temp;
};

Queue.prototype.returnsize = function(){
  return this.size;
};

Queue.prototype.storage=function(){
  return this.storage;
};

