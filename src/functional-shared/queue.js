var makeQueue = function(){
  // Use an object with numeric keys to store values
  //var storage = {};

//  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};
    queue.storage = {};
    queue.size = 0;
  extend(queue, makeQueue.queueMethods);

  return queue;
};
var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

makeQueue.queueMethods = {};

makeQueue.queueMethods.enqueue = function(value){
  this.size += 1;
  this.storage[this.size] = value;
};

makeQueue.queueMethods.dequeue = function(){
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

makeQueue.queueMethods.returnsize = function(){
  return this.size;
};

makeQueue.queueMethods.storage=function(){
  return this.storage;
};

