//변수 설정
    //검색 창 변수
const inputBar = document.querySelector('form input[type = "text"]');
const searchBtn = document.querySelector('form input[type = "button"]');
    //프로필 이미지와 이미지 확대 버튼 변수
const profileImg = document.querySelector('.col1 img');
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

//이벤트 함수 정의
    //검색 버튼을 누르게 되면, 깃헙 정보를 가져와 내부 정보를 html 요소에 넣는다.
searchBtn.addEventListener('click', fetchGithubInfo);
    //개인 프로필 사진 아래 버튼을 누르면, 개인 사진이 확대된다.
// profileImgMagnifierBtn.addEventListener('click', magnifyImg);

//함수 정의
    //깃헙 정보를 가져와 html 요소에 넣어주는 함수(하위 함수 사용) 
async function fetchGithubInfo() {
    //존재하지 않는 유저를 검색하는 경우 오류가 발생하고 검색 창 아래 오류 메시지를 띄움
    try {
        const githubId = inputBar.value;
        const response = await fetch(apiUrl + githubId, {
        headers : {
            'Authorization' : `Bearer ${accessToken}`
        }});
        const data = await response.json();
        insertComponent(data);
    } catch {
        document.querySelector('.input-error').style.display = 'block';
        document.querySelector('.github-profile').style.display = 'none';
        document.querySelector('.github-repos').style.display = 'none';
    } 
}
    //api를 통해 가져온 개인 정보를 html 요소에 넣어주는 함수 -> 특정 개인 정보가 없을 경우 어떻게 대처할 것인지
function insertComponent(data) {
        //개인 프로필 사진 불러오기 
    profileImg.src = data.avatar_url;
        //개인 프로필 정보 불러오기
    infoCompany.innerHTML = data.company;
    infoBlog.innerHTML = data.blog;
    infoLocation.innerHTML = data.location;
    infoSignUpDate.innerHTML = data.created_at;
        //계정 활동 정보 불러오기
    activityLevelRepo.innerHTML = "Public Repos: " + data.public_repos;
    activityLevelGist.innerHTML = "Public Gists: " + data.public_gists;
    activityLevelFollower.innerHTML = "Public Followers: " + data.followers;
    activityLevelFollowing.innerHTML = "Public Following: " + data.following;
        //
    document.querySelector('.github-profile').style.display = 'block';
    document.querySelector('.github-repos').style.display = 'block';
}
// function magnifyImg(){

// }



//함수 정의