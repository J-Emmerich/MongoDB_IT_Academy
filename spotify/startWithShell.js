db.artista.insert({"artista_id":1, "Nom": "Michael Jackson", "img_artista_url": "null", "artistas_relacionados": [{"artista_id": 2}]})
db.album.insert({"album_id": 1, "artista_id": 1, "titol": "Thriller", "Ano_publicacio": 1980, "img_portada_url": "thriller.png"})
db.cancions.insert({"cancion_id": 1, "album_id": 1, "nombre_reproducions": 55555555551245, "Titol": "Billy Jean", "durada_segons": 196})
db.user.insert({"user_id":1, "user_email": "example@mail.com", "password": "qwerty123", "nom_d_usuari":"headbanger666", "data_naixment": "06-06-1966", "sexe": "F", "pais": "MX", "codi_postal": "01241524", "playlists": [{"playlist_id": 1}], "favorite_songs": [{"cancion_id": 1}], "favorite_albums": [{"album_id": 1}]})
db.