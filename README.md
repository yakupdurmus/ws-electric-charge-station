<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/ws-electric-charge-station/cebd0c563141a4cc7d279997b8cb5dd9232d7591/.github/images/favicon512x512-ws-electric-charge-station.png" align="center" alt=":package: ws-electric-charge-station" />
 <h2 align="center">:package: ws-electric-charge-station</h2>
 <p align="center">Rest API example to deploy in Vercel(Typescript, Express. MongoDB)</p>
</p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">being a supporter</a>!</p>

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/hebertcisco/ws-electric-charge-station/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/hebertcisco/ws-electric-charge-station/tree/main)

## Installation

> Clone this repository: `git clone https://github.com/hebertcisco/ws-electric-charge-station`

### Open the directory and install the dependencies

```bash
cd ws-electric-charge-station
npm install
```

## Running the API

> Remember to create an `.env` file and put your database information.
> Or run `npm run prepare:enviroment` to create it.

```bash
npm run prepare:enviroment
```

```sh
npm run dev
```
## Calling the API

### [Get status `/`](https://ws-electric-charge-station.vercel.app/)

```bash
curl --location --request GET 'https://ws-electric-charge-station.vercel.app/'
```

### [Get all product `/product`](https://ws-electric-charge-station.vercel.app/product)

```bash
curl --location --request GET 'https://ws-electric-charge-station.vercel.app/product'
```

### [Get a product `/product/:productId`](https://ws-electric-charge-station.vercel.app/product/a328cbb5-9663-4470-88c2-2ac9cc5c4871)

```bash
curl --location --request GET 'https://ws-electric-charge-station.vercel.app/product/a328cbb5-9663-4470-88c2-2ac9cc5c4871'
```

### Delete a product`/product/:productId`

```bash
curl --location --request DELETE 'https://ws-electric-charge-station.vercel.app/product/a328cbb5-9663-4470-88c2-2ac9cc5c4871'
```

### Update a product `/product/:productId`

```bash
curl --location --request PUT 'https://ws-electric-charge-station.vercel.app/product/a328cbb5-9663-4470-88c2-2ac9cc5c4871' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Apple iPhone 11 (64 GB) (PRODUCT) RED",
    "slug": "Apple-iPhone-11-64-GB-PRODUCT-RED",
    "quantity": 1,
    "image": "https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg",
    "price": "299845",
    "description": "Repudiandae iure animi esse minus dolorem earum et. Eligendi in fugit. Dolor odio est harum veritatis error.",
    "guarantee": "Sem garantia",
    "brand": "Apple",
    "model": "11"
}'
```

### Create a product `/product`

```bash
curl --location --request POST 'https://ws-electric-charge-station.vercel.app/product' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Apple iPhone 11 (64 GB) (PRODUCT) RED",
    "slug": "Apple-iPhone-11-64-GB-PRODUCT-RED",
    "quantity": 1,
    "image": "https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg",
    "price": "299845",
    "description": "Repudiandae iure animi esse minus dolorem earum et. Eligendi in fugit. Dolor odio est harum veritatis error.",
    "guarantee": "Sem garantia",
    "brand": "Apple",
    "model": "11"
}'
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2023 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
