var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    size += 1;
    storage[size] = value;
  };

  queue.dequeue = function(){
    var temp = storage[1];
    // delete storage[1];
    var n = size;
    for (var key in storage) {
      storage[key] = storage[parseInt(key, 10)+1];
    }

    if (size > 0) {
      size -= 1;
    }
    return temp;
  };

  queue.size = function(){
    return size;
  };

  queue.storage=function(){
    return storage;
  };

  return queue;
};
