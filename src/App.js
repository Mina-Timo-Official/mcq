import {connect} from 'react-redux'
import {Component} from "react";
import RegisterForm from "./Components/RegisterForm"
import Exam from './Components/Exam'
import Score from './Components/Score'

class App extends Component {

    render() {
        return (
            <div className="App">
                {(!this.props.name) && <RegisterForm />}
                {(this.props.name && !this.props.isSubmit) && <Exam />}
                {(this.props.isSubmit) && <Score />}
            </div>
        );
    }
}

function mapSateToProps(state) {
    return {
        name: state.name,
        isSubmit: state.isSubmit
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         login: () => dispatch({type: "login"})
//     }
// }

export default connect(mapSateToProps)(App);
