const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const db = "Nuevo_Youtube_sinAds";
const user = [{"user_id":1,"Nom_d_usuari":"Joao","email":"example@mail.com","password":"1234","data_naixement":"01-01-2099","sexe":"A","pais":"Nigeria","codi_postal":"z001-333","playlists":[{"playlist_id":1}],"Videos":[{"Videos_id":1}]}];
const videos = [ {
    "id_video":1,"Titol":"Monty Python and the Holy Grail",
     "Descripcio":"Amazing",
     "Size":"1",
     "Nom_Arxiu":"The_pirate_bay_monty_python.torrent",
     "Durada":"Demasiado",
      "Thumbnail":"NULL",
       "Num_repetitions":5555111221, 
       "Likes": 12312, "Dislikes":123252,
        "Estado": "Online",
         "Etiquetas":[
             {"tag_id": "2", "tag_nom":"funny"}, 
             {"tag_id": 1, "tag_nom":"oldies"}
            ], 
        "Videos_likes": [
            {"like_id": 1, "last_update": "27-04-2021"}
        ],
             "Comments": [
                 {"User_id": 1,"comment_text":"some troll text",
                 "fecha_creacion": "27-08-2021", 
                 "Comments Likes": [
                     {"tipo":"Dislike", "last_update": "25-09-2020"}
                    ]}
                ]}];
const etiquetas = [{"tag_id":1, "tag_nom":"funny"}, {"tag_id":2, "tag_nom": "oldies"}];
const playlists = [{"playlist_id": 1, "Nom": "Mi Playlist", "fecha_creacion": "05-12-2000", "estado":"activa", "videos":[{"video_id":2}]}];
const canals = [{"canal_id": 1, "nom":"mi canal", "descripcio":"un buen canal", "data_created": "11-01-2000", "videos":[{"video_id":1}]}];    

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

  run(user, "users",db).catch(console.dir);
  run(videos,"videos",db).catch(console.dir);
  run(etiquetas, "etiquetas",db).catch(console.dir);
  run(playlists, "playlists",db).catch(console.dir);
  run(canals, "canals",db).catch(console.dir);


  
  