// AULA 14 - 19 DE MAIO DE 2025 - Segunda-Feira

// Listas Encadeadas

//********************************* TEMA DA AULA **********************************

class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

// LISTA SIMPLES ENCADEADA

class SimplyLinkedList {
  constructor() {
    this.head = null;
  }

  inserirInicio(v) {
    let novo = new Node(v);
    novo.proximo = this.head;
    this.head = novo;
  }

  imprimir() {
    let atual = this.head;
    let str = "";
    while (atual) {
      str += atual.valor + " -> ";
      atual = atual.proximo;
    }

    str += "null";
    console.log(str);
  }
}

const lista = new SimplyLinkedList();

lista.inserirInicio(10);
lista.inserirInicio(20);

lista.imprimir();

LISTA DUPLAMENTE ENCADEADA

class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
    this.anterior = null;
  }
}

class DoublyLinkedinList {
  constructor() {
    this.valor = null;
  }

  inserirInicio(v) {
    let novo = new Node(v);
    novo.proximo = this.head;
    if (this.head) {
      this.head.anterior = novo;
    }
    this.head = novo;
  }

  inserirFim(v) {}

  imprimirFrente() {}

  imprimirAtras() {}
}

// -------- AULA EXTRA YOUTUBE ------------



