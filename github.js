class Github {
  constructor(){
    this.clientId = "a702d8baf477c5a970f7";
    this.clientSecret = "4a1baf29846ad4c294125147ef2c73003c251392";
    this.accessToken = "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";
    this.apiUrl = "https://api.github.com/users/";
    this.reposCount = 5;
    this.reposSortWay = 'created:asc'
  } 

  async fetchGithubInfo(user){
    try {
      const profileResponse = await fetch(this.apiUrl + user, {
        headers : {
          'Authorization' : `token ${this.accessToken}`}
      });
      const reposResponse = await fetch (
        this.apiUrl + user + '/repos'
        );
          
        if (profileResponse.ok && reposResponse.ok) {
          const profile = await profileResponse.json();
          const repos = await reposResponse.json();
          
          return {profile, repos};
        } else {
          throw new Error("Github API request failed");
        }
          
        } catch(error) {
          console.error(error);
          document.querySelector('.input-error').style.display = 'block';
          document.querySelector('.github-profile').style.display = 'none';
          document.querySelector('.github-repos').style.display = 'none';
        }
  }
}
// `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
// `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSortWay}&client_id=${this.clientId}&client_secret=${this.clientSecret}`