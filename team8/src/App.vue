<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="main">

    <div class="main-menu">
      <div class="main-menu-box">
        <div>졸업작품/논문</div>
        <div>인턴</div>
        <div>1만 라인</div>
        <div>산학협력프로젝트</div>
        <div>기타</div>
      </div>
    </div>

    <div class="main-posts">
      <div id="page-name"><h1>졸업작품/논문</h1></div>
      <div class="post">
        <div id="post-title">제목</div>
        <div class="post-content">
          <div id="post-pic"></div>
          <div id="post-det">내용</div>
        </div>
      </div>
    </div>

    <div class="main-page">
      <div class="page-home">Home</div>
      <div class="page-team">Team</div>
      <div class="page-profile">profile</div>
      <div Onclick=""><font-awesome-icon icon="fa-solid fa-square-plus" /></div>
    </div>

  </div>
  
</template>

<style scoped>
</style>
