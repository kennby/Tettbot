import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { setting_JSON, mess_JSON } from 'maleficent-bot/setup.js';
global.mess = mess_JSON;
global.setting = setting_JSON;
let l1 = '¡Espera...'
let l2 = 'Espera un momento...'
let l3 = 'Espera...'
let l4 = '¡Agárrate...'
let load = [ mess.wait, l1, l2, l3, l4 ]
let ran = Math.floor(Math.random() * load.length);
global.loading = load[ran];
global.java = '⭔'
global.javi = '⬣'
global.star = '✨'
// untuk owner limit akan tetap di kenakan fitur .addlimit dan lainya biar ga lupa ajah 
global.logolimit = '🐽'
global.imgload = 'https://qu.ax/MiAx.jpeg'
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.greenBright("Updated other.js"))
  import(`${file}?update=${Date.now()}`)
})
