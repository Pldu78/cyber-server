import mongoose from "mongoose";
export class Database{
    public connection:mongoose.Connection;
    constructor(mongoDB_serv:string) {
        this.connection = mongoose.createConnection(mongoDB_serv);
    }

closeConnection(){
        this.connection?.close();
}
}