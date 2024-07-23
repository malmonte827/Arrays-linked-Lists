/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** gets node at index*/

    get(idx) {
        let current = this.head;
        let count = 0;

        while (!current && count != idx) {
            count += 1;
            current = current.next;
        }
        return current;
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
    }

    /** pop(): return & remove last item. */

    pop() {
        if (this.length === 0) {
            throw new Error("List is empty.");
        }
        return this.removeAt(this.length - 1);
    }

    /** shift(): return & remove first item. */

    shift() {
        if (this.length === 0) {
            throw new Error("List is empty.");
        }
        return this.removeAt(0);
    }
    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Invalid index");
        }
        return this.get(idx).val;
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Invalid index");
        }
        let current = this.get(idx);
        current.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Invalid index");
        }
        let prev = this.get(idx - 1);
        let newNode = new Node(val);
        newNode.next = prev.next;
        prev.next = newNode;

        this.length += 1;
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Invalid index");
        }

    /** remove first item */

        if (idx === 0) {
            let val = this.head.val;
            this.head = this.head.next;
            if (this.length < 2) this.length = this.head;
            this.length -= 1;
            return val;
        }

        let prev = this.get(idx - 1);

        /** remove last item */

        if (idx === this.length - 1) {
            let val = this.tail.val;
            this.tail = prev;
            this.tail.next = null;
            this.length -= 1;
            return val;
        }
        /** remove item in middle */
        let val = prev.next.val;
        prev.next = prev.next.next;
        this.length -= 1;
        return val;
    }

    /** average(): return an average of all values in the list */

    average() {
        if (this.length === 0) return 0;

        let sum = 0;
        let currentNum = this.head;

        while (currentNum) {
            sum += currentNum.val;
            currentNum = currentNum.next;
        }
        return sum / this.length;
    }
}

module.exports = LinkedList;
