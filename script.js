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
const repoListContainer = document.querySelector('#repo-list-container');
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
        const response2 = await fetch(apiUrl + githubId + '/repos');
        if (response.ok) {  //response 객체의 ok 속성 통해 error 여부 확인 가능
            const data = await response.json();
            const repo = await response.json(); //repo 변수는 배열 객체
            insertComponent(data);
        } else {
            throw new Error("Github API request failed")
        }
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
    //레포지토리 정보 가져오기
function createRepoComponentByLength (array) {
    if (array.length === 0) {
        const emptyRepoNoti = document.createElement('span');
        emptyRepoNoti.classList.add('repo-list-element');
        emptyRepoNoti.innerHTML = "There is no repository";
        repoListContainer.append(emptyRepoNoti);
    } else if (array.length >= 1 && array.length <= 5) {
        for ( let i = 0 ; i < array.length; i++) {
            creatRepoComponent (array, i);
        }
    } else {
        for ( let i = 0 ; i < 5; i++) {
            creatRepoComponent (array, i);
        }
    } 
    }

function creatRepoComponent (array, i) {
    const listEl = document.createElement('li');
    
    const repoTitle = document.createElement('span');
    repoTitle.classList.add('repo-title');
    repoTitle.innerHTML = array[i].name;
    
    const repoActivityLevelContainer = document.createElement('div');
    repoActivityLevelContainer.classList.add('repo-activity-level-container');
    
    const repoActivityLevelStar = document.createElement('span');
    repoActivityLevelStar.classList.add('star');
    
    const repoActivityLevelWatcher = document.createElement('span');
    repoActivityLevelWatching.classList.add('watchiing');
    
    const repoActivityLevelFork = document.createElement('span');
    repoActivityLevelFork.classList.add('fork');
}


