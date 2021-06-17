const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.

const clients = [{
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
}];

const suppliers = [
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
];

  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri, {useUnifiedTopology : true} );
client.connect()

  async function run(collectionData,collectionName) {
    try {
      await client.connect();
      const database = client.db("optica");
      const collection = database.collection(collectionName);
      database.dropDatabase()
      // this option prevents additional documents from being inserted if one fails
      const options = { ordered: true };
      const result = await collection.insertMany(collectionData, options);
      console.log(`${result.insertedCount} documents were inserted, in the ${collectionName} collection.`);
    }catch(err){
      let regex = /db already exists with different case/;
      if(regex.test(err.message))
      console.log("Unable to drop database with same name but different case. Error: ", err.message)
    } 
    finally {
      await client.close();
    }
  }
  
  run(clients, "clients")
  run(suppliers, "suppliers")
