export class Pizzaria {
  nome: string;
  telefone: string;

  constructor(nome: string, telefone: string) {
    this.nome = nome;
    this.telefone = telefone;
  }

  mostrarPizzaria() {
    let estabelecimento = this;
    console.log(estabelecimento);
  }
}

export class Pizza extends Pizzaria {
  sabor!: string;

  escolherPizza(sabor: string) {
    sabor = this.sabor;
    console.log("Você escolheu a pizza de: " + sabor);
  }
}
