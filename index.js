import {Cliente} from "./Cliente.js";
import { Funcionario } from "./Funcionario/Funcionario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678);
diretor.cadastrarSenha("1111111");
const gerente = new Gerente("Ricardo", 5000, 121948766);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 786253712, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1111111");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1111111");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1111111");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);