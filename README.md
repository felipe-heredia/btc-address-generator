# Gerador de endereços bitcoin

[Read in english](https://github.com/felipesuri/btc-address-generator/blob/main/README.en.MD)

Este é um simples gerador de endereços bitcoin.

Ele não gera um endereço no blackchain. Este projeto é apenas para fins didáticos para aprender como são gerados endereços.

## Como gerar endereços

```bash
  # Clone o projeto
  git clone https://github.com/felipesuri/btc-address-generator.git

  # Instale as dependência
  cd btc-address-generator && yarn

  # Inicie o projeto
  yarn start

  # Assim será retornado no console os dados gerados.
```

```bash
# Retorno da aplicação ao dar yarn start:

Sua chave privada é: 6098f34634d869625775a318a09b159dea03bf0d9d771a8bca06f7b711e2f3a2
Sua WIF é: 5JYq2vjP5wrRQNLVxHEVKjE5mEVJKYkhZbrCkvAygxBpM7NWXxk
Sua chave pública é: 049899a6e77bd801e703e42f3c4ca6a8ed5a775ac8765b0328c399983b8e6b14eab1a010c44601a5556abe39b5e7ddd72459e35766ab56bedc8dbe53bb15e38d52
O endereço de sua carteira é: 1LvD21kRCzGxLFtu7EgFqsFBZtddWtCim8
```

Se quiser saber se aqueles dados são realmente dados que poderiam ser utilizados no blockchain, [clique aqui](www.bitaddress.org), vá em "Wallet details" e coloque a chave privada no campo solicitado.
