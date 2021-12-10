export default{
    namespaced: true,
    state:{
        questionsList:[
            {
                title: "como hacer un stackvoerflow?",
                details: "quiero saber como hacer un stackoverflow para poder completar el reto.",
                creator: 1902309,
                comments:[
                    {
                        title: "respuesta sencilla",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290109,
                        correct: true
                    },
                    {
                        title: "respuesta sencilla 2",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290108,
                        correct: false
                    },
                    {
                        title: "ultima respuesta sencilla",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290107,
                        correct: false
                    }
                ]
            },
            {
                title: "como puedo hacer varias preguntas?",
                details: "quiero saber como hacer un stackoverflow para poder completar el reto.",
                creator: 1902309,
                comments:[
                    {
                        title: "respuesta sencilla",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290109,
                        correct: false
                    },
                    {
                        title: "respuesta sencilla 2",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290108,
                        correct: false
                    },
                    {
                        title: "ultima respuesta sencilla",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290107,
                        correct: true
                    }
                ]
            },
            {
                title: "Ultima pregunta",
                details: "quiero saber como hacer un stackoverflow para poder completar el reto.",
                creator: 1902309,
                comments:[
                    {
                        title: "respuesta sencilla",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290109,
                        correct: false
                    },
                    {
                        title: "respuesta sencilla 2",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290108,
                        correct: true
                    },
                    {
                        title: "ultima respuesta sencilla",
                        details: "para poder desarrollar un stack overflow debes de seguir varios pasos.",
                        creator: 483290107,
                        correct: false
                    }
                ]
            }
        ],
        question:{}
    },
    getters:{
        getQuestion:(state) => {
            return state.question
        },
        getQuestionsList: (state) => {
            return state.questionsList
        }
    },
    mutations:{
        setQuestion(state, q){
            state.question = q
        },
        setQuestionList(state, qList){
            state.questionsList = qList;
        },
        newQuestion(state, question){
            state.questionsList.push(question);
        }
    },
    actions:{
        fetchQuestionsList({commit}){
            

            // commit('setQuestionList', response)
        },
        fetchQuestion({commit}, id){

        },
        addQuestion({commit}, newQuestion){
            commit('newQuestion', newQuestion)
        }
    }
}