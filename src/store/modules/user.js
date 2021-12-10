export default{
    namespaced: true,
    state:{
        token: String,
        user:{}
    },
    getters:{
        getUserInfo:(state) => {
            return state.user
        },
        getToken: (state) => {
            return state.token
        }
    },
    mutations:{
        setUser(state, q){
            state.question = q
        },
        setToken(state, qList){
            state.questionsList = qList;
        },
        newUser(state, newUser){
            state.user = newUser
        }
    },
    actions:{
        fetchUser({commit}, user){
            

            commit('setUserInfo', user)
        },
        fetchToken({commit}, id){
            
        },
        newUser({commit}, newUser){
            


            commit('setUserInfo', newUser)
        }
    }
}