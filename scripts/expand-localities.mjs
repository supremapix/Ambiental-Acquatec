import fs from 'node:fs';
import {ALL_NEIGHBORHOODS} from '../site-data.js';
import {OFFICIAL_CURITIBA,POPULAR,slugify} from '../local-data.js';
const additions=[...OFFICIAL_CURITIBA,...POPULAR.map(n=>n.name)].filter(name=>!ALL_NEIGHBORHOODS.some(n=>n.name===name)).map(name=>({name,slug:slugify(name)}));
let s=fs.readFileSync('site-data.js','utf8');
s=s.replace('export const ALL_NEIGHBORHOODS = '+JSON.stringify(ALL_NEIGHBORHOODS,null,2)+';', 'export const ALL_NEIGHBORHOODS = '+JSON.stringify([...ALL_NEIGHBORHOODS,...additions],null,2)+';');
fs.writeFileSync('site-data.js',s);
console.log({official:OFFICIAL_CURITIBA.length,added:additions.length,total:ALL_NEIGHBORHOODS.length+additions.length});
