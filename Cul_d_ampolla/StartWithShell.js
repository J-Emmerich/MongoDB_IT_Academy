conn = new Mongo()
db.getMongo()
/*
db.clientes.insertMany([{
    "Cliente_id": "1",
  "Nom": "Linguado",
  "Cognoms": "Macalé",
  "Telefon": "3232323434",
  "Email": "rafaelito@email.com",
  "fecha_registre": "2021-06-13 12:26:48",
  "Adressa": {
    "Carrer": "Góngora",
    "Numero": "67",
    "Piso": "1",
    "Porta": "1",
    "Ciutat": "Barcelona",
    "Codigo_Postal": "08035",
    "Pais": "ES"
  }

},{
  
  "Cliente_id": "2",
  "Nom": "Rafael",
  "Cognoms": "Mistura",
  "Telefon": "33250987",
  "Email": "rafaelito@email.com",
  "fecha_registre": "2021-06-13 12:26:48",
  "Adressa":{
    "Carrer": "Medeiros",
  "Numero": "67",
  "Piso": "1",
  "Porta": "1",
  "Ciutat": "Barcelona",
  "Codigo_Postal": "08065",
  "Pais": "ES"
  }
},{
  
  "Cliente_id": "3",
  "Nom": "Pizzara",
  "Cognoms": "Parangolé",
  "Telefon": "9995554432",
  "Email": "macanuda@email.com",
  "fecha_registre": "2021-06-13 12:26:48",
  "Adressa":{
    "Carrer": "Juliao",
    "Numero": "67",
    "Piso": "1",
    "Porta": "1",
    "Ciutat": "Barcelona",
    "Codigo_Postal": "08024",
    "Pais": "ES"
  }
}])
db.comandes.insertMany([{
 
  "Comande_ID": "1",
  "Total": "22.54",
  "Cliente_id": "1",
  "fecha_compra": "2020-05-05 00:00:01",
  "Empleado":{
    "Nom": "Cannonball Adderley"
  },
  "Ulleres_id": "3"
  
},{
  
  "Comande_ID": "2",
  "Total": "2322.34",
  "Cliente_id": "3",
  "fecha_compra": "2020-08-01 00:00:01",
  "Empleado":{"Nom": "Miles Davis"},
  "Ulleres_id": "2"
},{
  
  "Comande_ID": "3",
  "Total": "2322.34",
  "Cliente_id": "2",
  "fecha_compra": "2020-04-10 00:00:01",
  "Empleado":{ "Nom": "Coltrane"},
  "Ulleres_id": "1"
},{
  
  "Comande_ID": "4",
  "Total": "2322.34",
  "Cliente_id": "2",
  "fecha_compra": "2020-10-10 00:00:01",
  "Empleado":{ "Nom": "Coltrane"},
  "Ulleres_id": "1"
},{
  
  "Comande_ID": "5",
  "Total": "2322.34",
  "Cliente_id": "3",
  "fecha_compra": "2021-01-12 00:00:01",
  "Empleado":{
    "Nom": "Charles Mingus"
  },
  "Ulleres_id": "5"
},{
 
  "Comande_ID": "6",
  "Total": "2322.34",
  "Cliente_id": "2",
  "fecha_compra": "2020-04-21 00:00:01",
  "Empleado":{
    "Nom": "Charles Mingus"
  },
  "Ulleres_id": "4"
},{
 
  "Comande_ID": "7",
  "Total": "2322.34",
  "Cliente_id": "3",
  "fecha_compra": "2020-03-24 00:00:01",
  "Empleado":{
    "Nom": "Charles Mingus"
  },
  "Ulleres_id": "4"
},{
  "Comande_ID": "8",
  "Total": "2322.34",
  "Cliente_id": "1",
  "fecha_compra": "2021-06-05 00:00:01",
  "Empleado":{
        "Nom": "Charles Mingus"
  },
  "Ulleres_id": "4"
}])
db.proveidor.insertMany([
  {
     
      "Proveidor_ID": "1",
      "NIF": "y44434567e",
      "Nom": "Joao",
      "Telefon": "88876578",
      "Fax": "NULL",
      "Adressa": {
          "Carrer": "Marina",
          "Numero": "67",
          "Piso": "1",
          "Porta": "1",
          "Ciutat": "Barcelona",
          "Codigo_Postal": "08034",
          "Pais": "ES"
      }
  },
  {
      
      "Proveidor_ID": "2",
      "NIF": "X8882332f",
      "Nom": "Pamplona",
      "Telefon": "2376578",
      "Fax": "NULL",
      "Adressa": {
          "Carrer": "Fastenrath",
          "Numero": "67",
          "Piso": "1",
          "Porta": "1",
          "Ciutat": "Barcelona",
          "Codigo_Postal": "08044",
          "Pais": "ES"
      }
  }
])
db.ulleres.insertMany([{
  
  "Ulleres_id": "1",
  "Marca": "Bamba",
  "graduació_dreta": "-0.25",
  "graduació_esquerra": "0.6",
  "color_dreta": "azul",
  "color_esquerra": "azul",
  "muntura": "standard",
  "color_muntura": "blanca",
  "precio": "76.89",
  "Proveidor_ID": "1"
},{
  
  "Ulleres_id": "2",
  "Marca": "Bamba",
  "graduació_dreta": "2.25",
  "graduació_esquerra": "-0.6",
  "color_dreta": "azul",
  "color_esquerra": "azul",
  "muntura": "standard",
  "color_muntura": "blanca",
  "precio": "143.89",
  "Proveidor_ID": "1"
},{
  
  "Ulleres_id": "3",
  "Marca": "Bacon",
  "graduació_dreta": "-0.25",
  "graduació_esquerra": "2.6",
  "color_dreta": "azul",
  "color_esquerra": "azul",
  "muntura": "especial",
  "color_muntura": "blanca",
  "precio": "444.89",
  "Proveidor_ID": "1"
},{
    "Ulleres_id": "4",
  "Marca": "Merchan",
  "graduació_dreta": "-0.25",
  "graduació_esquerra": "0.6",
  "color_dreta": "azul",
  "color_esquerra": "azul",
  "muntura": "standard",
  "color_muntura": "blanca",
  "precio": "176.66",
  "Proveidor_ID": "2"
},{
  "Ulleres_id": "5",
  "Marca": "Merchan",
  "graduació_dreta": "-0.25",
  "graduació_esquerra": "0.6",
  "color_dreta": "azul",
  "color_esquerra": "azul",
  "muntura": "standard",
  "color_muntura": "blanca",
  "precio": "176.66",
  "Proveidor_ID": "1"
},{
  "Ulleres_id": "6",
  "Marca": "Miriade",
  "graduació_dreta": "-0.25",
  "graduació_esquerra": "0.6",
  "color_dreta": "azul",
  "color_esquerra": "azul",
  "muntura": "standard",
  "color_muntura": "blanca",
  "precio": "323.66",
  "Proveidor_ID": "2"
},{
  "Cliente_id": "1",
  "Nom": "Linguado",
  "Cognoms": "Macalé",
  "Telefon": "3232323434",
  "Email": "rafaelito@email.com",
  "fecha_registre": "2021-06-13 12:26:48",
  "Adressa_id": "3"
},{
  "Cliente_id": "2",
  "Nom": "Rafael",
  "Cognoms": "Mistura",
  "Telefon": "33250987",
  "Email": "rafaelito@email.com",
  "fecha_registre": "2021-06-13 12:26:48",
  "Adressa_id": "2"
},{
  "Cliente_id": "3",
  "Nom": "Pizzara",
  "Cognoms": "Parangolé",
  "Telefon": "9995554432",
  "Email": "macanuda@email.com",
  "fecha_registre": "2021-06-13 12:26:48",
  "Adressa_id": "2"
}])

*/