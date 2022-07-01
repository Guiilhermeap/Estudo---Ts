const pessoa ={
    nome: 'Guilherme',
    idade: 21,
    profissao: 'desenvolvedor'
}

pessoa.idade = 40;

const joao: {nome: string, idade: number, profissao: string} = {
    nome: 'João',
    idade: 40,
    profissao: 'pintor'
}

const ana: {nome: string, idade: number, profissao: string} = {
    nome: 'Ana',
    idade: 31,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Densenvolvedor,
    JogadorDeFutebol
}
interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 31,
    profissao: Profissao.Professora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 38,
    profissao: Profissao.Professora
}

const jessica: Estudante = {
    nome: 'Jessia',
    idade: 20,
    profissao: Profissao.Atriz,
    materias: ['Matematica discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 20,
    profissao: Profissao.Professora,
    materias: ['Matematica discreta', 'Meio Ambiente']
}

function listar (lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);