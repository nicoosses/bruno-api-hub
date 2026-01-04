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

/* ============================
   negative search assertions
============================ */

function searchNegative_assertNoResults(body) {
  if (body.drinks !== null) {
    throw new Error("Expected no drinks for negative search");
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
  searchNegative_assertNoResults
};
