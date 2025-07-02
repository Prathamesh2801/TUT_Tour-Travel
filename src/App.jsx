import RootLayout from "./routes/rootLayout";

import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
export default function App() {
  return (
    <>
      <RootLayout />
    </>
  );
}
