const cors = require('cors');
/*

@DOCS: CORS-MIDDLEWARE

fiz essa configuração e também tem um html de teste basta arrastar ele pro navegador
testar no console log a resposta deve retornar o ping,
para mudar algo relacionado as origens que devem ser permitidas deve ser modificado no
AccessControlAllowOrigin ex: AccessControlAllowOrigin:['localhost:8080/'] isso é uma lista
então pode ser mais de uma origem basta adicionar assim ex: AccessControlAllowOrigin:['localhost:8080/',''localhost:3000/']

@Param AccessControlAllowOrigin: origem da requisição
@Param methods: metodos usados do cabeçalho
@Param exposedHeaders: cabeçalho expostos
@Param preflightContinue: controla o comportamento do middleware CORS booleano coloquei como false para não controlar mas pode por true
@Param credentials: true controla as credeciais deve ser usado como true caso tenha posteriormente controle de usuários mas pode por como false

*/
const corsOptions = {
  AccessControlAllowOrigin: ['*'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  exposedHeaders: ['Authorization'],
  preflightContinue: false,
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;