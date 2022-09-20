// datafetcher
const WP_API = "http://20.197.19.94/?graphql";

async function dataFetcher(query, { variables } = {}) {
  console.log("variable: " + variables);
  const res = await fetch(WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  return json;
}

export default dataFetcher;
