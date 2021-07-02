<template>
  <v-container>
    <v-row>
      <v-col>
          <h1>Sign up</h1>
        <v-form ref="signUpForm" v-model="formValidtiy">
          <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required>
          </v-text-field>
          <v-autocomplete label="which browser do you use?" :items="browsers">
          </v-autocomplete>
          <v-file-input label="Attach picture"></v-file-input>
          <v-text-field label="Birthday" v-model="birthday" readonly>
          </v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox label="Agree to the terms and conditions" v-model="agreeToTerms" 
            :rules="agreeToTermsRules" required></v-checkbox>
          <v-btn type="submit" color="primary" class="mr-4" :disabled="!formValidtiy">Submit</v-btn>
          <v-btn class="mr-4" color="success" @click="validateForm">Validate Form</v-btn>
           <v-btn color="warning" @click="resetValidation" >Reset Validation</v-btn>
            <v-btn color="error" @click="resetForm" >Reset </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default{
    data: () => ({
        birthday:'',
        browsers: ['Chrome','Firefox','Safari'],
        agreeToTerms: false,
        agreeToTermsRules: [
            value => !!value || 'You must agree to terms'
        ],
        email: '',
        emailRules : [
            value => !! value || 'Email is required',
            value => value.indexOf('@') !== 0 || 'Username must be there',
            value => value.includes('@')  || 'Where is your @ ?'
        ],
        formValidtiy: false
    }),
     methods:{
        resetValidation(){
            this.$refs.signUpForm.resetValidation()
        },
      resetForm(){
            this.$refs.signUpForm.reset()
        },
      validateForm(){
            this.$refs.signUpForm.validate()
        },
        }
}
</script>
