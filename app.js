const github = new Github;
const ui = new UI;

const searchBtn = document.querySelector('form input[type = "button"]');
const inputBar = document.querySelector('form input[type = "text"]');


searchBtn.addEventListener('click', (e) => {
  const userIdValue = inputBar.value; //왜지????? 대체 왜 되는거지????
  ui.clearProfile();
  github.fetchGithubInfo(userIdValue).then(data => {
    ui.insertComponent(data.profile);
    ui.createRepoComponent(data.repos);
  })
});
