import React,
    {Component,
        // useState
    } from 'react'
// import {render} from "react-dom";
import axios from "axios";
import {connect} from "react-redux";

class From extends Component{
    constructor(props) {
        super(props);

        this.doSubmit = this.doSubmit.bind(this)
    }

    doSubmit = async (event) => {
        event.preventDefault()
        var nameValue = event.target.name.value
        if(nameValue){

            axios.post('http://localhost:3000', {name: nameValue})
                .then( async res => {
                    if(res.status === 200){
                        await this.props.startExam(res.data)
                        await this.props.login(nameValue)
                    }

                }).catch(err =>{
                    console.log(err)
                 })
        }else {
            alert("Please fill name")
        }
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <form onSubmit={this.doSubmit}>
                        <input name="name" type="text"
                               className="fadeIn second" placeholder="Name"
                               required />
                        <input type="submit" className="fadeIn fourth" value="Start exam" />
                    </form>
                </div>
            </div>
        )
    }


}
function mapStateToProps (state){
    return {
        name: state.name
    }
}
function mapDispatchToProps(dispatch){
    return {
        login: (value) => dispatch({type: "LOGIN", payload: value}),
        startExam: (value) => dispatch({type: "START-EXAM", payload: value}),
        // doChange: (value) => dispatch({type: "doChange", payload: value}),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(From)