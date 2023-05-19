<template>
    <div>
        <div id="login">
        <h1>로그인</h1>
        <div class="form-inputs">
            <label for="username">아이디</label>
            <input type="text" id="username" name="username" v-model="input.username" placeholder="아이디" />
        </div>
        <div class="form-inputs">
            <label for="password">비밀번호</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="비밀번호" />
        </div>
        <button id = "loginbtn" type="button" v-on:click="login()">로그인</button>
    </div>

    <div id="register">
        <h1>회원가입</h1>
        <div class="form-inputs">
            <label for="registername">아이디</label>
            <input type="text" id="registername" name="registername" v-model="input.registername" placeholder="아이디" />
        </div>
        <div class="form-inputs">
            <label for="registerpw">비밀번호</label>
            <input type="password" id="registerpw" name="registerpw" v-model="input.registerpw" placeholder="비밀번호" />
        </div>
        <div class="form-inputs">
            <label for="registerpwcheck">비밀번호 확인</label>
            <input type="password" id="registerpwcheck" name="registerpwcheck" v-model="input.registerpwcheck" placeholder="비밀번호 확인" />
        </div>
        <button id ="registerbtn" type="button" v-on:click="register()">회원가입</button>
    </div>
    </div>
    

</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                    registername: "",
                    registerpw:"",
                    registerpwcheck: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "1234" && this.input.password == "1q2w3e4r!") {
                        //로그인 성공
                        console.log("로그인 성공");
                        this.$router.push({ path: '/Community'});
                    } else {
                        console.log("아이디 혹은 비밀번호 오류");
                    }
                } else {
                    console.log("아이디 혹은 비밀번호를 입력하세요");
                }
            },
            register(){
                if(this.input.registerpw != "" && this.input.registerpwcheck !="" && this.input.registername != ""){
                    if(this.input.registerpw != this.input.registerpwcheck){
                        console.log("비밀번호 확인 오류");
                    }
                }
            }
        }
    }
</script>

<style>

#login .form-inputs {
    text-align: center;
    padding-bottom: 10px;
}

#login{
    width: 50%;
    float:left;
    text-align: center;
}

#login .form-inputs label {
    padding-right: 10px;
}

#register{
    width: 50%;
    float: right;
    text-align: center;
}

</style>


