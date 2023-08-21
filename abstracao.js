//Você verá que a classe Carro vai abstrair os detalhes internos e complexos de como as ações são realizadas
//e o usuário só precisará interagir com os métodos da maneira mais simples possível
//como se fosse uma interação com um carro na vida real, onde você não precisa se preocupar com os detalhes
//nem saber como o carro funciona para poder dirigir

class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar() {
    //aqui pode ter uma função complexa de como o carro é acelerado
    //o usuário não precisa saber, ele só precisa chamar o método "acelerar()"
    //o mesmo serve para os outros métodos!
    this.velocidade += 10;
    console.log(`O ${this.modelo} acelerou para ${this.velocidade} km/h.`);
  }

  frear() {
    if (this.velocidade >= 5) this.velocidade -= 5;
    console.log(`O ${this.modelo} freou e está a ${this.velocidade} km/h.`);
  }

  fazerCurva() {
    console.log(`O ${this.modelo} fez uma curva.`);
  }

  darSeta(direcao) {
    console.log(`O ${this.modelo} deu seta para a ${direcao}.`);
  }
}

// Criando uma instância de Carro
const meuCarro = new Carro("Toyota", "Corolla");

// Executando os métodos
meuCarro.acelerar();
meuCarro.frear();
meuCarro.fazerCurva();
meuCarro.darSeta("direita");
