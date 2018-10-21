import Pessoa from './pessoa'
import './modulos/moduloA'
// import './assets/css/estilo.css'
import './assets' // vai procurar o index.js dentro de /assets, pois sempre procura index.js por default, lá eu importei mais coisas.

const atendente = new Pessoa
console.log(atendente.cumprimentar())