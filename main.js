const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

const mealName = document.getElementById('mealName');
const mealImage = document.getElementById('mealImage');
const mealInstruction = document.getElementById('mealInstruction');
const mealVideo = document.getElementById('mealVideo');

async function getMeal() {
    let result = await fetch(url);
    let data = await result.json();

    displayMeal(data);
}

  function displayMeal(data) {
      console.log(data);
      mealName.innerText = data.meals[0].strMeal;
      mealImage.src = data.meals[0].strMealThumb;
      mealInstruction.innerText = data.meals[0].strInstructions;
     
  }


  mealBtn.addEventListener('click', getMeal);
