import React from "react"
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux"

const Personal = ({personal}) => (
    <div>
        <h1>REGISTRO DE TRABAJOST</h1>
            {
                personal.map( x =>(
                    <Card className="personal" key={ x.id }>
                    <Typography variant="h6" gutterBottom>{ x.nombre }</Typography>
                    <Typography variant="h6" gutterBottom>{ x.local }</Typography>
                    <Typography variant="h6" gutterBottom>{ x.fecha }</Typography>
                    </Card>
                ))
            }
    </div>
)
const mapStateToProps = state => ({
    personal: state.personal
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Personal)