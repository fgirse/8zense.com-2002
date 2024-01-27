import { UserProfile } from "@clerk/nextjs";
 
const UserProfilePage = () => (
  <div className="flex flex-col items-center lg;flex-row lg:justefine-around lg:items-center">
  <UserProfile path="/user-profile" routing="path" />
  </div>
);
 
export default UserProfilePage;