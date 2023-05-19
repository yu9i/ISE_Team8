<template>
    <div id = "mypage">
        <h2>마이페이지</h2>
        <table id = "information">
            <tr>
                <td class="category">닉네임</td>
                <td>이름1</td>
            </tr>
            <tr>
                <td>학과</td>
                <td>소프트웨어학과</td>
            </tr>
            <tr>
                <td class="category">학번</td>
                <td>20학번</td>
            </tr>
            <tr>
                <td class="category">졸업예정</td>
                <td>2025년 2월</td>
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
        
    </div>
</template>

<script>
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
</style>