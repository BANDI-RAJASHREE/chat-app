import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  const { userId } = useParams();
  const { users, setSelectedUser, getUsers } = useChatStore();

  useEffect(() => {
    const init = async () => {
      await getUsers();
      if (userId) {
        const latestUsers = useChatStore.getState().users || [];
        const matched = latestUsers.find((u) => u._id === userId);
        if (matched) setSelectedUser(matched);
      }
    };
    init();
  }, [userId, getUsers]);

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
