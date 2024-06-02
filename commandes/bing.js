const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'bing',
    desc: 'To check bing',
    Categorie: 'General',
    reaction: '💫', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('📌 *bing*\n ```' + 2000 + '``` *ms*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*bing!*\n ```' + (end - start) + '``` *ms*')
  }
)
