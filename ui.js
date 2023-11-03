class UI {
  constructor() {
    this.profileImg = document.querySelector('.col1 img');
    this.profileUrl = document.querySelector('.col1 a'); 
    this.infoCompany = document.querySelector('.company td:nth-child(2)');
    this.infoBlog = document.querySelector('.blog td:nth-child(2)');
    this.infoLocation = document.querySelector('.location td:nth-child(2)');
    this.infoSignUpDate = document.querySelector('.sign-up-date td:nth-child(2)');
    this.activityLevelRepo = document.querySelector('#repo');
    this.activityLevelGist = document.querySelector('#gist');
    this.activityLevelFollower = document.querySelector('#follower');
    this.activityLevelFollowing = document.querySelector('#following');
    this.repoListContainer = document.querySelector('#repo-list-container');
  }

  insertComponent(profile) {
    this.profileImg.src = profile.avatar_url;
    this.profileUrl.href = 'https://github.com/' + profile.login
    this.infoCompany.innerHTML = profile.company;
    this.infoBlog.innerHTML = profile.blog;
    this.infoLocation.innerHTML = profile.location;
    this.infoSignUpDate.innerHTML = profile.created_at;
    this.activityLevelRepo.innerHTML = "Public Repos: " + profile.public_repos;
    this.activityLevelGist.innerHTML = "Public Gists: " + profile.public_gists;
    this.activityLevelFollower.innerHTML = "Public Followers: " + profile.followers;
    this.activityLevelFollowing.innerHTML = "Public Following: " + profile.following;

    document.querySelector('.github-profile').style.display = 'flex';
    document.querySelector('.github-repos').style.display = 'block';
  }

  createRepoComponent(repos) { 
    repos.forEach((repo) => {
      const listEl = document.createElement('li');
      
      const repoTitle = document.createElement('span');
      repoTitle.classList.add('repo-title');
      repoTitle.innerHTML = repo.name;
      
      const repoActivityLevelContainer = document.createElement('div');
      repoActivityLevelContainer.classList.add('repo-activity-level-container');
      
      const repoActivityLevelStar = document.createElement('span');
      repoActivityLevelStar.classList.add('star');
      repoActivityLevelStar.innerHTML = "Stars: " + repo.stargazers_count;
      
      const repoActivityLevelWatching = document.createElement('span');
      repoActivityLevelWatching.classList.add('watching');
      repoActivityLevelWatching.innerHTML = "Watchers: " + repo.watchers_count;
      
      const repoActivityLevelFork = document.createElement('span');
      repoActivityLevelFork.classList.add('fork');
      repoActivityLevelFork.innerHTML = "Forks: " + repo.forks_count;
      
      //리스트 요소에 들어가야 하는 요소 삽입하기
      repoActivityLevelContainer.append(repoActivityLevelStar);
      repoActivityLevelContainer.append(repoActivityLevelWatching);
      repoActivityLevelContainer.append(repoActivityLevelFork);
      
      listEl.append(repoTitle);
      listEl.append(repoActivityLevelContainer);
      
      // console.log("error:"  + this.repoListContainer);
      this.repoListContainer.append(listEl); // this 빼먹었음
    }) 
  }
  clearProfile () {
    this.repoListContainer.innerHTML = ''
  }
}
// if (repos.length > 5) {
//   const repos = repos.slice(0,5);
// } 