const github = new Github;
const ui = new UI;

const searchBtn = document.querySelector('form input[type = "button"]');
const inputBar = document.querySelector('form input[type = "text"]');




searchBtn.addEventListener('click', (e) => {
  const userIdValue = inputBar.value;
  ui.clearProfile();
  github.fetchGithubInfo(userIdValue).then(data => { 
    ui.insertComponent(data.profile);
    ui.createRepoComponent(data.repos);
  })
});
