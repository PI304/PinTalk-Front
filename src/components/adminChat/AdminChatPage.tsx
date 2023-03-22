type userEmail = {
  userEmail: string | string[] | undefined;
};

const AdminChatPage = ({ userEmail }: userEmail) => {
  return <>{userEmail}</>;
};

export default AdminChatPage;
