let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Rangga
║│➸ ```UMUR``` : 13thn
║│➸ ```ASAL``` : TAMBUN SELATAN
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/DcIcuTKGWSm1pxBVc9pgvR
║│➸ ```ISTAGRAM``` : http://instagram.com/rangga_botz
║│➸ ```WHATSAPP``` : http://wa.me/6285779150501
╰────────❉
`.trim(), m)
}

handler.help = ['inforangga']
handler.tags = ['main', 'utama']
handler.command = /^(inforangga|inforozi)$/i

handler.exp = 150

module.exports = handler
