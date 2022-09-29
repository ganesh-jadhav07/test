// datafetcher
const WP_API = "http://20.193.137.229/?graphql";
import { TOKEN_QUERY } from "./api";

export async function tokenGenerator(query, { variables } = {}) {
  try {
    const res = await fetch(WP_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();
    // console.log("................    " + json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function dataFetcher(query, { variables } = {}) {
  const tokenData = await tokenGenerator(TOKEN_QUERY);
  const token = await tokenData.data.login.refreshToken;

  try {
    const res = await fetch(WP_API, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    return json;
  } catch (err) {
    console.log("............", err);
  }
}

export default dataFetcher;
