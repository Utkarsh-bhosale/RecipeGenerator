export default function ClaudeRecepi(props) {
  let recipe = props.getRecipe;
  return <section>
    <h2>Chef Claude Recommends:</h2>
    {props.recipe}
  </section>
}