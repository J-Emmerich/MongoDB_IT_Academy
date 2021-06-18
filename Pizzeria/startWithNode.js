const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const db = "Nueva_Pizzeria_Mongo";
const restaurants = [{
  "restaurant_id": "1",
  "address":{
    "street":"Marina 254",
    "ZIP": "08041",
    "city": "Barcelona",
    "state": "Barcelona"
  },
  "employees":[{
    "employee_id": "1",
    "name": "Pedro",
    "last_name": "Andrade",
    "NIF": "y6464637e",
    "phone": "555555555",
    "role": "repartidor",
  },{"employee_id": "2",
  "name": "Maic",
  "last_name": "foooo",
  "NIF": "y6488837e",
  "phone": "555555555",
  "role": "repartidor"
  }],
  "Orders": [{

  }]
},{
  "restaurant_id": "2",
  "address": 
  {
    "street": "Fastenrath 66",
    "ZIP": "08041",
    "city": "Madrid",
    "state": "Madrid"
  },
  "employees": [{
    "employee_id": "3",
  "name": "Pau",
  "last_name": "Andrade",
  "NIF": "y622227e",
  "phone": "555555555",
  "role": "cocinero"
  }]
},{
  "restaurant_id": "3",
  "address":{
    "street": "Góngora",
    "ZIP": "08041",
    "city": "Málaga",
    "state": "Málaga"
  },
  "employees": [{
    "employee_id": "3",
  "name": "Pau",
  "last_name": "Andrade",
  "NIF": "y622227e",
  "phone": "555555555",
  "role": "cocinero"
}]
}
];
const clients = [{
  "client_id": "1",
  "name": "Mauri",
  "last_name": "Pari",
  "phone": "666666666",
  "address":{
    "street": "Otro 2224",
    "ZIP": "08041",
    "city": "Madrid",
    "state": "Madrid"
  }
},{
  "client_id": "2",
  "name": "Pedro",
  "last_name": "Sanchez",
  "phone": "666666666",
  "address": {
    "street": "Otro 2224",
    "ZIP": "08041",
    "city": "Madrid",
    "state": "Madrid"
  }
},{
  "client_id": "3",
  "name": "Hendrix",
  "last_name": "Paloosa",
  "phone": "666666666",
  "address":{
    "street":  "Inexistente 5554",
    "ZIP": "08041",
    "city": "Barcelona",
    "state": "Barcelona"
  }
},{
  "client_id": "4",
  "name": "Joaquina",
  "last_name": "Carlota",
  "phone": "666666666",
  "address":{
    "street": "Otro 2224",
    "ZIP": "08041",
    "city": "Madrid",
    "state": "Madrid"
  }
}];
const orders = [{
  "order_id": "1",
  "order_date": "2021-01-20 00:00:01",
  "type": {
    "delivery": true,
    "employee_id": "3",
    "date_delivery": "2021-01-20 00:00:01"    
  },
  "products": [{
    "product_id": "4",
    "qty": "1",
    "price_each": "8.99"
  }, {
    "product_id": "2",
    "qty": "3",
    "price_each": "8.99"
}],
  "total_price": "99.78",
  "cliente_id": "1"
},
{
  "order_id": "2",
  "order_date": "2021-01-20 00:00:01",
  "type": {
    "delivery": false,
  },

  "products": [{
    "product_id": "1",
    "qty": "2",
    "price_each": "8.99"
  }, {
    "product_id": "3",
    "qty": "2",
    "price_each": "8.99",
  },
  {
    "product_id": "1",
    "qty": "1",
  "price_each": "8.99"
}],
  "total_price": "99.78",
  "cliente_id": "2",
  
},{
  "order_id": "3",
  "oder_date": "2021-01-20 00:00:01",
  "type": {
    "delivery": true,
    "employee_id": "2",
    "date_delivery": "2021-01-20 00:00:01"
  },
  "total_price": "99.78",
   "client_id": "1",
  "products":[{
    "product_id": "1",
    "qty": "4",
    "price_each": "8.99"
  }]
},{
  
  "order_id": "4",
  "oder_date": "2021-01-20 00:00:01",
  "type":
  {
  "delivery": true,
  "employee_id": "1",
  "date_delivery": "2021-01-20 00:00:01"
},
  "price_each": "99.78",
  "client_id": "2",
  "products":[{
    "product_id": "2",
    "qty": "1",
  "price_each": "8.99"
}]
  
},{
  
  "order_id": "5",
  "oder_date": "2021-01-20 00:00:01",
  "type":{
    "delivery": false,
    "employee_id": "3"
  },
  "price_each": "99.78",
  "client_id": "1",
  "products":[{
    "product_id": "2",
    "qty": "3",
    "price_each": "8.99"
  },
  {
    "qty": "1",
  "price_each": "8.99",
  "product_id": "1"
}]
},{
  "order_id": "6",
  "oder_date": "2021-01-20 00:00:01",
  "type":{
    "delivery": false,
    "employee_id": "1"
  },
  "price_each": "99.78",
  "client_id": "2",
  "products":[{
    "product_id": "2",
    "qty": "6",
  "price_each": "8.99"
}]
},{
  "order_id": "7",
  "oder_date": "2021-01-20 00:00:01",
  "type":{
    "delivery": false,
    "employee_id": "3"
  },
  "price_each": "99.78",
  "client_id": "1",
  "products":[{
    "qty": "3",
    "price_each": "8.99",
    "product_id": "4"
    
  }]}
];
const products = [{"product_id": "1",
"name": "Coca-Cola",
"type": "Bebida",
"description": "NULL",
"image_url": "NULL",
"price": "3.50"  
},{
"product_id": "2",
"name": "4 quesos",
"Type": "Pizza",
"description": "NULL",
"image_url": "NULL",
"price": "8.00",
"category": "Vegetarianas"

},{
"product_id": "3",
"name": "Margherita",
"Type": "Pizza",
"description": "NULL",
"image_url": "NULL",
"price": "2.50",
"category": "Vegetarianas"

},{

"product_id": "4",
"name": "Con panceta",
"Type": "Hamburgueses",
"description": "NULL",
"image_url": "NULL",
"price": "3.50"
},{

"product_id": "5",
"name": "Peperoni",
"Type": "Pizza",
"description": "NULL",
"image_url": "NULL",
"price": "8.50",
"category": "tradicionales"
},{
"product_id": "6",
"name": "Vegana",
"Type": "Pizza",
"description": "NULL",
"image_url": "NULL",
"price": "13.50",
"category":"Vegana"
}];

    

  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri);
  async function run(collectionData,collectionName,databasename) {
    try {
      await client.connect();
      const database = client.db(databasename);
      const collection = database.collection(collectionName);
      
      // this option prevents additional documents from being inserted if one fails
      const options = { ordered: true };
      const result = await collection.insertMany(collectionData, options);
      console.log(`${result.insertedCount} documents were inserted`);
    } finally {
      await client.close();
    }
  }
  
  run(restaurants, "restaurants", db)
  run(clients, "clients",db)
  run(orders,"orders",db)
  run(products,"products",db)