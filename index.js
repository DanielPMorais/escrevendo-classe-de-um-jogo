class classeHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque
        switch (this.tipo.toLowerCase()){
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque básico';
                break;            
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const heroi1 = new classeHeroi("Veigar", 780, "mago");
heroi1.atacar();
const heroi2 = new classeHeroi("Darius", 37, "guerreiro");
heroi2.atacar();
const heroi3 = new classeHeroi("Lee Sin", 27, "monge");
heroi3.atacar();
const heroi4 = new classeHeroi("Kennen", 16, "ninja");
heroi4.atacar();
