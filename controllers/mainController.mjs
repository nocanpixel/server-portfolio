import { Client } from "../models/Clients.mjs";
import { Like } from "../models/Like.mjs";
class mainController {
    async registerClient(req, res) {
        const client = await Client.findOrCreate({
            where: { address: req.ip },
            defaults: { address: req.ip },
        })

        const clientLikes = await Like.findOne({where: {clientId: client[0].dataValues.id}, attributes: ['like']})

        const amount = await Like.count();

        res.json({
            message: {newRecord: client[0]['_options'].isNewRecord,register:clientLikes?JSON.parse(clientLikes.dataValues.like):false,amount: amount},
            status: res.statusCode,
        })
    }

    async like(req, res){
        const { like } = req.body;
        const clientId = await Client.findOrCreate({where: { address: req.ip}, attributes: ['id']});

        const sendLike = await Like.findOrCreate({
            where: { clientId: clientId[0].dataValues.id},
            defaults: { like: like, clientId: clientId[0].dataValues.id }
        });

        res.json({
            message: {newRecord: sendLike[0]['_options'].isNewRecord},
            status: res.statusCode,
        })
    }
  }  

  export default mainController;