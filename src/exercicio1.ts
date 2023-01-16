export class Item {
  public valor!: number;
  public nome!: string;
  public descricao?: string;
}

export class Pedido {
  public itens: Item[] = [];
  public valorTotal: number = 0;

  constructor(itens: Array<Item>, valorTotal: number) {
    this.itens = itens;
    this.valorTotal = valorTotal;
  }

  ResultaValorTotal() {
    let total = this.itens.reduce((current, item) => {
      return current + item.valor;
    }, 0);

    console.log("Valor Total: R$" + total);
  }
}
