const state = {
    question_counter: 1,
    newProject:null,
    Title: '',
    Type: '',
    Questions: [],
}
const getters = {
    currentQuestion(state) {
        return state.question_counter;
    }
}
const mutations = {
    DECREMENT_QUESTION_COUNTER(state) {
        state.question_counter--;
    },
    INCREMENT_QUESTION_COUNTER(state) {
        state.question_counter++;
    },
    SET_TITLE(state, title) {
        state.Title = title;
    },
    SET_TYPE(state, type) {
        state.type = type;
    },
    SET_NEW_PROJECT(state, project) {
        state.newProject = project;
    },
    ADD_QUESTION(state, question) {
        state.Questions.push(question);
    },
    CONVERT_TOJSON(state) {
        console.log(JSON.stringify(state.Questions))
    }
}
const actions = {
    DECREMENT_QUESTION_COUNTER(context) {
        context.commit('DECREMENT_QUESTION_COUNTER');
    },
    INCREMENT_QUESTION_COUNTER(context) {
        context.commit('INCREMENT_QUESTION_COUNTER');
    },
    SET_TITLE(context, title) {
        context.commit('SET_TITLE', title);
    },
    SET_TYPE(context, type) {
        context.commit('SET_TYPE', type);
    },
    SET_NEW_PROJECT(context, project) {
        context.commit('SET_NEW_PROJECT', project);
    },
    ADD_QUESTION(context, question) {
        context.commit('ADD_QUESTION', question);
    },
    CONVERT_TOJSON(context) {
        context.commit('CONVERT_TOJSON')
    }
}
export const newProject = {
    state,
    getters,
    mutations,
    actions
}