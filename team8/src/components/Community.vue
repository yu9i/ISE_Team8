<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="main">
    <div class="main-community">
      <div class="main-menu">
        <div class="main-menu-box">
          <div @click="community=0">전체</div>
          <div @click="community=1">졸업작품/논문</div>
          <div @click="community=2">인턴</div>
          <div @click="community=3">1만 라인</div>
          <div @click="community=4">산학협력프로젝트</div>
          <div @click="community=5">기타</div>
        </div>
      </div>

      <div class="main-posts">
        <div id="page-name"><h1>Community</h1></div>
        <div><h3>- {{CommunityTab[community]}} -</h3></div>
        <div><div class="post">
          <div id="post-title">졸업 작품 관련 질문</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">안녕하세요. 저는 소프트웨어학과 ㅁㅁ학번 학생 입니다. 곧, 중간보고서 제출 기간이어서 중간보고서를 작성하고 있는데 궁금한 점이 몇 개 있습니다. 보고서 양식을 보면 서명란이 있는데 교수님께 작접 서명을 안 받아도 되는 것이 맞나요? 그리고 제출할 때 파일 양식은 따로 정해져 있나요? 제출 양식 관련 내용이 안 적혀져 있어서 질문 드립니다.</div>
          </div>
          <div class="likecomment">
            <div class="like-icon"><font-awesome-icon icon="fa-regular fa-heart" size="lg"/></div>
            <div class="like-num">2</div>
            <div class="comment-icon"><font-awesome-icon icon="fa-regular fa-comment" size="lg"/></div>
            <div class="comment-num">10</div>
          </div>
          </div>
        </div>
        <div v-for="post in posts" :key="post.id" class="" @click="ShowPostDetail(post)">
          <div class="post" v-if="(community===0 || post.category==community)" >
          <div id="post-title">{{post.title}}</div>
          <div class="post-content">
            <div id="post-pic"></div>
            <div id="post-det">{{post.content}}</div>
          </div>
          <div class="likecomment">
            <div class="like-icon"><font-awesome-icon icon="fa-regular fa-heart" size="lg"/></div>
            <div class="like-num">{{post.good}}</div>
            <div class="comment-icon"><font-awesome-icon icon="fa-regular fa-comment" size="lg"/></div>
            <div class="comment-num">{{post.comment.length}}</div>
          </div>
          </div>
        </div>
      </div>

      <div class="main-page">
        <div class="search">
          <div><input type="text" id="search" v-model="searchword" placeholder="입력해주세요"></div>
          <div class="search-btn" @click="SearchBtn">검색</div>
        </div>
        <div class="page-home" @click="goToMainPage">Home</div>
        <div class="page-team" @click="goToTeamPage">Team</div>
        <div class="page-profile">
          <div class="page-profile-top">
            <div id="page-profile-pic"></div>
            <div id="page-profile-name">이름</div>
          </div>
          <div class="page-profile-mid">
            <div id="page-profile-dep">소프트웨어학과</div>
            <div id="page-profile-grad">2025년 2월 졸업 예정</div>
          </div>
          <div class="page-profile-bottom" @click="goToMyPage">내 프로필 보러가기</div>
          <div class="page-profile-bottom" @click="Logout">로그아웃 하기</div>
        </div>
        <div class="main-add-postb" @click="ShowAddPost = true"><font-awesome-icon icon="fa-solid fa-square-plus" size="3x"/></div>
      </div>
    </div>

    <div class="commu-add-post" v-if="ShowAddPost">
      <div class="commu-add-new">
        <div class="commu-add-title">
          <input type="text" id="commu-add-title" v-model="PostForm.title" required minlength="2" @input="PostLimitText" placeholder="제목을 입력하세요">
        </div>
        <div class="commu-add-category">
          <select id="commu-add-category" v-model="PostForm.category">
            <option value=0 selected>-카테고리를 선택해주세요-</option>
            <option value=1>졸업작품/논문</option>
            <option value=2>인턴</option>
            <option value=3>1만라인</option>
            <option value=4>산학협력프로젝트</option>
            <option value=5>기타</option>
          </select>
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

    <div class="post-detail" v-if="ShowPost">
      <div class="post-detail-out">
        <div class="xmark" @click="ShowPostDetailClose"><font-awesome-icon icon="fa-solid fa-xmark" style="color: #8f8f8f;" /></div>
        <div class="post-detail-in">
          <div class="post-detail-in-top">
            <div class="post-detail-title">
              <h1>{{selectedPost.title}}</h1>
            </div>
            <div class="post-detail-name">작성자: {{selectedPost.name}}</div>
            <div class="post-detail-cont">
              <p>{{selectedPost.content}}</p>
            </div>
          </div>
          <div class="post-detail-likecomment">
            <div class="likecomment">
              <div class="like-icon" @click="ChangeGood">
                <font-awesome-icon icon="fa-regular fa-heart" size="lg" v-if="!likeit" />
                <font-awesome-icon icon="fa-solid fa-heart" size="lg" v-if="likeit" />
              </div>
              <div class="like-num">{{selectedPost.good}}</div>
              <div class="comment-icon"><font-awesome-icon icon="fa-regular fa-comment" size="lg"/></div>
              <div class="comment-num">{{selectedPost.comment.length}}</div>
              
            </div>
            <div class="input-likecomment">
              <div><h3>댓글</h3></div>
              <div v-for="comment in selectedPost.comment" :key="comment.id" class="show-comment" >
                <div class="show-comment-name">{{comment.name}}</div>
                <div class="show-comment-cont">{{comment.comment}}</div>
              </div>
              <div class="input-comment">
                <div><input type="text" id="commu-add-comment" v-model="CommentForm.comment" required minlength="2" @input="CommentLimitText" placeholder="댓글을 입력하세요"></div>
                <div class="input-comment-all" @click="PostComment">등록</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
