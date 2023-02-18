import MainFrame from './components/main-frame';
import VideoGrid from './components/video-grid';
import Footer from './components/footer';
import Header from './modules/Header';

import './main.scss';
import { contactsData } from './constants/credentials';

function App() {
  return (
    <div className="App">
      <Header />
      <MainFrame />
      <VideoGrid />
      <Footer contacts={contactsData} />
    </div>
  );
}

export default App;
