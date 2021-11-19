//replace with your user:
const GITHUB_URL = "https://api.github.com/users/annde1";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById("myName");
    myName.innerText = data.login;
    console.log(data.login)
  });


const profile = document.getElementById("profile-image");

profile.addEventListener("mouseenter", function() {
  profile.classList.add("color");
});

profile.addEventListener("click", function() {
  profile.classList.add("spin");
});

profile.addEventListener("mouseleave", function() {
  profile.classList.remove("color");
  profile.classList.remove("spin");
});


