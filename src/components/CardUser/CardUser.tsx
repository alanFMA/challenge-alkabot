import { Link } from "react-router-dom";
import { Author } from "./CardUser.styles";
import lupa from "../../assets/magnif.png";

export function CardUser({ user }: any) {
  return (
    <li key={user.id}>
      <Author>
        Author:{" "}
        <Link className="linkstation" state={user} to={`/user/${user.id}`}>
          {user.name}
          <img src={lupa} alt="" />
        </Link>
      </Author>
    </li>
  );
}
