<template><div class="main" :style="{}">
  <div class="main-community">
    <div class="main-menu">
      <div class="main-menu-box">
        <div>졸업작품/논문</div>
        <div>인턴</div>
        <div>1만 라인</div>
        <div>산학협력프로젝트</div>
        <div>기타</div>
      </div>
    </div>

    <div id = "mypage">
        <h2>마이페이지</h2>
        <table id = "information">
            <tr>
                <td class="category">이름</td>
                <td><input type="text" id="name" :value="info.name"></td>
            </tr>
            <tr>
                <td>학과</td>
                <td><input type="text" id="department" :value="info.department"></td>
            </tr>
            <tr>
                <td class="category">학번</td>
                <td><input type="text" id="number" :value="info.number"></td>
            </tr>
            <tr>
                <td class="category">졸업예정</td>
                <td><input type="text" id="date" :value="info.date"></td>
            </tr>
            <tr>
                <td class="category">3품</td>
                <td>
                    <input type="checkbox" id="인성"  value="인성"> 
                    <label for="인성">인성</label>
                    <input type="checkbox" id="글로벌"  value="글로벌"> 
                    <label for="글로벌">글로벌</label>
                    <input type="checkbox" id="창의"  value="창의"> 
                    <label for="창의">창의</label>
                    <input type="checkbox" id="AI"  value="AI"> 
                    <label for="AI">AI</label>
                    <input type="checkbox" id="인턴십"  value="인턴십"> 
                    <label for="인턴십">인턴십</label>
                </td>
            </tr>
        </table>
        <button type= "button" class="save" @click="save">저장하기</button>
        <br>
        <div>사용 기록</div>
        <div class="main-posts">
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문2</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문3</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문4</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문4</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문4</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문4</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문4</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
        <div class="post">
          <div id="post-title">졸업 작품 관련 질문4</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-page">
      <div class="page-home" @click="goToMainPage">Home</div>
      <div class="page-team" @click="goToTeamPage">Team</div>
      <div class="page-profile">
        <div class="page-profile-top">
          <div id="page-profile-pic"></div>
          <div id="page-profile-name">{{info.name}}</div>
        </div>
        <div class="page-profile-mid">
          <div id="page-profile-dep">{{info.department}}</div>
          <div id="page-profile-grad">{{info.date}} 졸업 예정</div>
        </div>
        <div class="page-profile-bottom" @click="goToMyPage">내 프로필 보러가기</div>
        <div class="page-profile-bottom" @click="Logout">로그아웃 하기</div>
      </div>
    </div>
  </div>

  <div class="commu-add-post" v-if="ShowAddPost">
    <div class="commu-add-new">
      <div class="commu-add-title">
        <input type="text" id="commu-add-title" v-model="PostForm.title" required minlength="2" @input="PostLimitText" placeholder="제목을 입력하세요">
      </div>
      <div class="commu-add-cont">
        <textarea id="comm-add-cont" v-model="PostForm.content" placeholder="내용을 입력해주세요" required rows="20" cols="60"  @input="PostLimitText"></textarea>
        <div class="commu-word-count">{{contentLength}}/500자</div>
      </div>
      <div class="commu-add-file">
        <input type="file" id="commu-add-file" accept="image/*, .pdf, .doc">
      </div>
      <div class="commu-add-ornot">
        <div class="commu-add-cancel" @click="CancelPost">취소</div>
        <div class="commu-add-all" @click="PostAll">추가하기</div>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>



  export default {
    data() {
      
        return {
          info:{
        name: localStorage.getArray("namelist")[localStorage.getItem("userid")],
        department : localStorage.getArray("departmentlist")[localStorage.getItem("userid")],
        number : localStorage.getArray("numberlist")[localStorage.getItem("userid")],
        date : localStorage.getArray("datelist")[localStorage.getItem("userid")],
      }
        }
    },

    methods:{
      goToMainPage() {
        this.$router.push('/community');
      },
      goToTeamPage() {
        this.$router.push('/teambuilding');
      },
      goToMyPage() {
        this.$router.push('/mypage');
      },
      Logout(){
        localStorage.removeItem("username");
        this.$router.push('/');
      },
      save(){
        localStorage.setArrayItem("namelist",document.getElementById("name").value, localStorage.getItem("userid"));
        localStorage.setArrayItem("departmentlist",document.getElementById("department").value, localStorage.getItem("userid"));
        localStorage.setArrayItem("numberlist",document.getElementById("number").value, localStorage.getItem("userid"));
        localStorage.setArrayItem("datelist",document.getElementById("date").value, localStorage.getItem("userid"));
      }
    }
    
  }
