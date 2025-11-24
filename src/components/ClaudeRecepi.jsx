import Markdown from "react-markdown";
//import remarkGfm from "remark-gfm";

export default function ClaudeRecepi({ recipe }) {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Chef Claude Recommends:</h2>

      <Markdown
        components={{
          h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>,
          li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
          p: ({ children }) => <p className="mt-2">{children}</p>,
        }}
      >
        {recipe}
      </Markdown>

    </section>
  );
}
