async function loadUsers() {
    const response = await fetch("https://api.nationalize.io/?name=michael");
    const users = await response.json();
  
    return users;
  }
  document.addEventListener("DOMContentLoaded", async () => {
    let users = [];
  
    try {
      users = await loadUsers();
    } catch (error) {
      console.log("Error");
      console.log(error);
    }
  
    console.log(users.country[0]);
    
    const realdata = users.country[0];
    const realdata2 = users.country[1];
  
    document.getElementById(
      "first"
    ).innerHTML = `Name:${users.name} <br><br>First Country id:${realdata.country_id} <br> Probability:${realdata.probability}<br><br>
    <br> Second Country id:${realdata2.country_id} <br> Probability:${realdata2.probability}
    `
    ;
  });