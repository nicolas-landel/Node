<template>
    <div>
      <h1>Démonstration pour la présentation</h1>
        <h4>Register</h4>
        <div id="form-registration">
          <input
              type="email"
              name="email"
              v-model="email"
              placeholder="youremail@hotmail.com"
          />
          <br>
          <input
              type="password"
              name="password"
              v-model="password"
              placeholder="password"
          />
          <br>
        </div>
        <button
            @click="register"
            >Register</button>

    </div>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      var form = document.getElementById('form-registration')
      form.textContent = 'Thank you for your registration'
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
