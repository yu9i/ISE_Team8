<template>
    <div class = "page-content">
      <div class="main-content">
        <div class = "left-content">
          <button @click="showModal = true" class="recruit-button">모집하기</button>

            <!-- Recruit 글 작성 모달 -->
          <div class="modal-overlay" v-if="showModal">
            <div class="modal">
              <div class="modal-content">
                <span class="close" @click="resetRecruit">&times;</span>
                <h3 class="modal-title">Recruit Form 작성</h3>
                <div class="input-group">
                  <label for="title-input">제목</label>
                  <input type="text" id="title-input" v-model="recruitForm.title" placeholder="제목">
                </div>
                <div class="input-group">
                  <label for="content-input">내용</label>
                  <textarea id="content-input" v-model="recruitForm.content" placeholder="내용" :style="{height: textareaHeight}" @input="limitText"></textarea>
                  <div class="word-count">{{ contentLength }}/100자</div>
                </div>
                <div class="input-group">
                  <label for="recruitment-input">모집인원</label>
                  <input type="number" id="recruitment-input" v-model="recruitForm.recruitment" placeholder="모집 인원" min="0">
                </div>
                <div class="input-group">
                  <label for="password-input">비밀번호 입력 (신청한 인원을 확인할 때 사용됩니다.)</label>
                  <input type="password" id="password-input" v-model="recruitForm.password" placeholder="비밀번호 (4자리 숫자)">
                </div>
                <div class="button-container">
                  <button @click="postRecruit" class="modal-button">게시</button>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">팀원 승인하기</h2>
            <div v-for="team in teams" :key="team.id" class="request">
              <div class="approve-info">
                <h3>{{ team.title }}</h3>
                <button @click="openModal(team)">확인</button>
              </div>
            </div>
          </div>

        <!-- 승인/거절 모달창 -->
        <div class="modal-overlay" v-if="showRequestModal">
          <div class="modal">
          <div class="modal-content">
            <span class="close" @click="showRequestModal = false">&times;</span>
            <h3 class="modal-title">{{ selectedTeam.title }}</h3>
            <table class="member-requests-table" style="width:100%;">
              <colgroup>
                <col style="width: 20%;">
                <col style="width: 40%;">
                <col style="width: 20%;">
              </colgroup>
              <thead>
                <tr>
                  <th>신청인</th>
                  <th>내용</th>
                  <th>승인/거절</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in selectedTeam.requests" :key="request.id">
                  <td>{{ request.userName }}</td>
                  <td>{{ request.message }}</td>
                  <td>
                    <!-- 승인/거절 버튼을 일렬로 표시 -->
                    <div class="button-container">
                      <button v-if="!request.approved && !request.rejected" @click="approveRequest(selectedTeam, request)" class="request-button">승인</button>
                      <button v-if="!request.approved && !request.rejected" @click="rejectRequest(selectedTeam, request)" class="request-button">거절</button>
                      <p v-if="request.approved" class="request-status">승인되었습니다!</p>
                      <p v-if="request.rejected" class="request-status">거절되었습니다.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p v-if="!isRecruitmentClosed(selectedTeam)" class="recruitment-status">
              {{ '(승인된 인원) ' + getApprovedCount(selectedTeam) + ' / (모집인원) ' + selectedTeam.recruitment }}
            </p>
            <p v-else class="recruitment-status">모집이 마감되었습니다.</p>
          </div>
          </div>
        </div>
        </div>

          <div class="section">
            <h2 class="section-title">팀 신청하기</h2>
            <div v-for="post in posts" :key="post.id" class="post">
              <div class="team-info">
              <h3 class="team-title">{{ post.title }}</h3>
              <p class="team-content">{{ post.content }}</p>
              <p class="team-recruitment">모집 인원: {{ post.recruitment }}</p>
              <button v-if="!isRecruitmentClosed(post)" @click="applyTeam(post)">신청</button>
              <p class="recruit-done" v-if="isRecruitmentClosed(post)">마감!</p>
              </div>
            </div>
          </div>

        <div class="modal-overlay" v-if="showPasswordModal">
          <div class="modal">
            <div class="modal-content">
              <span class="close" @click="closePasswordModal">&times;</span>
              <h3 class="modal-title">비밀번호 확인</h3>
                <div class="input-group">
                  <input type="password" v-model="passwordInput" placeholder="비밀번호를 입력하세요" class="password-input">
                </div>
                <div class="button-container">
                  <button @click="confirmPassword(selectedTeam)" class="modal-button">확인</button>
                </div>
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
            <div id="page-profile-name">이름</div>
          </div>
          <div class="page-profile-mid">
            <div id="page-profile-dep">소프트웨어학과</div>
            <div id="page-profile-grad">2025년 2월 졸업 예정</div>
          </div>
          <div class="page-profile-bottom" @click="goToMyPage">내 프로필 보러가기</div>
          <div class="page-profile-bottom" @click="Logout">로그아웃 하기</div>
        </div>

        <div class="section">
          <h2 class="section-title">지원현황 확인하기</h2>
          <div v-for="team in teams" :key="team.id" class="request">
            <div class="approve-info">
              <h3>{{ team.title }}</h3>
              <button @click="openStatusModal(team)">확인</button>
            </div>
          </div>
        </div>

        <!-- 승인/거절 모달창 -->
        <div class="modal-overlay" v-if="showStatusModal">
          <div class="modal">
          <div class="modal-content">
            <span class="close" @click="showStatusModal = false">&times;</span>
            <h3 class="modal-title">{{ selectedTeam.title }}</h3>
            <table class="member-requests-table" style="width:100%;">
              <colgroup>
                <col style="width: 20%;">
                <col style="width: 40%;">
                <col style="width: 20%;">
              </colgroup>
              <thead>
                <tr>
                  <th>신청인</th>
                  <th>내용</th>
                  <th>지원 현황</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in selectedTeam.requests" :key="request.id">
                  <td>{{ request.userName }}</td>
                  <td>{{ request.message }}</td>
                  <td>
                    <!-- 승인/거절 버튼을 일렬로 표시 -->
                    <div class="button-container">
                      <p v-if="request.approved" class="request-status">승인되었습니다!</p>
                      <p v-if="request.rejected" class="request-status">거절되었습니다.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      height: 0,
      contentLength: 0,
      textareaHeight: 'auto',
      showModal: false,
      showRequestModal: false,
      showStatusModal: false,
      showPasswordModal: false,
      recruitForm: {
        title: "",
        content: "",
        recruitment: 0,
        password: "",
      },
      posts: [], // Recruit 글 목록
      teams: [], // 팀 목록
      appliedUsers: [],
      selectedTeam: null, // 선택된 팀
      passwordInput: '',
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    isRecruitmentClosed() {
      return (post) => {
        const existingTeam = this.teams.find((team) => team.id === post.id);
        if (existingTeam && existingTeam.requests.filter((request) => request.approved).length >= post.recruitment) {
          return true;
        }
        return false;
      };
    },
  }, 
  methods: {
    handleResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    updateTextareaSize() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`; 
    },
    limitText() {
      this.updateTextareaSize(); 
    },
    limitText() {
      this.contentLength = this.recruitForm.content.length;
      if (this.contentLength > 100) {
        alert('내용은 100자 이하로 작성해주세요.');
        this.recruitForm.content = this.recruitForm.content.slice(0, 100);
      }
    },
    postRecruit() { 
      if (!/^\d{4}$/.test(this.recruitForm.password)) {
        alert("비밀번호는 4자리 숫자로 입력해주세요.");
        return;
      }

      const post = {
        id: this.posts.length + 1,
        title: this.recruitForm.title,
        content: this.recruitForm.content,
        recruitment: this.recruitForm.recruitment,
        password: this.recruitForm.password,
        members: [],
        
      };
      this.posts.push(post);

      this.recruitForm.title = '';
      this.recruitForm.content = '';
      this.recruitForm.recruitment = 0;
      this.recruitForm.password = '';
      this.contentLength = 0;
      this.showModal = false;
    },
    resetRecruit(){
      this.recruitForm.title = '';
      this.recruitForm.content = '';
      this.recruitForm.recruitment = 0;
      this.recruitForm.password = '';
      this.contentLength = 0;
      this.showModal = false;
    },
    applyTeam(post) {
      const existingTeam = this.teams.find((team) => team.id === post.id);
      const approvedRequestsCount = existingTeam ? existingTeam.requests.filter((request) => request.approved).length : 0;

      if (approvedRequestsCount >= post.recruitment) {
        alert('신청이 마감되었습니다.');
        return;
      }
      
      const username = localStorage.getItem("username");
      console.log(username)
      if (this.appliedUsers.includes(username)) {
        alert("이미 신청하셨습니다!");
        return;
      }

      const newRequest = {
        userName: localStorage.getItem("username"),
        message: '신청 메시지',
        approved: false,
      };

      if (existingTeam) {
        existingTeam.requests.push(newRequest);
      } else {
        const team = {
          id: post.id,
          title: post.title,
          recruitment: post.recruitment,
          password: post.password,
          requests: [newRequest],
        };
        this.teams.push(team);
        this.appliedUsers.push(username);
      }
    },
    approveRequest(team, request) {
      if (team.requests.filter((r) => r.approved).length >= team.recruitment) {
        alert('모집이 마감되었습니다.');
        return;
      }
      request.approved = true;
    },
    rejectRequest(team, request) {
      request.rejected = true;
    },
    getApprovedCount(team) {
      return team.requests.filter((r) => r.approved).length;
    },
    openModal(team) {
      this.passwordInput = '';
      this.selectedTeam = team;
      this.showPasswordModal = true;
    },
    closeModal() {
      this.selectedTeam = null;
      this.showRequestModal = false;
    },
    openStatusModal(team){
      console.log("hi")
      this.selectedTeam = team;
      this.showStatusModal = true;
    },
    closeStatusModal() {
      this.selectedTeam = null;
      this.showStatusModal = false;
    },
    closePasswordModal() {
      this.showPasswordModal = false;
    },
    confirmPassword(team) {
      const password = this.passwordInput;
      if (password === team.password) {
        this.showPasswordModal = false;
        this.showRequestModal = true;
      } else {
        alert("비밀번호가 잘못되었습니다.");
      }
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
        this.$router.push('/');
      }

  }
};
</script>

<style>
body {
  font-family: 'Malgun Gothic', sans-serif;
}

.page-container {
  margin: 0 auto; 
  overflow-x: hidden;
}

.page-content{
  display: grid;
  grid-template-columns: 4fr 1fr;
}
.main-content {
  background-color: #ffffff;
  padding: 1rem;
  display: grid; 
  grid-template-columns: 2fr 6fr; 
  gap: 3rem;
}

.section{
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  flex: 1;
  margin-top: 0.1em; 
  width:100%;
}

.section:nth-child(1) {
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  height: auto;
}

.section:nth-child(2) {
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  height: auto;
}

.section-title {
  font-weight: bold;
  font-size: 1.3rem;
  margin-top:0.01em;
  margin-bottom: 1.5rem;
  text-align: center;
}

.team-info {
  background-color: #ffffff;
  padding: 0.01rem 1rem;
  margin-bottom: 0.1rem; 
  border-radius: 0.5rem;
  border-style: solid;
  border-width:1px;
  border-color:grey;
  display: flex;
  flex-direction:row;
  justify-content: space-between; 
  align-items: center;
}

.team-title {
  width: 100%; 
  font-size: 1.2rem;
}

.team-content {
  width: 100%; 
  font-size: 0.9rem; 
}

.team-recruitment {
  width: 100%; 
  font-size: 0.8rem;
}

.recruit-done{
  width: 100%;
  font-size: 0.7rem;
}

.approve-info {
  background-color: #ffffff;
  padding: 0.01rem 1rem;
  margin-bottom: 0.1rem;
  border-radius: 1rem;
  border-style: solid;
  border-width:1px;
  border-color:grey;
  display: flex;
  align-items: center;
  justify-content: space-between; 
}

h2 {
  margin-bottom: 0.5rem;
}

.recruit-button {
  margin-bottom: 0.5rem;
  background-color: hsl(205, 96%, 90%); 
  color: #000000;
  padding: 0.75rem 1rem; 
  font-size: 1.2rem;
  border-style: solid;
  border-width:1px;
  border-color:grey;
  cursor: pointer;
  height:4rem;
  width:100%
}

.recruit-button:hover {
  background-color: #a8d3ff; 
}

button {
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  background-color: hsl(60, 27%, 2%); 
  color: #ffffff;
  padding: 0.3rem 0.5rem; 
  font-size: 0.7rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 20%;
}

button:hover {
  background-color: #5f5f5f; 
}

.modal-button{
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  background-color: hsl(60, 27%, 2%); 
  color: #ffffff;
  padding: 0.3rem 0.5rem; 
  font-size: 0.7rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.modal-button:hover {
  background-color: #5f5f5f; 
}

.request-button{
  margin-bottom: 1rem;
  background-color: hsl(60, 27%, 2%); 
  color: #ffffff;
  padding: 0.3rem 0.5rem; 
  font-size: 0.7rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 30%;
}

.request-button:hover {
  background-color: #5f5f5f; 
}

.post,
.request {
  margin-bottom: 1rem;
}

.request-actions {
  display: flex;
}

.request-actions button {
  margin-right: 0.5rem;
}

.modal-overlay {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal{
  background-color: #ffc08dbd;
  margin: 10% auto;
  padding: 20px;
  align-content: center;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  align-items:center;
  border: 1px solid #888;
  width: 95%;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  text-align: center;
  line-height: 3rem;
  font-size: 14px;
}

.modal-title {
  font-size: 20px;
  margin: 0.1rem;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-group label {
  margin-right: 10px;
}

.word-count {
  padding: 10px;
  font-size: 12px;
}

.modal-content .password-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.modal-approve{
  display: flex;
  align-items: center;
  flex-direction: row;
}

.member-requests-table {
  max-height: 300px; 
  overflow-y: auto;
  border-collapse: collapse;
  width: 100%;
}

.member-requests-table th,
.member-requests-table td {
  border: 1px solid #ddd;
  text-align: center;
}

.member-requests-table th {
  background-color: #f2f2f2;
}

.member-requests-table tr {
  height: auto;
}

.member-requests-table td .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}


.request-status{
  text-align: center;
}

.button-container {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
}

.close {
  align-self: flex-end;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.member-request {
  margin-bottom: 1rem;
}

.main-page { /*absolute*/
  width: 100%;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* margin-top: 5em; */
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

</style>