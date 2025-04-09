export class Client {
  constructor(name, querys, claims) {
    this.name = name
    this.querys = querys ?? new Queue() 
    this.claims = claims ?? new Stack()
  }
}

export class Stack {

  constructor(items) {
    this.items = items ??  []
  }

  // add element from top
  push(item) {
    return new Stack([item, ...this.items])
  }

  // remove element from top
  pop() {
    return new Stack(this.items.slice(1))
  }

  peek() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

}

export class Queue {
  constructor(items) {
    this.items = items ?? []
  }

  enqueue(item) {
    return new Queue([...this.items, item]);
  }

  dequeue() {
    return new Queue(this.items.slice(1))
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }
}

export class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class LinkedList { 
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode // first we connect the new node to the last element
    }
    this.tail = newNode // now, the tail is the new node  
    this.length++
  }

  peek(value, current = this.head) {
    if (!this.head) return null

    let count = 0
    while (count < this.length) {
      if (current.value === value) return current
      current = current.next
      count++
    }

    return null
  }

  size() {
    return this.length
  }

  remove(value) {
    if (!this.head) return null

    let current = this.head
    let prev = this.tail
    let count = 0

    while (count < this.length) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next
          this.tail.next = this.head
        } else {
          prev.next = current.next
          if (current === this.tail) {
            this.tail = prev
          }
        }

        this.length--

        if (this.length === 0) {
          this.head = null
          this.tail = null
        }

        return
      }

      prev = current
      current = current.next
      count++
    }
  }
}

// sample data
const claim1 = 'The service is too low'
const claim2 = 'I need internet to use this'
const claim3 = 'Consumes too much resources'
const claim4 = 'It cannot load on my pc'
const claim5 = 'My son broke this thing'

const query1 = 'I need an interview'
const query2 = 'What is the number of the specialist?'
const query3 = 'Give me more info please'
const query4 = 'This info is wrong, I need a new report'

// stack of claims for 'clients'
const stack1 = new Stack([claim1, claim3, claim5])
const stack2 = new Stack([claim4, claim2])
const stack3 = new Stack([claim2, claim5, claim1])

// queue of querys for 'clients'
const queue1 = new Queue([query1, query2,])
const queue2 = new Queue([query3, query4,])
const queue3 = new Queue([query1, query4,])

// 'clients'
const client1 = new Client('daniel', queue1, stack1)
const client2 = new Client('david', queue2, stack2)
const client3 = new Client('juan', queue3, stack3)

const clientsList = new LinkedList()
clientsList.append(client1)
clientsList.append(client2)
clientsList.append(client3)

export default clientsList