let fs = require('fs')
let handler = async (m) => {
let menu = fs.readFileSync('./mp3/DJ+LITERASI+DEMONS.mp3')
conn.sendFile(m.chat, menu, '', '', m, true)
}

handler.customPrefix = /^(menu|bot|p|musik)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
