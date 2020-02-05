class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
// Classes
class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Shilton';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();

// Metodo Static

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(10, 7));
