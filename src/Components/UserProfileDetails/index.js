import formatInK from "helpers/formatInK";
import "./style.css";

function UserProfileDetails({ userData, userName }) {
  return (
    <>
      <div className="UserProfileDetails__UpperSection">
        <div className="UserProfileDetails__image">
          <img src={userData[userName].profileImageUrl} alt="ProfileImage" />
        </div>
        <div className="UserProfileDetails__followDetails">
          <div className="UserProfileDetails__postsDetail">
            <p className="UserProfileDetails__totalPosts">
              {formatInK(userData[userName].posts.length)}
            </p>
            <p className="UserProfileDetails__ctaText">posts</p>
          </div>
          <div className="UserProfileDetails__followersDetail">
            <p className="UserProfileDetails__totalFollowers">
              {formatInK(userData[userName].followers)}
            </p>
            <p className="UserProfileDetails__ctaText">Followers</p>
          </div>
          <div className="UserProfileDetails__followingDetail">
            <p className="UserProfileDetails__totalFollowing">
              {formatInK(userData[userName].following)}
            </p>
            <p className="UserProfileDetails__ctaText">Following</p>
          </div>
        </div>
      </div>
      <div className="UserProfileDetails__LowerSection">
        <div className="UserProfileDetails__Bio">
          <div className="UserProfileDetails__userBioData">
            <p className="UserProfileDetails__name">
              {userData[userName].name}
            </p>
            <p className="UserProfileDetails__description">
              {userData[userName].bio.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileDetails;
