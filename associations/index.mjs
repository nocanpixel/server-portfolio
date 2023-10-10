import { Client } from "../models/Clients.mjs";
import { Like } from "../models/Like.mjs";


Client.hasOne(Like);
Like.belongsTo(Client);