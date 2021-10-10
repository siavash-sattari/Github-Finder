let github = new Github();

// Search Input

let searchInput = document.querySelector("#searchUser");

// add event listener

searchInput.addEventListener("keyup", (e) => {
  let username = e.target.value;
  if (username !== "") {
    // get profile form git
    github.getUser(username).then((data) => {
      if (!data.profile.message) {
        // show profile in webpage
      } else {
        // show alert
      }
    });
  } else {
    // clear profile from webpage
  }
});
