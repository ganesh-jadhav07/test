import ContactUs from "../../components/contact/Contact";
import { CONTACTPAGE } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";

function Contact(props) {
  return <ContactUs contacts={props.all_Posts} />;
}

export default Contact;

export async function getStaticProps() {
  const response = await dataFetcher(CONTACTPAGE);
  const all_Posts = response.data;
  return {
    props: { all_Posts },
  };
}
