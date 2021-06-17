
let db = connect('localhost:27017/optica');

print('**********DROP DATABASE**********')

db.dropDatabase()

print('**********Insert documents into clients collection**********')

db.clients.insertMany([{
  "Client_id": "1",
  "Name": "Linguado",
  "Last Name": "Macalé",
  "Address": {
    "Street": "Góngora",
    "Number": "67",
    "Floor": "1",
    "Door": "1",
    "City": "Barcelona",
    "ZIP": "08035",
    "Country": "ES"
  },
  "Phone": "3232323434",
  "Email": "rafaelito@email.com",
  "Reg_date": "2021-06-13 12:26:48",
  "Referred_from": "null",
  "Employee" : {
    'emp_name': "Justine",
    "emp_id": 32
  },
  "Glasses": {
    '_id' : 1
  }
},{
  
  "Client_id": "2",
  "Name": "Rafael",
  "Last Name": "Mistura",
  "Address":{
    "Street": "Medeiros",
    "Number": "67",
    "Floor": "1",
    "Door": "1",
    "City": "Barcelona",
    "ZIP": "08065",
    "Country": "ES"
  },
  "Phone": "33250987",
  "Email": "rafaelito@email.com",
  "Reg_date": "2021-06-13 12:26:48",
  "Referred_from": 1,
  "Employee": {
    "emp_name": "Charles Mingus",
    "emp_id": 32
  },
  "Glasses": {
    '_id': 5
    }
  },
  {
  
  "Cliente_id": "3",
  "Name": "Pizzara",
  "Last Name": "Parangolé",
  "Address":{
    "Street": "Juliao",
    "Number": "67",
    "Floor": "1",
    "Door": "1",
    "City": "Barcelona",
    "ZIP": "08024",
    "Country": "ES"
  },
  "Phone": "9995554432",
  "Email": "macanuda@email.com",
  "Reg_date": "2021-06-13 12:26:48",
  "Referred_from": 2,
  "Employee": {
    "emp_name": "Miles Davis",
    "emp_id": 21
  },
  "Glasses": {
    '_id': 17
    }
}])

print('**********Insert documents into supplier collection**********')

db.supplier.insertMany([
  {
    
    "Supplier_id": "1",
    "NIF": "y44434567e",
    "Name": "Joao",
    "Phone": "88876578",
    "Fax": "NULL",
    "Address": {
      "Street": "Marina",
      "Number": "67",
      "Floor": "1",
      "Door": "1",
      "City": "Barcelona",
      "ZIP": "08034",
      "Country": "ES"
    },
    "Glasses": [
      {"Glasses_id": "1",
      "Brand": "Bamba",
      "degree_right": "-0.25",
      "degree_left": "0.6",
      "frame": "azul",
      "frame_color": "green-grass",
      "color_glass":{
        "left": "blue-moon",
        "right": "Crinson"
      },  
      "price": "76.89",
      },
      {
      "Glasses_id": "2",
  "Brand": "Bamba",
  "degree_right": "2.25",
  "degree_left": "-0.6",
  "frame": "pasta",
  "frame_color": "blanca",
  "color_glass":{
    "left": "blue-moon",
    "right": "Crinson"
  },
  "price": "143.89",
      }
    ]
  },
  {
    
    "Supplier_id": "2",
    "NIF": "X8882332f",
    "Name": "Pamplona",
    "Phone": "2376578",
    "Fax": "null",
    "Address": {
      "Street": "Fastenrath",
      "Number": "67",
      "Floor": "1",
      "Door": "1",
      "City": "Barcelona",
      "ZIP": "08044",
      "Country": "ES"
    },
    "Glasses": [
      { "Glasses_id": "3",
      "Brand": "Bacon",
      "degree_right": "-0.25",
      "degree_left": "2.6",
      "frame": "especial",
      "frame_color": "blanca",
      "color_glass":{
        "left": "blue-moon",
        "right": "Crinson"
      },
      "price": "444.89",
      "Proveidor_ID": "1"},
      
      {"Glasses_id": "5",
      "Brand": "Merchan",
      "degree_right": "-0.25",
      "degree_left": "0.6",
      "color_dreta": "azul",
      "color_esquerra": "azul",
      "frame": "standard",
      "frame_color": "blanca",
      "color_glass":{
        "left": "pink",
        "right": "gold"
      },
      "price": "176.66"},
    ]
  }
])

print('**********END OF FILE**********')