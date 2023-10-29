// Obtén el contenedor de los pétalos
const petalsContainer = document.querySelector(".petals");

// Número de pétalos que deseas crear
const numberOfPetals = 15; // Puedes ajustar este valor según tu preferencia

// Genera los pétalos y aplícales las transformaciones
for (let i = 0; i < numberOfPetals; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  // Aplica la rotación en función del índice para distribuir los pétalos alrededor del círculo
  const rotation = (i / numberOfPetals) * 360;
  petal.style.transform = `rotate(${rotation}deg) translateY(-70px)`;

  petalsContainer.appendChild(petal);
}
document.addEventListener("DOMContentLoaded", function () {
  duplicarFlor();
});

// Obtén el contenedor de los pétalos
const petalsContainer2 = document.querySelector(".petals2");

// Número de pétalos que deseas crear
const numberOfPetals2 = 3; // Puedes ajustar este valor según tu preferencia

// Genera los pétalos y aplícales las transformaciones
for (let i = 0; i < numberOfPetals; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal2");

  // Aplica la rotación en función del índice para distribuir los pétalos alrededor del círculo
  const rotation = (i / numberOfPetals) * 360;
  petal.style.transform = `rotate(${rotation}deg) translateY(-50px)`;

  petalsContainer.appendChild(petal);
}
document.addEventListener("DOMContentLoaded", function () {
  duplicarFlor();
});

// Obtén el contenedor de los pétalos
const petalsContainer3 = document.querySelector(".petals3");

// Número de pétalos que deseas crear
const numberOfPetals3 = 11; // Puedes ajustar este valor según tu preferencia

// Genera los pétalos y aplícales las transformaciones
for (let i = 0; i < numberOfPetals; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal3");

  // Aplica la rotación en función del índice para distribuir los pétalos alrededor del círculo
  const rotation = (i / numberOfPetals) * 360;
  petal.style.transform = `rotate(${rotation}deg) translateY(-60px)`;

  petalsContainer.appendChild(petal);
}
document.addEventListener("DOMContentLoaded", function () {
  duplicarFlor();
});

// Obtén el contenedor de los pétalos
const petalsContainer4 = document.querySelector(".petals4");

// Número de pétalos que deseas crear
const numberOfPetals4 = 11; // Puedes ajustar este valor según tu preferencia

// Genera los pétalos y aplícales las transformaciones
for (let i = 0; i < numberOfPetals; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal4");

  // Aplica la rotación en función del índice para distribuir los pétalos alrededor del círculo
  const rotation = (i / numberOfPetals) * 360;
  petal.style.transform = `rotate(${rotation}deg) translateY(-60px)`;

  petalsContainer.appendChild(petal);
}
document.addEventListener("DOMContentLoaded", function () {
  duplicarFlor();
});

// Obtén el contenedor de los pétalos
const petalsContainer5 = document.querySelector(".petals5");

// Número de pétalos que deseas crear
const numberOfPetals5 = 11; // Puedes ajustar este valor según tu preferencia

// Genera los pétalos y aplícales las transformaciones
for (let i = 0; i < numberOfPetals; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal5");

  // Aplica la rotación en función del índice para distribuir los pétalos alrededor del círculo
  const rotation = (i / numberOfPetals) * 360;
  petal.style.transform = `rotate(${rotation}deg) translateY(-70px)`;

  petalsContainer.appendChild(petal);
}
document.addEventListener("DOMContentLoaded", function () {
  duplicarFlor();
});

function showImage() {
  var image = document.getElementById("flowerImage");
  image.style.opacity = "1";
}

function hideImage() {
  var image = document.getElementById("flowerImage");
  image.style.opacity = "0";
}
