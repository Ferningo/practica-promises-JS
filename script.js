const nameColumn = document.getElementsByClassName("name");
const lastNameColumn = document.getElementsByClassName("last-name");
const emailColumn = document.getElementsByClassName("email");
const avatarColumn = document.getElementsByClassName("avatar");

let timeToLive = parseInt(prompt("Tiempo de vida en segundos")) * 1000;
let myDate = new Date().getTime();

const populateTable = () =>
  fetch("https://reqres.in/api/users?delay=1").then((res) =>
    res.json().then((data) => {
      const userData = data.data;

      for (let i = 0; i < userData.length; i++) {
        nameColumn[i].innerHTML = userData[i].first_name;
        lastNameColumn[i].innerHTML = userData[i].last_name;
        emailColumn[i].innerHTML = userData[i].email;
        avatarColumn[i].src = userData[i].avatar;
      }
    })
  );

//Returns wether or not the time to live timer has expired.
const enoughTimePassed = () => {
  const currentTime = new Date().getTime();
  if (currentTime >= myDate.getTime() + timeToLive) {
    return true;
  }
  return false;
};
