//Exercício 1
import { Pizzaria, Pizza } from "./exercicio4";
import { Pedido } from "./exercicio1";
import { Circulo, Retangulo } from "./exercicio2";

let meuPedido = new Pedido(
  [
    { valor: 40, nome: "Pizza" },
    { valor: 12, nome: "suco" },
  ],
  0
);
meuPedido.ResultaValorTotal();

//Exercício 2

let meuCirculo = new Circulo(4);
meuCirculo.desenhar();
meuCirculo.redimensionar(2);

let meuRetangulo = new Retangulo(10, 5);
meuRetangulo.desenhar();
meuRetangulo.redimensionar(20, 30);

//Exercício 3
//=>Foto em anexo

//Exercício 4

let minhaPizzaria = new Pizza("Mario e Luigi Pizzaria", "67 99627-4793");
minhaPizzaria.mostrarPizzaria();
minhaPizzaria.escolherPizza("Brócolis com Bacon");

//Exercício 5
//Outro arquivo .TS
