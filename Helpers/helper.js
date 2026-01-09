/* ============================
   searchByName assertions
============================ */

function searchByName_assertHasDrinksArray(body) {
  if (!body || !Array.isArray(body.drinks)) {
    throw new Error("Expected response body to have a 'drinks' array");
  }
}

function searchByName_assertMinResults(body, min) {
  if (body.drinks.length < min) {
    throw new Error(
      `Expected at least ${min} drinks, got ${body.drinks.length}`
    );
  }
}

/* ============================
   searchByFirstLetter assertions
============================ */

function searchByFirstLetter_assertHasResults(body) {
  if (!Array.isArray(body.drinks)) {
    throw new Error("Expected drinks array for first letter search");
  }
}

function searchByFirstLetter_assertMinResults(body, min) {
  if (body.drinks.length < min) {
    throw new Error(
      `Expected at least ${min} drinks, got ${body.drinks.length}`
    );
  }
}

/* ============================
   lookupById assertions
============================ */

function lookupById_assertSingleResult(body) {
  if (!Array.isArray(body.drinks) || body.drinks.length !== 1) {
    throw new Error("Expected exactly one drink result");
  }
}

function lookupById_assertHasIdDrink(body) {
  if (!body.drinks[0].idDrink) {
    throw new Error("Expected idDrink field in response");
  }
}

/* ============================
   filterByIngredient assertions
============================ */

function filterByIngredient_assertHasResults(body) {
  if (!Array.isArray(body.drinks)) {
    throw new Error("Expected drinks array for ingredient filter");
  }
}

function filterByIngredient_assertMinResults(body, min) {
  if (body.drinks.length < min) {
    throw new Error(
      `Expected at least ${min} drinks, got ${body.drinks.length}`
    );
  }
}


function filterByIngredient_assertItemHasRequiredAttributes(body) {
  const drink = body.drinks[0];

  if (!drink.idDrink || !drink.strDrink || !drink.strDrinkThumb) {
    throw new Error(
      "Expected each drink to have idDrink, strDrink and strDrinkThumb"
    );
  }
}

function filterByIngredient_assertAllItemsHaveSameShape(body) {
  const keys = Object.keys(body.drinks[0]);

  const sameShape = body.drinks.every(drink =>
    keys.every(key => drink.hasOwnProperty(key))
  );

  if (!sameShape) {
    throw new Error("Expected all drinks to have the same response shape");
  }
}
/* ============================
   negative search assertions
============================ */

function searchNegative_assertNoResults(body) {
  if (body.drinks !== null) {
    throw new Error("Expected no drinks for negative search");
  }
}

/* ============================
   randomCocktail assertions
============================ */

function randomCocktail_assertSingleDrink(body) {
  if (!Array.isArray(body.drinks) || body.drinks.length !== 1) {
    throw new Error("Expected exactly one random drink");
  }
}

function randomCocktail_assertRequiredFieldsExist(body) {
  const drink = body.drinks[0];

  if (!drink.idDrink || !drink.strDrink) {
    throw new Error("Expected idDrink and strDrink to exist");
  }
}

function randomCocktail_assertHasAlcoholicAttribute(body) {
  const drink = body.drinks[0];

  if (!drink.hasOwnProperty("strAlcoholic")) {
    throw new Error("Expected strAlcoholic attribute to exist");
  }
}

function randomCocktail_assertHasAtLeastOneIngredient(body) {
  const drink = body.drinks[0];

  const hasIngredient = Object.keys(drink).some(
    key => key.startsWith("strIngredient") && drink[key]
  );

  if (!hasIngredient) {
    throw new Error("Expected at least one ingredient to be present");
  }
}


/* ============================
   popularCocktails assertions
============================ */

/* ============================
   latestCocktails assertions
============================ */

function latestCocktails_assertHasResults(body) {
  if (!Array.isArray(body.drinks) || body.drinks.length === 0) {
    throw new Error("Expected latest cocktails list");
  }
}

/* ============================
   listIngredients assertions
============================ */

function listIngredients_assertHasList(body) {
  if (!Array.isArray(body.drinks) || body.drinks.length === 0) {
    throw new Error("Expected ingredients list");
  }
}

function listIngredients_assertDrinksIsArray(body) {
  if (!Array.isArray(body.drinks)) {
    throw new Error("Expected drinks to be an array");
  }
}

function listIngredients_assertHasStrIngredient(body) {
  if (!body.drinks[0] || !body.drinks[0].strIngredient1) {
    throw new Error("Expected strIngredient1 attribute in drinks items");
  }
}

function listIngredients_assertContainsCoffee(body) {
  const found = body.drinks.some(
    item => item.strIngredient1 === "Coffee"
  );

  if (!found) {
    throw new Error("Expected ingredient Coffee to exist in list");
  }
}

/* ============================
   filterByAlcohol assertions
============================ */

function filterByAlcohol_assertHasResults(body) {
  if (!Array.isArray(body.drinks) || body.drinks.length === 0) {
    throw new Error("Expected drinks filtered by alcohol");
  }
}
module.exports = {
  ...module.exports,
  searchByName_assertHasDrinksArray,
  searchByName_assertMinResults,
  searchByFirstLetter_assertHasResults,
  searchByFirstLetter_assertMinResults,
  lookupById_assertSingleResult,
  lookupById_assertHasIdDrink,
  filterByIngredient_assertHasResults,
  filterByIngredient_assertMinResults,
  filterByIngredient_assertItemHasRequiredAttributes,
  filterByIngredient_assertAllItemsHaveSameShape,
  searchNegative_assertNoResults,
  randomCocktail_assertSingleDrink,
  latestCocktails_assertHasResults,
  listIngredients_assertHasList,
  listIngredients_assertDrinksIsArray,
  listIngredients_assertHasStrIngredient,
  listIngredients_assertContainsCoffee,
  filterByAlcohol_assertHasResults,
    randomCocktail_assertRequiredFieldsExist,
  randomCocktail_assertHasAlcoholicAttribute,
  randomCocktail_assertHasAtLeastOneIngredient
};
