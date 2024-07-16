import { ProfileImage, ProfileImageWrapper } from "src/app/shared/components/layouts/profile-image-view/style";

type ProfileImageType = {
  image: string;
}

function ProfileImageView({image}: ProfileImageType) {
  return (
    <ProfileImageWrapper
    >
      <ProfileImage image={image}/>
    </ProfileImageWrapper>
  );
}

export default ProfileImageView;
