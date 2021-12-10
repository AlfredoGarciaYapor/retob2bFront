<template>
  <div class="home">
    <div class="container mt-5">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h2>{{question.title}}</h2>

          <b-button variant="secondary" v-b-modal.askQuestion>Make new Answer</b-button><!-- v-if="userInfo.userId != null" -->

            <b-modal id="askQuestion" header-close-variant="dark" centered hide-footer hide-header>
              <form class="p-4">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail2" class="form-label">Title</label>
                  <input type="email" class="form-control" v-model="newComment.title" placeholder="What is your answer?">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword2" class="form-label">Details</label>
                  <textarea type="text" class="form-control" v-model="newComment.details" placeholder="Details about your answer"></textarea>
                </div>
                <div class="mb-3">
                </div>
                <div class="d-flex justify-content-between">
                  <button type="reset" @click="cancelComment()" class="btn btn-danger">Cancel</button>
                  <button type="submit" @click="cooment()" class="btn btn-primary">Send Answer</button>
                </div>
              </form>
            </b-modal>
        </div>
        <div class="card-body">
          <p>{{question.details}}</p>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(comment, key) in comments" :key="key">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{comment.title}}</div>
                {{comment.details}}
              </div>
              <span v-if="comment.correct == true" class="badge bg-success rounded-pill">Respuesta Correcta</span>
            </li>
            <!-- <button type="button" v-for="(comment, key) in comments" :key="key" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              {{comment.title}}
              
            </button> -->
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
      comments:[],

      newComment:{
        title:"",
        details:"",
        creator:null,
        correct:false
      },

      question:{
        title:"",
        details:"",
        creator:null,
        comments:[]
      }
    }
  },
  computed:{
    ...mapGetters('questions', ['getQuestionsList', 'getQuestion'])
  },
  mounted() {
    this.question = this.getQuestion
    this.comments = this.question.comments.reverse()
    console.log('%c⧭', 'color: #00a3cc', this.getQuestionsList)
  },
  methods: {
    ...mapMutations('questions',['setQuestion']),
    ...mapActions('questions',['fetchQuestions']),
    openQuestion(index){
      this.fetchQuestions()
      var question = this.questions[index];
      this.setQuestion(question);


      console.log('%c⧭', 'color: #aa00ff', this.getQuestion)
    },
    cancelComment(){

    }
  },
}
</script>

