var Stack = function(){
  // Use an object with numeric keys to store values
   // Hint: set an initial value here

  // Implement the methods below
  var stack = Object.create(Stack.stackMethods);
  stack.storage = {};
  stack.size = 0;
  return stack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  this.size += 1;
  this.storage[this.size] = value;
};

Stack.stackMethods.pop = function(){
  var temp = this.storage[this.size];
  delete this.storage[this.size];
  if (this.size > 0) {
    this.size -= 1;
  }
  return temp;
};

Stack.stackMethods.returnsize = function(){
  return this.size;
};


