const nameColumn = document.getElementsByClassName("name");
const lastNameColumn = document.getElementsByClassName("last-name");
const emailColumn = document.getElementsByClassName("email");

const myData = fetch("https://reqres.in/api/users?delay=1").then((res) =>
  res.json().then((data) => {
    const userData = data.data;

    for (let i = 0; i < userData.length; i++) {
      nameColumn[i].innerHTML = userData[i].first_name;
      lastNameColumn[i].innerHTML = userData[i].last_name;
      emailColumn[i].innerHTML = userData[i].email;
    }
  })
);
