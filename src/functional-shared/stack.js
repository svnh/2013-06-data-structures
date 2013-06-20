var makeStack = function(){
  // Use an object with numeric keys to store values
   // Hint: set an initial value here

  // Implement the methods below
  var stack = {};
  stack.storage = {};
  stack.size = 0;
  extend(stack, makeStack.stackMethods);

  return stack;
};
var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this.size += 1;
  this.storage[this.size] = value;
};

makeStack.stackMethods.pop = function(){
  var temp = this.storage[this.size];
  delete this.storage[this.size];
  if (this.size > 0) {
    this.size -= 1;
  }
  return temp;
};

makeStack.stackMethods.returnsize = function(){
  return this.size;
};

makeStack.stackMethods.storage=function(){
  return this.storage;
};

