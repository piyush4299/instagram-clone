import Header from "Components/Header";
import UserProfileDetails from "Components/UserProfileDetails";
import UserProfilePosts from "Components/UserProfilePosts";
import getUserData from "helpers/getUserData";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userName } = useParams();
  return (
    <>
      <Header />
      <div className="UserProfile">
        <UserProfileDetails userData={getUserData()} userName={userName} />
        <UserProfilePosts userData={getUserData()} userName={userName} />
      </div>
    </>
  );
}

export default UserProfile;