var username = localStorage.getItem("username");

  export default {
    data() {
      return {
        searchword: "",
        ShowAddPost: false,
        ShowPost: false,
        titleLength: 0,
        contentLength: 0,
        community: 0,
        CommunityTab: {
          0: "전체",
          1: "졸업작품/논문",
          2: "인턴",
          3: "1만라인",
          4: "산학협력프로젝트",
          5: "기타",
        },
        PostForm: {
          title: "",
          category: 0,
          content: "",
          file: null,
        },
        posts: [], //post 목록
        nowposts:[], //선택 post 목록
        selectedPost: null, //선택된 post
        commentLength: 0,
        CommentForm: {
          name: "name",
          comment: "",
        },
        likeit: false,
      };
    },

    methods:{

      SearchBtn(){
        let word = this.searchword.length;
        if(word<2){
          alert("검색은 2자 이상부터 입니다.");
          return;
        }
        
      },

      ShowCommunity(num){
        this.community = this.CommunityTab[num];
      },

      ChangeGood(){
        if(this.likeit){
          this.likeit = false;
          this.selectedPost.good-=1;
        }
        else {
          this.likeit = true;
          this.selectedPost.good+=1;
        }
      }, 

      ShowPostDetail(post){
        this.selectedPost = post;
        this.ShowPost = true;
      },

      ShowPostDetailClose(){
        this.ShowPost = false;
        this.selectedPost = null;
        this.CommentForm.comment="";
      },

      PostLimitText() {
        this.titleLength = this.PostForm.title.length;
        this.contentLength = this.PostForm.content.length;
        if (this.titleLength > 15) {
          alert('제목은 2자 이상, 15자 이하로 작성해주세요.');
        }
        if (this.contentLength > 500) {
          alert('내용은 2자 이상, 500자 이하로 작성해주세요.');
        }
      },

      CommentLimitText(){
        this.commentLength = this.CommentForm.comment.length;
        if (this.commentLength > 30) {
          alert('댓글은 2자 이상, 30자 이하로 작성해주세요.');
        }
      },

      PostComment(){
        this.commentLength = this.CommentForm.comment.length;
        if(this.commentLength < 2){
          alert("댓글은 2자 이상으로 작성해주세요.");
          return;
        }
        
        const com = {
          id: this.selectedPost.comment.length+1,
          name: this.CommentForm.name,
          comment: this.CommentForm.comment,
        }
        this.selectedPost.comment.push(com);
        this.CommentForm.comment = "";

      },

      PostAll(){
        this.titleLength = this.PostForm.title.length;
        this.contentLength = this.PostForm.content.length;
        if(this.titleLength < 2 || this.contentLength < 2){
          alert("제목과 내용은 2자 이상으로 작성해주세요.");
          return;
        }
        if(this.PostForm.category<1){
          alert("카테고리를 선택해주세요.");
          return;
        }

        const post = {
          id: this.posts.length + 1,
          name: "name",
          category: this.PostForm.category,
          title: this.PostForm.title,
          content: this.PostForm.content,
          good: 0,
          comment: [],
        };
        this.posts.push(post);

        this.CancelPost();
      },

      CancelPost(){
        this.ShowAddPost=false;
        this.AddPost = false;
        this.PostForm.title = "";
        this.PostForm.content = "";
        this.PostForm.file = null;
        this.PostForm.category = 0;
        this.contentLength = 0;
      },
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
        localStorage.clear;
        this.$router.push('/');
      }

    }
  }
