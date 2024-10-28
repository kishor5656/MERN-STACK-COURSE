class Queue {
    constructor() {
        this.item = [];
    }
    enqueue(element) {
        this.item.push(element);
    }
    dequeue() {
        const front = this.item[0];
        this.item.shift()
        return front;
    }
    printQueue() {
        return this.item.join(' ')
    }

}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.printQueue());
uu