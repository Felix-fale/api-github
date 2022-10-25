btn.onclick = () => {
  fetch("https://api.github.com/users/" + champ.value) // maniere d'appeler un id (a eviter)
    .then((reponse) => reponse.json())
    .then((data) => {
      output.textContent = "";
      output.textContent = `Compte de ${data.name}`;
      const img = document.createElement("img");
      img.src = data.avatar_url;
      output.appendChild(img);
    });
};

// Et bien sur j'ai pas styliser l'exo donc le visuel est pas top
