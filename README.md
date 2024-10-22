# Pizzeria-API

Uma API para um projeto de pizzaria.

Feito em JavaScript
![Node.js](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png)

## Dependencias

Este projeto utiliza as seguintes dependencias:

#### De projeto

* express --> Criação de rotas
* mongoose --> Conexão com banco de Dados (MongoDB)
* dotenv --> Criação de variáveis de ambiente
* swagger-ui-express --> Documentação das rotas da API

Para instalação dessas dependencias, utilize o comando: `npm i <nome-da-dependencia>`

##### De desenvolvimento

* Nodemon --> Para atualização automática do código durante desenvolvimento

Para instalação dessas dependencias, utilize o comando: `npm i -D <nome-da-dependencia>`

## Componentes

### User

O User representa o usuário que irá requisitar os serviços da pizaria. O usuário possui os seguintes atributos:

* Nome --> Nome do usuário na plataforma
* Email --> Para que o usuário consiga logar na plataforma
* Senha --> Para que o usuário consiga logar na plataforma
* Endereços --> Para saber para onde o pedido deve ser entregue
* Admin --> Para saber os privilégios que esse usuário possui em relação à plataforma
* CreatedAt --> Para saber quando esse usuário foi criado

## Rotas

As rotas existentes estão documentadas no Swagger Document. Se quiser saber mais, acesse a rota: `/docs/api-routes`
