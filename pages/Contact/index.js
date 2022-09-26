import ContactUs from "../../components/contact/Contact";
import { CONTACTPAGE } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";

function Contact(props) {
  console.log("&&&&&&&&&&&&&&&&&");
  console.log(props.all_Posts);
  return <ContactUs />;
}

export default Contact;

export async function getStaticProps() {
  const response = await dataFetcher(CONTACTPAGE);
  console.log(response);
  const all_Posts = response.data;
  // console.log("All posts...  " + all_Posts);
  return {
    props: { all_Posts },
  };
}