</script>

<style>
#mypage{
    text-align: center;
    background-color: azure;
}

#information{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: azure;
}
.main-posts {
    margin-left: auto;
    margin-right: auto;
    background: #ECECEC;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  width: 50%;
  max-height: 200px;
  margin-bottom: 3em;
  padding-bottom: 2em;
  overflow: scroll;
}
.main-posts > #page-name {
  padding: 0.5em;
}
.main-posts > .post {
    margin-left: auto;
    margin-right: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: white;
  border: solid 1px black;
  border-radius: 10px;
  padding: 5px;
  margin: 8px 0;
  cursor: pointer;
}


</style>

<style scoped>

.main {
  display: block;
}

.main-community{
  max-height: 800px;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  justify-items: center;
}

.main-menu {
  font-size: 1.3em;
  align-items: center;
  padding: 1em;
}

.main-menu > .main-menu-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #FFFBEB;
  border: solid 1px black;
  border-radius: 5px;
  padding: 2.5em 1.5em;
}

.main-menu > .main-menu-box > div {
  padding: 0.5em 0;
  cursor: pointer;
}

.main-menu > .main-menu-box > div:hover {
  font-weight: bold;
}

.main-posts {
  background: #ECECEC;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  width: 94%;
  max-height: 750px;
  margin-bottom: 3em;
  padding-bottom: 2em;
  overflow-y: scroll;
}

.main-posts > #page-name {
  padding: 0.5em;
}

.main-posts > .post {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: white;
  border: solid 1px black;
  border-radius: 10px;
  padding: 5px;
  margin: 8px 0;
  cursor: pointer;
}

.main-posts > .post > #post-title {
  font-weight: bold;
  font-size: 1.2em;
}

.main-posts > .post > .post-content {
  padding: 0.8em;
}

.main-posts > .post > .post-content > #post-det {
  display: -webkit-box;
  font-size: 1em;
  text-align: left;
  white-space: normal;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main-page {
  width: 100%;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1em;
}

.main-page > div {
  font-size: 1.1em;
  margin: 1em;
}

.main-page > .page-home, .main-page >.page-team {
  cursor: pointer;
}

.main-page > .page-home:hover, .main-page >.page-team:hover {
  font-weight: bold;
}

.main-page > .page-profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  border: solid 1px black;
  border-radius: 10px;
  align-items: center;
  padding: 5px;
}

.main-page > .page-profile > div {
  margin: 7px;
}

.main-page > .page-profile > .page-profile-top > #page-profile-name {
  font-weight: bold;
  font-size: 1.1em;
}

.main-page > .page-profile > .page-profile-mid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-page > .page-profile > .page-profile-bottom {
  color: #a4a4a4;
}

.main-page > .page-profile >.page-profile-bottom:hover {
  font-weight: bold;
  cursor: pointer;
}

.main-page > .main-add-postb:hover {
  cursor: pointer;
}

.commu-add-post {
  display: block;
}

.commu-add-new {
  background: white;
  width: auto;
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX( -50% );
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 1em 2.5em;
  font-size: 1.1em;
}

.commu-add-new > div {
  margin: 5px;
}

.commu-add-new > .commu-add-title{
  
}

.commu-add-new > .commu-add-title > #commu-add-title{
  width: 20em;
  height: 2em;
  font-size: 1.3em;
  font-weight: bold;
}

.commu-add-new > .commu-add-cont > .commu-word-count{
  text-align: right;
}

.commu-add-new > .commu-add-file{
  
}

.commu-add-ornot {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.commu-add-new > .commu-add-ornot > .commu-add-cancel{
  color:#a8a8a8;
  border: solid 2px #a4a4a4;
  border-radius: 10px;
  padding: 0.2em 1em;
  font-size: 1em;
  cursor: pointer;
  margin: 5px;
}

.commu-add-new > .commu-add-ornot > .commu-add-all{
  background: #9ef686;
  border: solid 2px #92d035;
  border-radius: 10px;
  padding: 0.2em 1em;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  margin: 5px;
}

</style>