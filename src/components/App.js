import {Routes, Route} from 'react-router-dom';
import { Homepage } from "./Homepage.js";
import { Settings } from "./Settings.js";
import ImageUploader from "./CreationPage.js";
import { Help } from "./Help";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/creation" element={<ImageUploader />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;