<template>
  <div class="home">
    <div class="container mt-5">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h2>Questions</h2>
          <div>
            <div class="row">
              <div class="col d-flex justify-content-end">
                <b-button variant="secondary" v-b-modal.askQuestion>Ask Question</b-button>
              </div>
            </div>
            <div class="row mt-3 justify-content-end">
              <div class="col-sm-7 d-flex justify-content-end">
                <input class="form-control " type="search" v-model="filter" placeholder="Search by name" aria-label="Search">
              </div>
              <div class="col-sm-3 d-flex justify-content-end">
                <button class="btn btn-outline-primary" @click="filterByName()">Search</button>
              </div>
            </div>

          </div>

            <b-modal id="askQuestion" header-close-variant="dark" centered hide-footer hide-header>
              <form class="p-4">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail2" class="form-label">Title</label>
                  <input type="email" class="form-control" v-model="newQuestion.title" placeholder="What is your question?">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword2" class="form-label">Details</label>
                  <textarea type="password" class="form-control" v-model="newQuestion.details" placeholder="Your question in detail."></textarea>
                </div>
                <div class="mb-3">
                </div>
                <div class="d-flex justify-content-between">
                  <button type="reset" @click="cancelSigIn()" class="btn btn-danger">cancel</button>
                  <button type="submit" @click="signIn()" class="btn btn-primary">Upload Question</button>
                </div>
              </form>
            </b-modal>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <button type="button" v-for="(question, key) in questions" :key="key" @click="openQuestion(key)" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              {{question.title}}
              <span class="badge bg-primary rounded-pill">anwers: {{question.comments.length}}</span>
            </button>
            <!-- <li class="list-group-item d-flex justify-content-between align-items-center">
              Titulo de la pregunta
              <span class="badge bg-primary rounded-pill">respuestas: 13</span>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

export default {
  name: 'Home',
  components: {
    // questions
  },
  data() {
    return {
      userInfo:{
        userId: null,
        userName:"",
        userEmail: "",
        token:""
      },
      questions:[],
      newQuestion:{
        title:"",
        details:"",
        creator:null,
        comments:[]
      },

      filter:""
    }
  },
  computed:{
    ...mapGetters('questions', ['getQuestionsList', 'getQuestion'])
  },
  mounted() {
    this.loadInfo()
  },
  methods: {
    ...mapMutations('questions',['setQuestion']),
    ...mapActions('questions',['fetchQuestions']),
    async loadInfo(){
      this.questions = await this.getQuestionsList.reverse()
      console.log('%c⧭', 'color: #00a3cc', this.getQuestionsList)
    },
    openQuestion(index){
      this.fetchQuestions()
      var question = this.questions[index];
      this.setQuestion(question);


      console.log('%c⧭', 'color: #aa00ff', this.getQuestion)
      this.$router.push('/about');
    },
    createQuestion(){
      
    },
    filterByName(){
      if(this.filter == ""){
        this.questions = this.getQuestionsList.reverse()
      }else{
        let auxList = this.questions
        this.questions = []
        auxList.forEach(element => {
          console.log('%c⧭', 'color: #733d00', element.title.includes(this.filter));
          if(element.title.includes(this.filter)){
            this.questions.push(element)
          }
        });
      }
    }
  },
}
</script>
