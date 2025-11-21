import React from "react"

export default function MainContent() {

  const [ingridients, setIngridients] = React.useState([])
  const [recipeShown, setRecipeShown] = React.useState(false)

  const ingridientsListItems = ingridients.map(ingridient => (
    <li key={ingridient}>{ingridient}</li>
  ))

  function addIngridient(formData) {
    const newIngridient = formData.get("ingridient")
    setIngridients(prev => [...prev, newIngridient])
  }

  function toggleRecipeShown() {
    setRecipeShown(prevShown => !prevShown)
  }

  return (
    <main className="pt-[30px] px-[30px] pb-[10px] max-w-[800px] mx-auto">

      <form
        action={addIngridient}
        className="flex justify-center gap-[12px] h-[38px] mb-6"
      >
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingridient"
          className="rounded-[6px] border border-[#D1D5DB] py-[9px] px-[13px]
                     shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
                     grow max-w-[400px] min-w-[150px]"
        />

        <button
          className="font-inter rounded-[6px] bg-[#141413] text-[#FAFAF8]
                     before:content-['+'] w-[150px] text-[0.875rem] font-[500]
                     flex items-center justify-center gap-1"
        >
          Add ingredient
        </button>
      </form>

      <section>
        <div className="mx-auto max-w-[560px]">
          <h2 className="text-[1.25rem] font-semibold mb-3">
            Ingredients on hand:
          </h2>

          <ul className="list-disc pl-6 mb-6">
            {ingridientsListItems}
          </ul>
        </div>

        {ingridientsListItems.length > 3 ? <div className="bg-[#F7EEDA] p-6 rounded-[10px] flex items-center justify-between">
          <div>
            <h3 className="text-[1.1rem] font-semibold mb-1">
              Ready for a recipe?
            </h3>
            <p className="text-[0.9rem] text-[#4B4B4B]">
              Generate a recipe from your list of ingredients.
            </p>
          </div>

          <button
            onClick={toggleRecipeShown}
            className="bg-[#EB6C31] text-white px-5 py-2 rounded-[6px]
                       text-[0.9rem] font-medium"
          >
            Get a recipe
          </button>
        </div> : null}

      </section>
      {recipeShown ? <section>
        <h2>Chef Claude Recommends:</h2>
        <article className="suggested-recipe-container" aria-live="polite">
          <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
          <h3>Beef Bolognese Pasta</h3>
          <strong>Ingredients:</strong>
          <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
          </ul>
          <strong>Instructions:</strong>
          <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
          </ol>
        </article>
      </section> : null}
    </main>
  )
}
