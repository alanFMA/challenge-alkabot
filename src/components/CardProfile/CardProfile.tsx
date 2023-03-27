import {
  Container,
  Perfil,
  ProfileImg,
  ProfileInfo,
} from "./CardProfile.styles";
import ProfileImage from "./../../assets/profile-icon.svg";

export function CardProfile({ user }: any) {
  return (
    <ul key={user.id}>
      <Perfil>Perfil</Perfil>
      <Container>
        <ProfileImg src={ProfileImage} alt="Profile Image" />
        <ProfileInfo>
          <li>{user.name}</li>
          <li>
            Email: <a href={user.email}>{user.email}</a>
          </li>
          <li>Phone: {user.phone}</li>
          <li>Website: {user.website}</li>
          <li>Company Name: {user.company.name}</li>
        </ProfileInfo>
      </Container>
    </ul>
  );
}
