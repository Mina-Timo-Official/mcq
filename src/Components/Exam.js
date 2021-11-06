import React, {Component} from 'react'
import {connect} from "react-redux";

class Exam extends Component{
    constructor(props) {
        super(props);
    }
    selected (ans, id, e) {
        var correct_answer = ans.filter(a => a.correct);
        var correct_id = correct_answer[0]._id
        if (ans.selectedId !== id) {
            ans.map(async a => {
                if (a._id === id) {
                    if (a.correct) {
                        await this.props.incScore(null)
                    } else {
                        if (correct_id === ans.selectedId) {
                            await this.props.decScore(null)
                        }
                    }
                }
                (a._id === id) ? a.selected=true : a.selected=false
                // document.getElementsByClassName(a._id).style.background = 'aquamarine';
            })
            ans.selectedId = id
        }
    }


    render() {
        return (
            <div className="exam wrapper fadeInDown">
                <h1>{this.props.questions[this.props.count].body}</h1>
                <div className="answers">
                    {this.props.questions[this.props.count].answers.map( ans => (
                        <button key={ans._id} id={ans._id}
                                style={{background: ans.selected ? 'aquamarine': null}}
                                onClick={() =>
                                        this.selected(this.props.questions[this.props.count].answers,
                                            ans._id, this)}>
                            {ans.answer}
                        </button>
                    ))}
                </div>
                <hr/>

                {this.props.count > 0 && <button onClick={() => this.props.decrement()}>Prev</button>}

                {this.props.count < 4  && <button onClick={() => this.props.increment()}>Next</button>}

                {this.props.count === 4  && <button onClick={() => this.props.submit()}>Submit</button>}
            </div>
        )
    }
}
function mapStateToProps (state){
    return {
        name: state.name,
        questions: state.questions,
        count: state.count,
        score: state.score
    }
}
function mapDispatchToProps(dispatch){
    return {
        decrement: () => dispatch({type:"PREV"}),
        increment: () => dispatch({type:"NEXT"}),
        submit: () => dispatch({type:"SUBMIT"}),
        incScore: (e) => dispatch({type:"INC-SCORE"}),
        decScore: (e) => dispatch({type:"DEC-SCORE"})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exam)