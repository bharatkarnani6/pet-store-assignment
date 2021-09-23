import logo from './logo.svg';
import './App.css';
import Headers from './Component/Header/header';
import Banner from './Component/banner/banner';
import Services from './Component/ourServices/services';
import ContactUs from './Component/contactus/contactus';
import Footer from './Component/footer/footer';
function App() {
  return (
    <div>
      <Headers></Headers>
      <Banner></Banner>
      <Services></Services>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
