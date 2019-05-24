"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017/"; //neue datenbank erstellt
let databaseName = "Test";
let db; //typ Mongo.Db ist von Mongo bereit gestellt
let students;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://manutest:0987654321@datenbankmanu-cti1q.mongodb.net/Task9";
    databaseName = "Task9";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect); //gibt eine Funktion auf dem clioent die heist connect und die gibt er die url mit. Bedingung wenn du nach 8 sekunden keine antwort kriegst hats nicht geklappt. handle connect
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e); //error wird ausgegeben wenn es nicht geklappt hat
    else {
        console.log("Connected to database!"); //verbunden zur datenbank
        db = _client.db(databaseName); // wir speichern uns die db aus dem client heraus
        students = db.collection("students"); //von der db hätten wir gerne die collection die students heißt. Hier wissen wir dass wir mit der db Verbunden sind
    }
}
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert); //collection students. übergebe das dokument: ein objekt von studenten daten und füge das ein. Wenn du fertig bist ruf bitte handleinsert auf
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    let cursor = students.find(); //rufen students auf mit find also wie db.students.find
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer); //legen einen Cursor an. Ein Zeiger auf alle Sachen die wir gefunden haben. Holt die wichtigen Daten, speichert diese in ein Arry. Rufe prepare answer auf.
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray)); //callback bekommt hier das array aus toArray in Z.49
    }
}
exports.findAll = findAll;
function find(_callback, _input) {
    let cursor = students.find({ matrikel: _input });
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray)); //callback bekommt hier das array aus toArray in Z.49
    }
}
exports.find = find;
//Suchfunktion anpassen 
//# sourceMappingURL=Database.js.map