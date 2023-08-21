//O músico pode tocar vários instrumentos

//A classe Músico tem um método tocar() que é bem geral
//Cada classe filha sobrescreve o método tocar() para adaptar ao instrumento específico

//classe mãe
class Musico {
  //método chamado automaticamente na hora da criação de novos objetos da classe Músico
  constructor(nome) {
    this.nome = nome;
  }

  //esse método é bem amplo e não específico
  tocar() {
    console.log(`${this.nome} está tocando um instrumento.`);
  }
}

//classes filhas

//a palavra extends indica que Guitarrista herda os atributos e métodos da classe mãe
class Guitarrista extends Musico {
  constructor(nome) {
    super(nome);
  }

  tocar() {
    console.log(`${this.nome} está tocando acordes na guitarra.`);
  }
}

//a palavra extends indica que Pianista herda os atributos e métodos da classe mãe
class Pianista extends Musico {
  constructor(nome) {
    super(nome);
  }

  tocar() {
    console.log(`${this.nome} está tocando teclas no piano.`);
  }
}

//a palavra extends indica que Violinista herda os atributos e métodos da classe mãe
class Violinista extends Musico {
  constructor(nome) {
    super(nome);
  }

  tocar() {
    console.log(`${this.nome} está tocando cordas no violino.`);
  }
}

//a palavra extends indica que Baterista herda os atributos e métodos da classe mãe
class Baterista extends Musico {
  constructor(nome) {
    super(nome);
  }

  tocar() {
    console.log(
      `${this.nome} está batendo as baquetas nos tambores da bateria.`
    );
  }
}

// Criando instâncias das classe
const guitarrista = new Guitarrista("João");
const pianista = new Pianista("Jéssica");
const violinista = new Violinista("Marcos");
const baterista = new Baterista("Maria");

// Usando polimorfismo para tocar diferentes instrumentos
guitarrista.tocar();
pianista.tocar();
violinista.tocar();
baterista.tocar();

//ainda respeitando o princípio do polimorfismo, apesar de eles serem de classes diferentes, todos são músicos
//o que significa que eu posso criar um vetor de músicos e se eu rodar por esse vetor, chamando o método tocar()
//cada um vai tocar da forma que sabe

const musicos = [guitarrista, pianista, violinista, baterista];

console.log("\nExemplo com o vetor: ");

musicos.map((musico) => musico.tocar());

//no typescript (onde as tipagens são mais fortes) é ainda mais fácil de visualizar esse polimorfismo.
