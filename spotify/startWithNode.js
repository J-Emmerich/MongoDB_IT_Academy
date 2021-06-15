const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const db = "Spotify_New";
const artista = [{"artista_id":1, "Nom": "Michael Jackson", "img_artista_url": "null", "artistas_relacionados": [{"artista_id": 2}]}];
const album = [{"album_id": 1, "artista_id": 1, "titol": "Thriller", "Ano_publicacio": 1980, "img_portada_url": "thriller.png"}];
const cancions = [{"cancion_id": 1, "album_id": 1, "nombre_reproducions": 55555555551245, "Titol": "Billy Jean", "durada_segons": 196}];
const user = [{"user_id":1, "user_email": "example@mail.com", "password": "qwerty123", "nom_d_usuari":"headbanger666", "data_naixment": "06-06-1966", "sexe": "F", "pais": "MX", "codi_postal": "01241524", "playlists": [{"playlist_id": 1}], "favorite_songs": [{"cancion_id": 1}], "favorite_albums": [{"album_id": 1}]}];
const suscripcions = [{"suscripcions_id": 1, "id_user": 1, "data_inici": "27-18-19", "data_renovacio": "12-05-2021", "tipo_pagamento": "tarjeta", "pagaments": [{"ordre_id": 1, "fecha": "24-12-2019", "total": 423.99}], "paypal":{"paypal_id": "null", "nom_usuari": "null"}, "tarjetas_credito":{"id_tarjeta": 1, "numero_tarjeta": 22234343321, "caducitat": "01-02-2027", "codigo_seguretat": 534}}];
const playlists = [{"playlist_id":1, "titol":"Mi Playlist", "nombre_cancions":23, "fecha_creacio": "15-05-2020","estado":"activa", "fecha_eliminada": "29-07-2020", "canciones":[{"cancion_id": 2, "cancion_nom":"Bille Jean","fecha_anadida": "12-02-2020", "user_anadio": 2}]}];
 
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
  
run(artista, "artistas", db);
run(album, "album", db);
run(cancions, "cancions", db);
run(user, "user", db);
run(suscripcions, "suscripcions", db);
run(playlists, "playlists", db);