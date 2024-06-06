<template>
  <div class="chat-container">
    
    <div class="chat-content">
      <aside class="chat-sidebar">
        <div class="profile">
          <img src="@/assets/profile.png" alt="프로필 사진">
          <p>팬더</p>
        </div>
        <div class="chat-list">
          <div class="chat-item">
            <p>상대방1</p>
            <span>최근 메시지</span>
          </div>
          <div class="chat-item">
            <p>상대방2</p>
            <span>최근 메시지</span>
          </div>
        </div>
      </aside>
      <main class="chat-main">
        <div class="chat-placeholder">
          <img src="@/assets/chat-icon.png" alt="채팅 아이콘">
          <p>채팅할 상대를 선택해주세요.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatView'
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #FF8A00;
  padding: 20px;
  text-align: center;
}

.logo-link {
  text-decoration: none;
  color: white;
}

.chat-content {
  display: flex;
  flex: 1;
}

.chat-sidebar {
  width: 300px;
  background-color: #f1f1f1;
  padding: 20px;
}

.profile {
  text-align: center;
}

.profile img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.chat-list {
  margin-top: 20px;
}

.chat-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.chat-main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.chat-placeholder {
  text-align: center;
}

.chat-placeholder img {
  width: 100px;
  height: 100px;
}
</style>
