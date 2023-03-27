import { Link } from "react-router-dom";
import { TitleTopBar, Topbar } from "./TopBar.styles";

function scrollToTop() {
  const currentPosition = window.pageYOffset;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 8);
  }
}

export function TopBar() {
  return (
    <Topbar>
      <Link to={`/`} onClick={scrollToTop}>
        <TitleTopBar>Página Inicial</TitleTopBar>
      </Link>
    </Topbar>
  );
}
