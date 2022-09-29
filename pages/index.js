import Home from "./Home";
export default function Home1() {
  return <Home />;
}

fetch("http://20.193.137.229/?graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `mutation LoginUser { 
      login( input: { 
        clientMutationId: "uniqueId", 
        username: "bluepineapple_user", 
        password: "Bluepineapple@123" 
      } ) { 
        refreshToken 
      } 
    } 
    `,
  }),
})
  .then((res) => res.json())
  .then((res) => console.log(res.data));
