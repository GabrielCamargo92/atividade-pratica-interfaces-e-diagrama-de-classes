export abstract class FormatoDeElemento {
  desenhar(): void {}
  redimensionar(novoValor: number, novoValor2?: number): void | number {}
}

export class Circulo implements FormatoDeElemento {
  raio!: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  desenhar(): void {
    let result = 2 * 3.14 * this.raio;
    console.log("Círculo com valor de raio inicial: ");
    console.log(result);
  }

  redimensionar(novoValor: number): void {
    this.raio = novoValor;
    let result = novoValor * 2 * 3.14;
    console.log("novo círculo tem: " + result);
  }
}
export class Retangulo implements FormatoDeElemento {
  comprimento: number;
  altura: number;

  constructor(comprimento: number, altura: number) {
    this.comprimento = comprimento;
    this.altura = altura;
  }

  desenhar(): void {
    let result = this.comprimento * 2 + this.altura * 2;
    console.log("O perímetro é: " + result);
  }

  redimensionar(novoValor: number, novoValor2: number): void {
    this.altura = novoValor;
    this.comprimento = novoValor2;

    let result = this.comprimento * 2 + this.altura * 2;
    console.log("O novo perímetro é: " + result);
  }
}
