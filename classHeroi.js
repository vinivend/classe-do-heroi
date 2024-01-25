class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';

    switch (this.tipo) {
      case 'lutador':
        ataque = 'socos';
        break;
      case 'gladiador':
        ataque = 'espada';
        break;
      case 'ninja':
        ataque = 'artes marciais';
        break;
      case 'arqueiro':
        ataque = 'arco';
        break;
      default:
        ataque = 'não possui ataque';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Anderson Silva', 700, 'lutador');
heroi1.atacar(); // Saída: O lutador atacou com soco

const heroi2 = new Heroi('Maximus', 350, 'gladiador');
heroi2.atacar(); // Saída: O gladiador atacou usando espada

const heroi3 = new Heroi('Mestre Splintter', 520, 'ninja');
heroi3.atacar(); // Saída: O ninja atacou usando artes marciais

const heroi4 = new Heroi('Ze', 290, 'arqueiro');
heroi4.atacar(); // Saída: O arqueiro atacou usando arco