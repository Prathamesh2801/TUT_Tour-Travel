import RootLayout from "./routes/rootLayout";
import {Toaster} from 'react-hot-toast'
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <RootLayout />

    </>
  );
}
