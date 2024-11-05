import MainLayout from '../layouts/MainLayout';
import LandingSection from '../components/LandingSection';
import About from '../components/About';
import ArticleSection from '../components/ArticleSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <MainLayout>
      <LandingSection />
      <About />
      <ArticleSection />
      <Footer />
    </MainLayout>
  );
};

export default Home;
