import React from "react"
import ClaudeRecepi from "./components/ClaudeRecepi"
import IngridientList from "./components/IngridientList"

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

      {ingridients.length > 0 && <IngridientList ingridientsListItems={ingridientsListItems} toggleRecipeShown={toggleRecipeShown} />}

      {recipeShown ? <ClaudeRecepi /> : null}
    </main>
  )
}
