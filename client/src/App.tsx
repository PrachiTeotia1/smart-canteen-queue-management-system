import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { AppShell } from "./components/layout/AppShell/AppShell";
import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import StyleGuide from "./pages/StyleGuide/StyleGuide";

function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#1F2937]">
          {title}
        </h1>

        <p className="mt-2 text-[#6B7280]">
          This section is coming next.
        </p>
      </div>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<Menu />} />

          <Route
            path="/style-guide"
            element={<StyleGuide />}
          />
          <Route
            path="/queue"
            element={<ComingSoonPage title="Queue" />}
          />

          <Route
            path="/orders"
            element={<ComingSoonPage title="Orders" />}
          />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;