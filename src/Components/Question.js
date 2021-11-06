import React,
{Component,
    // useState
} from 'react'
// import {render} from "react-dom";
// import axios from "axios";
import {connect} from "react-redux";
// import Question
class Question extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {/*{this.props.questions &&*/}
                {/*    this.props.questions.length > 0 &&*/}
                {/*    this.props.questions.map(q => (*/}
                {/*    <div key={q._id}>*/}
                {/*        <div>{q.body}</div>*/}
                {/*        <div>{q.answers.map( (ans) => (*/}
                {/*            <div key={ans._id}>*/}
                {/*                <h3>{ans.answer}</h3>*/}
                {/*            </div>)*/}
                {/*        )}</div>*/}
                {/*    </div>)*/}
                {/*)}*/}
            </div>
        )
    }
}
function mapStateToProps (state){
    return {
        name: state.name,
        questions: state.questions,
        count: state.count
    }
}
function mapDispatchToProps(dispatch){
    return {
        decrement: () => dispatch({type:"PREV"}),
        increment: () => dispatch({type:"NEXT"}),
        submit: () => dispatch({type:"SUBMIT"})

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question)