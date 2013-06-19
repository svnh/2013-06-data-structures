var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    size += 1;
    stack[size] = value;
  };

  stack.pop = function(){
    var temp = stack[size];
    delete stack[size];
    if (size > 0) {
      size -= 1;
    }
    return temp;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
