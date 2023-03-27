import { Routes, Route } from "react-router-dom";
import { Posts } from "./pages/Posts/Posts";
import { Post } from "./pages/Post/Post";
import { User } from "./pages/User/User";
import GlobalStyle from "./GlobalStyle";
import { TopBar } from "./components/TobBar/TopBar";
import { WrapperBody } from "./components/Wrapper/Wrapper.styles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <TopBar />
        <GlobalStyle />
        <WrapperBody>
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:id/comments" element={<Post />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
        </WrapperBody>
      </ThemeProvider>
    </>
  );
}
