import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";

// Secondary routes are split into their own chunks so the landing page
// ships the smallest possible bundle.
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const RssPage = lazy(() => import("./pages/RssPage"));

function App() {
  useTheme();

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/rss" element={<RssPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
