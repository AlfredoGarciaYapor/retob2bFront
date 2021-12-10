<template>
  <div id="app">
    <!-- <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand class="mx-3" href="#">
          <img src="https://bit2bitamericas.com/wp-content/uploads/2021/09/b2b_logo_new.png" width="84" height="32" alt="logo">
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto" align="end">
          <b-nav-item-dropdown right text="Login">
            <b-dropdown-form>

              <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
                <b-form-input id="dropdown-form-email" size="sm" placeholder="email@example.com" ></b-form-input>
              </b-form-group>

              <b-form-group label="Password" label-for="dropdown-form-password">
                <b-form-input id="dropdown-form-password" type="password" size="sm" placeholder="Password" ></b-form-input>
              </b-form-group>

              <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>

              <b-button variant="primary" size="sm">Sign In</b-button>

            </b-dropdown-form>

            <b-dropdown-divider></b-dropdown-divider>

            <b-dropdown-item-button>New around here? Sign up</b-dropdown-item-button>
            <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div> -->
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://bit2bitamericas.com/wp-content/uploads/2021/09/b2b_logo_new.png" width="84" height="32" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <b-navbar-nav>
              <b-nav-item href="/">Home</b-nav-item>
              <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            </b-navbar-nav>
          </ul>
          <div>
            <b-button variant="primary" v-b-modal.sigInModal>Sign in</b-button>

            <b-modal id="sigInModal" header-close-variant="dark" centered hide-footer hide-header>
              <form class="p-4">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
                  <input type="email" class="form-control" v-model="userEmail" placeholder="email@example.com">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                  <input type="password" class="form-control" v-model="userPassword" placeholder="Password">
                </div>
                <div class="mb-3">
                  <p>
                    No account? <a href="#" v-b-modal.sigUpModal>Create one!</a>
                  </p>
                </div>
                <div class="d-flex justify-content-between">
                  <button type="reset" @click="cancelSigIn()" class="btn btn-danger">cancel</button>
                  <button type="submit" @click="signIn()" class="btn btn-primary">Sign in</button>
                </div>
              </form>
            </b-modal>

            <b-modal id="sigUpModal" header-close-variant="dark" centered hide-footer hide-header>
              <form class="p-4">
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
                  <input type="email" class="form-control" v-model="newUserEmail" placeholder="email@example.com">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormEmail2" class="form-label">User Name</label>
                  <input type="text" class="form-control" v-model="newUserName" placeholder="User Name">
                </div>
                <div class="mb-3">
                  <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                  <input type="password" class="form-control" v-model="newUserPassword" placeholder="Password">
                </div>

                <div class="mb-3">
                  <p>
                    Have an account already? <a href="#" v-b-modal.sigInModal @click="cancelSigUp()">Sign in</a>
                  </p>
                </div>
                
                <div class="d-flex justify-content-between">
                  <button type="reset" @click="cancelSigUp()" class="btn btn-danger">cancel</button>
                  <button type="submit" @click="signUp()" class="btn btn-primary">Sign up</button>
                </div>
              </form>
            </b-modal>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

export default {
  data() {
    return {
      showSignIn: false,
      userEmail: "",
      userPassword:"",

      newUserEmail:"",
      newUserPassword:"",
      newUserName:""

    }
  },
  methods: {
    signIn(){
      let userInfo = {
        emial: this.userEmail,
        password: this.userPassword
      }

      this.userEmail = ""
      this.userPassword = ""

      console.log('%c⧭', 'color: #00e600', userInfo)

      this.$bvModal.hide("sigInModal")
    },
    signUp(){
      let newuser = {
        emial: this.newUserEmail,
        password: this.newUserPassword,
        userName: this.newUserName
      }



      this.newUserEmail = ""
      this.newUserPassword = ""
      this.newUserName = ""

      console.log('%c⧭', 'color: #00e600', newuser)

      this.$bvModal.hide("sigInModal")
    },
    cancelSigIn(){
      this.userEmail = ""
      this.userPassword = ""
      console.log('%c⧭', 'color: #ff0000', "canel modal")
      this.$bvModal.hide("sigInModal")
    },
    cancelSigUp(){
      this.newUserEmail = ""
      this.newUserName = ""
      this.newUserPassword = ""
      console.log('%c⧭', 'color: #ff0000', "canel modal")
      this.$bvModal.hide("sigUpModal")
    }
  },
}
</script>


