describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.returnsize).to.be.a('function');
  });

  it('should add pushed items to the top of the stack', function() {
    // Fill out the body of the test here
    stack.push('hi');
    stack.push('bye');
    stack.push('good morning');
    stack.push('good night');
    storage=stack.storage();
    expect(storage[stack.returnsize()]).to.equal('good night');


  });

  it('should remove popped items from the top of the stack', function() {
    // Fill out the body of the test here
    stack.push('hi');
    stack.push('bye');
    stack.push('good morning');
    stack.push('good night');
    stack.pop();
    expect(stack.pop()).to.equal('good morning');

  });

  it('should push and pop multiple items in the right order (LIFO)', function() {
    // Fill out the body of the test here
    stack.push('hi');
    stack.push('bye');
    stack.push('good morning');
    stack.push('good night');
    expect(stack.pop()).to.equal('good night');
    stack.push('good afternoon');
    expect(stack.pop()).to.equal('good afternoon');


  });

  it('should not error when popping from an empty stack', function() {
    stack.pop();
    expect(stack.returnsize()).to.equal(0);
    // Fill out the body of the test here
  });

  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly

  it('if storage is empty then size should return 0', function() {
    expect(stack.returnsize()).to.equal(0);
    // Fill out the body of the test here
  });

  it('if we push to stack size will increase by 1', function() {
    stack.push('hi');
    expect(stack.returnsize()).to.equal(1);
    // Fill out the body of the test here
  });

  it('if stack size > 0 and we pop then size decreases by 1', function() {
    stack.push('hi');
    stack.pop();
    expect(stack.returnsize()).to.equal(0);
    // Fill out the body of the test here
  });

it('pop should return the last element that was pushed', function() {
    stack.push('hi');
    expect(stack.pop()).to.equal('hi');
    // Fill out the body of the test here
  });


});

