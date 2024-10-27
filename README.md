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
* jsonwebtoken --> Criação de tokens para autenticação de usuário
* bcrypt --> Criptografia das senhas dos usuários

Para instalação dessas dependencias, utilize o comando: `npm i <nome-da-dependencia>`

##### De desenvolvimento

* Nodemon --> Para atualização automática do código durante desenvolvimento

Para instalação dessas dependencias, utilize o comando: `npm i -D <nome-da-dependencia>`

## Extensões

### Thunder Client

Abra o editor de código que você tem baixado e, na aba de extensões, pesquise pela extensão Thunder Client.

Instale ela.

## Objendo o programa

Obtendo o program

Clique no botão verde escrito `<> Code`.

Se você quiser instalar o arquivo .zip, clique na opção Download ZIP. Após isso, descompacte o arquivo .zip baixado no lugar de sua escolha.

Caso tenha optado por baixar via `git clone`, copie o link https do programa --> `https://github.com/Pedrohenr1qq/pizzeria-API.git`.

Abra um terminal ou prompt de comando.

Vá para o diretório onde deseja baixar o programa e digite o seguinte comando:

```
git clone https://github.com/Pedrohenr1qq/pizzeria-API.git 
```

Verifique se o programa foi baixado corretamente. Caso sim, você pode seguir com a explicação abaixo.


## Como usar o programa

Feita a instalação do programa, entre no mesmo diretório principal, abra um terminal e digite o comando: `npm run dev`

Aparacerá o IP em que o servidor irá rodar, sendo ele: *http://localhost:3000/*

Você pode usar a extensão citada anteriormente, Thunder Client, para testar as rotas da API ou acessar a documentação das rotas feita com swagger, na parte de [rotas](#rotas).


## Componentes

### User

O User representa o usuário que irá requisitar os serviços da pizaria. O usuário possui os seguintes atributos:

* name      --> Nome do usuário na plataforma
* email     --> Para que o usuário consiga logar na plataforma
* password  --> Para que o usuário consiga logar na plataforma
* addresses --> Para saber para onde o pedido deve ser entregue
  * street:     --> Rua do endereço do usuário
  * number:     --> Número da casa do usuário
  * complement: --> Complemento do endereço do usuário, caso possua
  * CEP:        --> CEP do endereço do usuário,
  * createdAt:  --> Quando o endereço foi criado
* admin     --> Para saber os privilégios que esse usuário possui em relação à plataforma
* createdAt --> Para saber quando esse usuário foi criado

### Category

A Category representa a categoria que um produto pode fazer parte, sendo apenas uma por produto. Seus atributos são:

* name      --> Nome da categoria
* createdAt --> Para saber quando essa categoria foi criada

### Product

O Product representa o produto oferecido pela pizzaria. Seus atributos são:

* name        --> Nome do produto
* description --> Descrição a cerca do produto
* size        --> Tamanho do produto (Big, small para pizzas ou 1L, 2L para bebidas)
* unitPrice   --> Preço unitário do produto
* image       --> Imagem do produto
* category    --> A categoria a qual o produto pertence

  * _id       --> Id da categoria no DB
  * createdAt --> Quando essa categoria foi vinculada ao produto
* createdAt   --> Quando essse produto foi criado

### Order

O Order representa o pedido feito pelo usuário. Seus atributos são:

* products   --> Array de objetos com os produtos que o usuário pediu. Cada objeto é um pedido
  * _id      --> Id do produto que o usuário pediu
  * quantity --> Quantidade do produto que o usuário pediu
* totalPrice --> Valor total do pedido
* freight    --> Valor do frete do pedido
* userId     --> Id do usuário que fez o pedido
* completed  --> Status do pedido
* createdAt  --> Quanto o pedido foi criado

## Rotas

As rotas existentes estão documentadas no Swagger Document. Se quiser saber mais, acesse a rota: `/docs/api-routes`

## Testes

É possível realizar testes unitários para verificar se as rotas estão funcionando. Para isso, utilize o comando `npm run test-<nome-do-componente>`. Os componentes são: **user**, **category**, **product**, **order**.

Por exemplo: Para testar a rota dos produtos, utilize o comando `npm run test-product`
