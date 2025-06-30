import Rukky from "../assets/rukky.jpeg";

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={Rukky} alt="profile" />
      <h3>Michael Omonedo</h3>
      <p>Frontend Developer | React Enthusiast</p>
    </div>
  );
}

export default ProfileCard;
