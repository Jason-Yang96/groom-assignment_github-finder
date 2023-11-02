const github = new Github;
const ui = new UI;

const searchBtn = document.querySelector('form input[type = "button"]');
const inputBar = document.querySelector('form input[type = "text"]');

const userIdValue = inputBar.value;

searchBtn.addEventListener('click', (e) => {
  ui.clearProfile();

  github.fetchGithubInfo(userIdValue).then(data => {
    ui.insertComponent(data.profile);
    ui.createRepoComponent(data.repos);
  })
});
