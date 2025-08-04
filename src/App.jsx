import FacebookLogin from "./components/FacebookLogin";
import { FacebookProvider } from 'react-facebook';

function App() {
  return (
    <FacebookProvider appId="1069741248653425">
      <FacebookLogin />
    </FacebookProvider>
  );
}

export default App;
