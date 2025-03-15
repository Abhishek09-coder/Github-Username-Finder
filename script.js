 document.getElementById("searchButton").addEventListener("click", async function () {
    const username = document.getElementById("searchInput").value.trim();
    if (username === "") {
        alert("Please enter a GitHub username!");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`);
 
     if (!response.ok) {
         alert("User not found!");
         return;
     }
 
     const userData = await response.json();
 
     // Update UI with user data
     document.getElementById("avatar").src = userData.avatar_url;
     document.getElementById("name").textContent = userData.name || "No Name Provided";
     document.getElementById("bio").textContent = userData.bio || "No Bio Available";
    document.getElementById("followers").textContent = userData.followers;
     document.getElementById("repos").textContent = userData.public_repos;
// 
   document.getElementById("profileCard").style.display = "block";
 });
// 

