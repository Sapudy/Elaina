let handler = async (m, { conn, args, isAdmin, isROwner, bot }) => {
  if (m.isGroup) {
    if (!(isAdmin || isROwner)) throw 'Perintah ini hanya untuk Admin Group'
  }
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'

  if (!bot) throw 'Aku tidak ada di grup itu :('
  if (!bot.admin) throw 'Aku bukan admin T_T'
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i

module.exports = handler

