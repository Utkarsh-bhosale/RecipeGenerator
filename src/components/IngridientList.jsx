export default function IngridientList(props) {
  return (
    <section>
      <div className="mx-auto max-w-[560px]">
        <h2 className="text-[1.25rem] font-semibold mb-3">
          Ingredients on hand:
        </h2>

        <ul className="list-disc pl-6 mb-6">
          {props.ingridientsListItems}
        </ul>
      </div>

      {props.ingridientsListItems.length > 3 ? <div className="bg-[#F7EEDA] p-6 rounded-[10px] flex items-center justify-between">
        <div>
          <h3 className="text-[1.1rem] font-semibold mb-1">
            Ready for a recipe?
          </h3>
          <p className="text-[0.9rem] text-[#4B4B4B]">
            Generate a recipe from your list of ingredients.
          </p>
        </div>

        <button
          onClick={props.toggleRecipeShown}
          className="bg-[#EB6C31] text-white px-5 py-2 rounded-[6px]
                       text-[0.9rem] font-medium"
        >
          Get a recipe
        </button>
      </div> : null}

    </section>
  )
}