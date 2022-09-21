import NavBar from "../../components/navigation/NavBar";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
