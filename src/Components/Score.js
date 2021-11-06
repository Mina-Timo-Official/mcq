import React, {Component} from 'react'

import {connect} from "react-redux";


class Score extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="wrapper fadeInDown">
                <h1>{this.props.name}</h1>
                <h4>{this.props.score} / 5</h4>
                <button onClick={() => this.props.re_exam()}>Re-Exam</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        score: state.score
    }
}

function mapDispatchToProps(dispatch) {
    return {
        re_exam: () => dispatch({type: "RE-EXAM"}),
        // increment: () => dispatch({type:"INCREMENT"}),
        // submit: () => dispatch({type:"SUBMIT"})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)