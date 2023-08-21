// Gatos e cachorros herdam características da classe dos mamíferos

// Classe mãe
class Mamifero {
  //método chamado automaticamente na hora da criação de novos objetos da classe Mamífero
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  emitirSom() {
    console.log(`${this.nome} está emitindo um som.`);
  }
}

// Classes filhas abaixo

// a palavra extends aqui indica que Gato herda os atributos e métodos da classe Mamífero
class Gato extends Mamifero {
  //método chamado automaticamente na hora da criação de novos objetos da classe Gato
  constructor(nome, idade, cor) {
    //o super ativa o construtor da classe mãe e faz com que nome e idade obedeçam as regras dele
    super(nome, idade);
    this.cor = cor;
  }

  //método novo e específico para a classe Gato
  arranhar() {
    console.log(`${this.nome} está arranhando.`);
  }

  //isso aqui é um exemplo de polimorfismo, pois estou sobrescrevendo o método da classe mãe
  //para emitir o som específico da classe filha
  emitirSom() {
    console.log(`${this.nome} está miando.`);
  }
}

// a palavra extends aqui indica que Cachorro herda os atributos e métodos da classe Mamífero
class Cachorro extends Mamifero {
  //método chamado automaticamente na hora da criação de novos objetos da classe Cachorro
  constructor(nome, idade, raca) {
    //o super ativa o construtor da classe mãe e faz com que nome e idade obedeçam as regras dele
    super(nome, idade);
    this.raca = raca;
  }

  //método novo e específico para a classe Cachorro
  latir() {
    console.log(`${this.nome} está latindo.`);
  }

  //isso aqui é um exemplo de polimorfismo, pois estou sobrescrevendo o método da classe mãe
  //para emitir o som específico da classe filha
  emitirSom() {
    console.log(`${this.nome} está latindo.`);
  }
}

// Criando instâncias das classes
const gato = new Gato("Frajola", 3, "preto e branco");
const cachorro = new Cachorro("Rex", 5, "Labrador");

// Chamando métodos das classes
gato.comer();
gato.emitirSom();
gato.arranhar();

cachorro.comer();
cachorro.emitirSom();
cachorro.latir();

//claro, eu também posso instanciar objetos na classe Mamífero

const golfinho = new Mamifero("Willy", 9);

golfinho.comer();
golfinho.emitirSom();
