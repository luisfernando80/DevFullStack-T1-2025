// AULA 16 - 22 DE MAIO DE 2025 - Quinta-Feira

//  Pilha - Last In, First Out ( ultimo a entrar - primeiro a sair//
//  Fila

//********************************* PILHA **********************************
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push() {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;

    let poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  peek() {
    if (!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

//********************************* FILA **********************************

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
    }

    this.rear = newNode;
    if (!this.front) {
      this.front = newNode;
    }
    this.size++;
  }

  dequeue() {}
}
