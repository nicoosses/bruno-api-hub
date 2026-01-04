function assertHasDrinksArray(body) {
  if (!body || !Array.isArray(body.drinks)) {
    throw new Error("Expected response body to have a 'drinks' array");
  }
}

function assertMinResults(body, min) {
  if (body.drinks.length < min) {
    throw new Error(
      `Expected at least ${min} drinks, got ${body.drinks.length}`
    );
  }
}

module.exports = {
  assertHasDrinksArray,
  assertMinResults
};
