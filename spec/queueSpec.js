describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.returnsize).to.be.a('function');
  });

  it('if storage is empty then size should return 0', function() {
      expect(queue.returnsize()).to.equal(0);
    });

  it('if enqueue size will increase by 1', function() {
    queue.enqueue('bill');
    expect(queue.returnsize()).to.equal(1);
  });

  it('should add enqueued items to the end of the queue', function() {
    // Fill out the body of the test here
    queue.enqueue('hi');
    queue.enqueue('bye');
    queue.enqueue('good morning');
    queue.enqueue('good night');
    expect(queue.storage[queue.returnsize()]).to.equal('good night');
  });

it('dequeue should return the first element in queue', function() {
    queue.enqueue('john');
    queue.enqueue('bill');
    queue.enqueue('joe');
    expect(queue.dequeue()).to.equal('john');
});

  it('should not error when dequeuing from an empty queue', function() {
    queue.dequeue();
    expect(queue.returnsize()).to.equal(0);
    // Fill out the body of the test here
  });

  it('should remove dequeued items from the front of the stack', function() {
    // Fill out the body of the test here
    queue.enqueue('hi');
    queue.enqueue('bye');
    queue.enqueue('good morning');
    queue.enqueue('good night');
    expect(queue.dequeue()).to.equal('hi');

  });

  it('should enqueue and dequeue multiple items in the right order (FIFO)', function() {
    // Fill out the body of the test here
    queue.enqueue('bob');
    queue.enqueue('joe');
    queue.enqueue('john');
    queue.enqueue('eric');
    expect(queue.dequeue()).to.equal('bob');
    queue.enqueue('good afternoon');
    expect(queue.dequeue()).to.equal('joe');
  });
//[person1, person2, 3, 4];

});