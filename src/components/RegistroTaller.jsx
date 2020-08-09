import React, {useState} from "react"
import Card from "@material-ui/core/Card";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { connect } from "react-redux"


const RegistroTaller = ({taller, agregarTaller}) =>{

    const [datos, setDatos] = useState({
        descripcion:''
    })
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    
    return (<Card >
        { 
            taller.map( y =>(
                <ListItem button key={ y.id }>
                    <TextField id="standard-textarea" label="Registro de servicio" placeholder="Placeholder" 
                    name="descripcion" onChange={handleInputChange} multiline />
                    <ListItemText primary={y.monto} />
                    <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />} 
                    onClick={()=>agregarTaller(y)}>
                    Save
                    </Button>
                </ListItem>
            ))
        }
        <h1>{datos.descripcion}</h1>
    </Card>)
}

const mapStateToProps = state => ({
    taller: state.taller
})

const mapDispatchToProps = dispatch => ({
    agregarTaller(retaller){
        dispatch({
            type:"AGREGAR_TALLER",
            retaller
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(RegistroTaller)