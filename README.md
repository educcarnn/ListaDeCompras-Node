Lista de Compras - API


**Bem-vindo à API de Lista de Compras! Essa API permite criar, visualizar, atualizar e excluir listas de compras.**


```
Tecnologias usadas
Node 
TypeScript
Express
```

Rotas Disponíveis
```
- POST /purchaseList
Cria uma nova lista de compras.
```


JSON
```
{
  "title": "feira",
  "items": [
    {
      "name": "banana",
      "value": "1 cacho"
    },
    {
      "name": "maçã",
      "value": "6 unidades"
    },
    {
      "name": "mamão",
      "value": "1 unidade"
    }
  ]
}
```

```
- GET /purchaseList
Obtém todas as listas de compras.
```


```
- GET /purchaseList/:purchaseListId
Obtém uma lista de compras específica pelo ID.
```

**Parâmetros de URL**

```
purchaseListId (number) - O ID da lista de compras.
```

```
- PUT /purchaseList/:purchaseListId
Atualiza uma lista de compras específica pelo ID.
```

```
Parâmetros de URL
purchaseListId (number) - O ID da lista de compras a ser atualizada.
```

JSON
```
{
  "title": "feira",
  "items": [
    {
      "name": "banana",
      "value": "1 cacho"
    },
    {
      "name": "maçã",
      "value": "6 unidades"
    },
    {
      "name": "mamão",
      "value": "1 unidade"
    }
  ]
}
```

```
DELETE /purchaseList/:purchaseListId
Exclui uma lista de compras específica pelo ID.
```

```
Parâmetros de URL
purchaseListId (number) - O ID da lista de compras a ser excluída.
```

```
Executando o Projeto
Clone o repositório do GitHub.
Instale as dependências usando o comando npm install.
Inicie o servidor usando o comando npm start.
```