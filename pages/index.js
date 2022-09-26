import Home from "./Home/index";
import dataFetcher from "../lib/wordpress/dataFetcher";
import { DEMO } from "../lib/wordpress/api";

export default function index(props) {
  return <Home />;
}

//fetch data from wordpress server
// export async function getStaticProps() {
//   const response = await dataFetcher(DEMO);
//   console.log(response);
//   const all_Posts = response.data;
//   console.log(all_Posts);
//   return {
//     props: { all_Posts },
//   };
// }
