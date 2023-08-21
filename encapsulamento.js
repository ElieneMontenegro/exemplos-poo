//encapsulamento aqui serve para proteger atributos da classe CaixaEletronico e deixá-la mais segura e confiável

//o usuário não deve poder acessar os dados da classe de qualquer jeito
//é necessário criar métodos seguros e com restrições para que ele possa acessar os dados de forma correta

class CaixaEletronico {
  //no js não existe suporte nativo para encapsulamento como no Java ou no TypeScript (que dá pra usar Private e Public)
  //mas podemos fazer o encapsulamento por convenção de nomenclatura
  constructor() {
    //dessa forma abaixo, eu estou dizendo que esta propriedade 'saldo' é privada
    //por convenção o prefixo `_` indica isso
    //como propriedade privada, ela não deve ser acessada no exterior da classe
    this._saldo = 0;
  }

  verificarSaldo() {
    console.log(`Seu saldo atual é R$ ${this._saldo.toFixed(2)}`);
  }

  depositar(valor) {
    this._saldo += valor;
    console.log("Depósito bem sucedido");
  }

  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
      console.log("Saque bem sucedido");
    } else {
      console.log("Saldo insuficiente para saque");
    }
  }
}

// Criando uma instância de CaixaEletronico
const caixa = new CaixaEletronico();

// Testando os métodos
caixa.verificarSaldo();
caixa.depositar(200.5);
caixa.sacar(100);
caixa.verificarSaldo();
