/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '92a133731b',
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

// Other
global.botname = "Killua-Mdོ" //namabot kalian
global.ownername= "ᴹᴿ᭄ KilluaOfcོ ×፝֟͜×" //nama kalian
global.owner = ['6289517185039','6289517185039','6289517185039','6289517185039']
global.ownernomer = "6289517185039" // nomor wa kalian
global.ownernomerr = "+6289517185039" //nmr wa kalian
global.premium = ['6289517185039']
global.packname = '𝙉𝙞𝙘𝙚 𝙏𝙧𝙮 𝙕𝘼𝘼ン'
global.author = '𝙋𝙞𝙯𝙯𝙖𝙖🍕'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
