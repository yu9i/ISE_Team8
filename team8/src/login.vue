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
        <table id = "information">
            <tr>
                <td class="category">이름</td>
                <td><input type="text" id="name" placeholder="홍길동"></td>
            </tr>
            <tr>
                <td>학과</td>
                <td><input type="text" id="department" placeholder="솦트"></td>
            </tr>
            <tr>
                <td class="category">학번</td>
                <td><input type="text" id="number" placeholder="209394841"></td>
            </tr>
            <tr>
                <td class="category">졸업예정</td>
                <td><input type="text" id="date" placeholder="예시)24년02월"></td>
            </tr>
        </table>
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
                },
                database: {
                    nmcheck: "1",
                    username: [],
                    password: [],
                }
            }
        },
        methods: {
            login() {
                this.database.username=localStorage.getArray("userInfo");
                this.database.password=localStorage.getArray("userpw");
                if(this.input.username != "" && this.input.password != "") {
                    for(var i =0; i< this.database.username.length;i++){
                            if(this.input.username == this.database.username[i]){
                                if(this.input.password == this.database.password[i]){
                                    localStorage.setItem("username", this.input.username);
                                    this.$router.push('community');
                                }
                            }
                        }
                    
                } else {
                    alert("아이디 혹은 비밀번호 오류");
                }
            },
            register(){
                this.database.username=localStorage.getArray("userInfo");
                this.database.password=localStorage.getArray("userpw");
                if(this.input.registerpw != "" && this.input.registerpwcheck !="" && this.input.registername != ""){
                    if(this.input.registerpw != this.input.registerpwcheck){
                        alert("비밀번호 확인 오류");
                    }
                    else{
                        for(var i =0; i< this.database.username.length;i++){
                            if(this.input.registername == this.database.username[i]){
                                alert("이미 존재하는 사용자 이름입니다");
                                this.database.nmcheck = 0;
                                break;
                            }
                        }
                        if (this.database.nmcheck==1){ 
                        localStorage.pushArrayItem("userInfo",this.input.registername);
                        localStorage.pushArrayItem("userpw",this.input.registerpw);
                        localStorage.setItem("name",document.getElementById("name").value);
                        localStorage.setItem("department",document.getElementById("department").value);
                        localStorage.setItem("number",document.getElementById("number").value);
                        localStorage.setItem("date",document.getElementById("date").value);
                        alert("사용자 생성 성공");
                        document.getElementById("name").value = "";
                        document.getElementById("department").value = "";
                        document.getElementById("number").value = "";
                        document.getElementById("date").value = "";
                        }
                        this.database.nmcheck = 1;
                    }
                }
            }     
        }
    }

Storage.prototype.getArray = function(array) {
    var arraygoal = [];
    var Arraydest = this.getItem(array);
    if (typeof Arraydest !== "undefined") {
        if (Arraydest !== null) { arraygoal = JSON.parse(Arraydest); }
  }
return arraygoal;
}

Storage.prototype.pushArrayItem = function(arrayName,Item) {
    var targetarray = this.getArray(arrayName);
    targetarray.push(Item);
    this.setItem(arrayName,JSON.stringify(targetarray));
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


