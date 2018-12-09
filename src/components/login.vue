<template>
    <div>
        <div class="container" style="width: 40%; padding-top:100px; ">
            <form
              id="app"
              v-on:submit.prevent="onSubmit"
              action="/something"
              method="post"
            >
                <div class="textbox">
                    <i class="fas fa-user"></i>
                    <label for="email">Email address</label>
                    <input
                      id="email"
                      v-model.lazy="userName"
                      type="email"
                      name="userName"
                      placeholder="Enter email" 
                      required="true"
                    >
                </div>
                <div class="textbox">
                    <i class="fas fa-lock"></i>
                    <label for="password">Password</label>
                    <input
                      id="password"
                      v-model.lazy="password"
                      type="password"
                      name="password"
                      placeholder="Enter Password" 
                      required="true"
                    >
                </div>
                <div class='btnbox'>
                    <button v-on:click.prevent="signin" class="btn btn-primary">登入</button>
                    <button v-on:click.prevent="signup" class="btn btn-primary">註冊</button>
                </div>
                
            </form>
        </div>
        <!-- <div v-if="submitted" style="width: 100%; text-align: center; margin: 50px;">
            <h3>Thanks for your post</h3>
        </div> -->
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            userName: '',
            password: ''
            // submitted: false
        }
    },
    methods: {
        signin(){

            this.$http.post('http://127.0.0.1:3000/auth/signin', {
              userName: this.userName,
              password: this.password
            })
            .then((res)=> {
                console.log(res);
                localStorage.setItem('token', res.data.message);
                // this.submitted = true;
            })
            .catch((error)=> {
                console.log(error);
            });

        },
        signup(){

            this.$http.post('http://127.0.0.1:3000/auth/signup', {
              userName: this.userName,
              password: this.password
            })
            .then((res)=> {
                console.log(res);
                // this.submitted = true;
            })
            .catch((error)=> {
                console.log(error);
            });

        }
    },
    created() {
        
    },
    mixins: [searchMixin]
}
</script>


<style scoped>
    .textbox{
        width: 100%;
        overflow: hidden;
        font-size: 20px;
        padding: 8px 0;
        margin: 8px 0;
        border-bottom: 1px solid #4caf50;
    }

    .textbox input{
        border: none;
        outline: none;
        background: none;
        font-size: 18px;
        width: 80%;
        margin: 0 10px;
    }

    .textbox i{
        width: 26px;
        text-align: center;
    }

    .btnbox button{
        width: 45%;
        margin: 5px;
    }

</style>