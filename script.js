//변수 설정
    //검색 창 변수
const inputBar = document.querySelector('form input[type = "text"]');
const searchBtn = document.querySelector('form input[type = "button"]');
    //프로필 이미지와 이미지 확대 버튼 변수
const profileImg = document.querySelector('.col img');
const profileImgMagnifierBtn = document.querySelector('.col1 button');
    //개인 정보 변수
const infoCompany = document.querySelector('.company td:nth-child(2)');
const infoBlog = document.querySelector('.blog td:nth-child(2)');
const infoLocation = document.querySelector('.location td:nth-child(2)');
const infoSignUpDate = document.querySelector('.sign-up-date td:nth-child(2)');
    //활동성 변수
const activityLevelRepo = document.querySelector('#repo');
const activityLevelGist = document.querySelector('#gist');
const activityLevelFollower = document.querySelector('#follower');
const activityLevelFollowing = document.querySelector('#following');
    //최근 레포지토리 변수
const repos = [];

//api key 값과 api url 변수
const accessToken = "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";
const apiUrl = "https://api.github.com/users/";


//함수 실행
searchBtn.addEventListener('click', fetchGithubInfo);

//함수 정의
async function fetchGithubInfo() {
    const githubId = inputBar.value;
    try {
    const response = await fetch(apiUrl + githubId, {
        headers : {
            'Authorization' : `Bearer ${accessToken}`
        }});
    data = await response.json();
    return data
    } catch {
        console.log("error");
    }
}







//함수 정의