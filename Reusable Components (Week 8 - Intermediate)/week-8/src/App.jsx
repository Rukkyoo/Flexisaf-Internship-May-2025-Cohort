import './App.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import SkillList from './components/SkillList';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ProfileCard />
      <ThemeToggle />
      <h3 style={{ textAlign: 'center' }}>My Skills</h3>
      <SkillList />
      <h3 style={{ textAlign: 'center' }}>Contact Me</h3>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
