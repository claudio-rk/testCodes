//Variáveis -------------
const selecoes =  ["FWC", "QAT", "ECU", "SEN", "NED", "ENG", "IRN", "USA",
            "WAL", "ARG", "KSA", "MEX", "POL", "FRA", "AUS", "DEN", 
            "TUN", "ESP", "CRC", "GER", "JPN", "BEL", "CAN", "MAR", 
            "CRO", "BRA", "SRB", "SUI", "CMR", "POR", "GHA", "URU", "KOR"]

const grupoCromos =    [[0,3,19,20,22,29], //FWC
            [7,8,11], //QAT
            [2,9,13,14,17,19], //ECU
            [3,15], //SEN
            [3,9,10,12,16], //NED
            [7,8,15,18], //ENG
            [5,9,16,17], //IRN 
            [3,5,12,13,14,17,19], //USA
            [19], //WAL
            [3,6,7], //ARG
            [3], //KSA
            [5,6,8,15], //MEX
            [], //POL
            [1,4,10,12,16,17], //FRA
            [2,3,12,13,16,19,20], //AUS
            [4,15,16], //DEN
            [1,8,10,13], //TUN
            [4,5,7,11,15,16,17], //ESP
            [3,4,14,15,19], //CRC
            [1,10,16,17,18,19], //GER
            [5,20], //JPN
            [12,18], //BEL
            [2,5,15,19], //CAN
            [3,9,10], //MAR
            [13,19], //CRO
            [10,11,12,16,17], //BRA
            [8,10,14,19,20], //SRB
            [1,2,4,7,8,13,15,16,20], //SUI
            [14,17], //CMR
            [5,16,19,20], //POR
            [1,6,10,15], //GHA
            [4,7,12,13], //URU
            [12,14,15,16,18,19]  //KOR
        ] 

let sel = false
let sticker = false
let pos = 0

//Funções ---------------
function verificarPais (selecao){

    for (pos=0; pos < selecoes.length; pos++){
        
        if (selecao == selecoes[pos]){
            sel = true
            pos = pos
            return sel
        }

    }

}

function verificarCromo (cromo){

map1 = grupoCromos[pos].map(x => x*1)

    for (i=0 ; i < map1.length; i++){
        if (cromo == map1[i]){
            sticker = true
            return sticker
        }
    }

}

//Execução --------------
abrevSelecao = "DEN"
numCromo = 19

verificarPais (abrevSelecao)

if (sel){

    verificarCromo (numCromo)
    console.log("Essa seleção está na Copa!")
    console.log("")
    console.log("Você quer trocar figurinhas do",selecoes[pos])
    console.log("")
    console.log("As figurinhas desta seleção que eu tenho são:",grupoCromos[pos])
    console.log("")
    console.log("Você ofereceu a figurinha:",selecoes[pos],numCromo)
    console.log("")

    if (sticker){ 
        console.log("Essa figurinha é repetida, infelizmente.")
    } else {
        console.log("PODEMOS TROCAR! Eu ainda não tenho essa figurinha!")
    }
    

}else {
    console.log("Essa seleção não está na Copa 2022")
}