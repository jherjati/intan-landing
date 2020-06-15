import Nav from "../components/Nav";
import Sponsors from "../components/Sponsors";
import Keunggulan from "../components/Keunggulan";
import Fitur from "../components/Fitur";
import Monitoring from "../components/Monitoring";
import FiturMonitoring from "../components/FiturMonitoring";
import Download from "../components/Download";
import Peduli from "../components/Peduli";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function IndexPage() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Sponsors />
      <Keunggulan />
      <Fitur />
      <Monitoring />
      <FiturMonitoring />
      <Download />
      <Peduli />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
}
