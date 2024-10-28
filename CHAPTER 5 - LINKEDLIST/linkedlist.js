class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class singlelinkedlist {
    constructor() {
        this.head = null;
    }
    insertAtBeg(data) {
        const newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
    };
    insertAtEnd(data) {
        const newNode = new node(data);
        if (!this.head) {
            this.head = newNode;
        }else{
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    };
    insertAtIndex(data,index){
        if (index === 0 ) {
            this.insertAtBeg(data);
            return 
        }
        const newNode = new node(data);
        let current,previous;
        current = this.head;
        let count = 0;
        while (count<index) {
            previous = current;
            current = current.next;
            count++;
            
        }

        if (!current) {
            console.log('index out of bound');
            
        }
        newNode.next = current;
        previous.next = newNode
    }
    deleteFromBeg(){
        if (!this.head) return;
        this.head = this.head.next;
    }
    deleteFromEnd(){
        if (!this.head){
            this.head = null
            return}

        let current  = this.head;
        let prev =null
        while(current.next){
            prev = current
            current = current.next
        }
        prev.next = null

    }
    deleteAtIndex(index){
        if (!this.head)return {
            
        }
        if (index === 0 ){
            this.head = this.head.next
            return
        }

        let current,previous;
        current = this.head;
        let count = 0;
        while (current && count<index) {
            previous = current;
            current = current.next;
            count++;
            
        }
        previous.next = current.next

    }
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + "->");
            current = current.next;
        }
        console.log('null');
    }
}

const list = new singlelinkedlist();

list.insertAtBeg(3);
list.insertAtBeg(2);
list.insertAtBeg(1);
list.insertAtEnd(5);
list.insertAtIndex(4,3);
// list.deleteFromBeg();
// list.deleteFromEnd();

list.printList();

list.deleteAtIndex(3)

list.printList();