</script>


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

.main-posts > div {
  width: 90%;
  margin: 4px 0;
}

.main-posts > div > .post {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: white;
  border: solid 1px black;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.main-posts > div > .post > #post-title {
  font-weight: bold;
  font-size: 1.2em;
}

.main-posts > div > .post > .post-content {
  padding: 0.8em;
}

.main-posts > div > .post > .post-content > #post-det {
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

.likecomment {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
}

.likecomment > div {
  width: 25px;
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

.commu-add-new > .commu-add-title > #commu-add-title{
  width: 20em;
  height: 2em;
  font-size: 1.3em;
  font-weight: bold;
}

.commu-add-new > .commu-add-category > select {
  height: 2em;
}

.commu-add-new > .commu-add-cont > .commu-word-count{
  text-align: right;
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

.post-detail {
  display: block;
}

.post-detail > .post-detail-out {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX( -50% );
  width: 60%;
  background: white;
  border: solid 1px black;
  border-radius:10px;
  padding: 1em;
  max-height: 550px;

}

.post-detail > .post-detail-out > .xmark {
  cursor: pointer;
  text-align: right;
}

.post-detail > .post-detail-out > .post-detail-in {
  background: #ffdbe0;
  border: solid 1px gray;
  border-radius: 10px;
  padding: 5px;
  overflow-y: scroll;
  max-height: 500px;
  width: 100%;
}

.post-detail > .post-detail-out > .post-detail-in > .post-detail-in-top {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}

.post-detail-cont {
  margin: 1em;
  width: 80%;
}

.input-likecomment {
  background: white;
  width: 90%;
  left: 50%;
  transform: translateX( -50% );
  margin: 1em 0;
  padding: 0.5em 1em;
}

.input-likecomment > div > h3 {
  border-bottom: solid 2px #a9a9a9;
  margin-bottom: 5px;
}

.show-comment{
  display: grid;
  grid-template-columns: 2fr 10fr;
}

.show-comment > .show-comment-name {
  font-weight: bold;
}

.input-comment {
  display: grid;
  grid-template-columns: 10fr 2fr;
  align-items: center;
}

.input-comment > div > input {
  margin: 1em 0;
  width: 100%;
  height: 2em;
}

.input-comment > .input-comment-all {
  background: #ffdbf4;
  text-align: center;
  margin: 0 1em;
  border: solid 3px #ffbbeb;
  border-radius: 10px;
  padding: 2px;
  font-weight: bold;
  cursor: pointer;
}

.post-detail-likecomment > .likecomment > .like-icon {
  cursor: pointer;
}

.search{
  display:flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.search {
  width: 100%;
}

.search > div {
  margin: 0 2px;
}

.search > div > input {
  width: 100%;
  font-size: 0.8em;
}

.search > .search-btn {
  width: 20%;
  text-align: center;
  border: solid 2px #9090ff;
  border-radius: 10px;
  padding: 1px 4px;
  font-size: 0.9em;
  cursor: pointer;
}
</style>
