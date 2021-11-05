import MainFrame from './main-frame';
import VideoGrid from './video-grid';
import Footer from './footer';
//
import './App.scss';

const contactsData = {
    city: 'г. Москва',
    phone: '8-000-000-0000',
    email: 'prod.kot@gmail.com',
    instagram: '@prod.kot',
}

function App() {
  return (
    <div className="App">
      <MainFrame />
      <VideoGrid />
      <Footer contacts={contactsData}/>
    </div>
  );
}

export default App;
