class Stack {
    constructor() {
        this.item = [];
    }
    push(element) {
        this.item.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return 'underflow';
        }
        
        return this.item.pop();

    }
    peek() {
        return this.item[this.item.length - 1];
    }
    isEmpty() {
        return this.item.length === 0;
    }

    printStack() {
        return this.item.join(' ')
    }

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.printStack());
console.log(stack.pop());

console.log(stack.printStack());
