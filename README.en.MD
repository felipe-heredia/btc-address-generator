# Bitcoin address generator

[Ler em português](https://github.com/felipesuri/btc-address-generator/blob/main/README.MD)

This project is a simple bitcoin address generator.

It does not generate an address on the blackchain. This project is only for didactic purposes to learn how addresses are generated.

## How to generate address

```bash
  # Fork this projeto
  git clone https://github.com/felipesuri/btc-address-generator.git

  # Install dependencies
  cd btc-address-generator && yarn

  # Start project
  yarn start

  # The generated data will then be returned to the console.
```

```bash
# Application return:

Sua chave privada é: 6098f34634d869625775a318a09b159dea03bf0d9d771a8bca06f7b711e2f3a2
Sua WIF é: 5JYq2vjP5wrRQNLVxHEVKjE5mEVJKYkhZbrCkvAygxBpM7NWXxk
Sua chave pública é: 049899a6e77bd801e703e42f3c4ca6a8ed5a775ac8765b0328c399983b8e6b14eab1a010c44601a5556abe39b5e7ddd72459e35766ab56bedc8dbe53bb15e38d52
O endereço de sua carteira é: 1LvD21kRCzGxLFtu7EgFqsFBZtddWtCim8
```

If you want to know if that data is really data that could be used on the blockchain, [click here](www.bitaddress.org), go to "Wallet details" and put the private key in the requested field.
