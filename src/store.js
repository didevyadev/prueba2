import { createStore } from "redux"

let newDate = new Date()
const dia = newDate.getDate()
const mes = newDate.getMonth()+1
const year = newDate.getFullYear()

const baseState = {
    personal: [{
        id:1,
        nombre: "Diego Garcia",
        local: "Talle SV-1",
        fecha: dia + "/" + mes + "/" + year
    }],
    taller: [{
        id:1,
        descri: "FORMATEO BASICO DE LAPTOP X ANTIVIRUS AGOSTO 2021",
        monto: "S/100.00"
    },
    {
        id:2,
        descri: "RESET DE EPSON L210",
        monto: "S/50.00" 
    }]
}

const reducerAdmin = (state = baseState , action) => {
    console.log(action)
    return state
}

export default createStore(reducerAdmin)