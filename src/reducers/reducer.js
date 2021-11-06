const initState = {
    name: '',
    questions: [],
    originalQuestions: [],
    count: 0,
    isSubmit:false,
    score:0
}

const reducer = (state = initState, action) =>{
    switch (action.type){
        case 'LOGIN':
            return {...state,name: action.payload}
        case "START-EXAM":
            return {...state,questions: action.payload, originalQuestions: action.payload}
        case "NEXT":
            return {...state,count: (state.count + 1)}
        case "PREV":
            return {...state,count: (state.count - 1)}
        case "SUBMIT":
            return {...state,isSubmit: true,count: 0}
        case "INC-SCORE":
            return {...state,score: (state.score + 1)}
        case "DEC-SCORE":
            return {...state,score: (state.score - 1)}

        case "RE-EXAM":
            console.log(state.originalQuestions)
            return {...state,isSubmit: false,
                questions: state.originalQuestions.sort(() => Math.random() - 0.5),
                score: 0}

        default:
            return state
    }
}

export default reducer