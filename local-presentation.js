import {CITY_RESEARCH,POPULAR,OFFICIAL_CURITIBA} from './local-data.js';
import {REGIONALS} from './regional-data.js';
export function localPresentation(kind,item){
 if(kind==='cidades'){const r=CITY_RESEARCH[item.slug];return {title:'Planeje a avaliação em '+item.name,description:r?r.note:'Para consultar uma visita em '+item.name+', informe o bairro, o CEP e o tipo de cobertura. O inventário territorial desta cidade ainda está em revisão.',context:item.name};}
 const p=POPULAR.find(p=>p.name===item.name);
 if(p)return {title:item.name+': informe também o bairro '+p.parent,description:p.note,context:item.name+', '+p.parent+', Curitiba'};
 if(OFFICIAL_CURITIBA.includes(item.name)){const rs=REGIONALS.filter(r=>r.names.includes(item.name));return {title:'Seu imóvel em '+item.name,description:item.name+' integra os bairros oficiais de Curitiba e consta na referência administrativa '+rs.map(r=>r.name).join(' / ')+'. No pedido, diferencie o ponto de infiltração na cobertura de água que chega pela rua e informe o acesso disponível para avaliação.',context:item.name+', Curitiba'};}
 if(item.slug==='vila-zumbi')return {title:'Vila Zumbi: referência em Colombo',description:'Informe Colombo no pedido para a Vila Zumbi. A localização documentada pela Prefeitura evita confusão com bairros da capital; confirme o endereço completo antes de combinar a visita.',context:'Vila Zumbi, Colombo'};
 return {title:'Localize seu pedido em '+item.name,description:'A referência '+item.name+' está preservada no site. Informe cidade, bairro oficial e CEP para distinguir nomes semelhantes e consultar a possibilidade de atendimento. A presença deste cartão não confirma uma filial na localidade.',context:item.name+' (município a confirmar)'};
}