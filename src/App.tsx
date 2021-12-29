import { ClToast } from "@enreach/core-component-library-react";
import Chat from "./components/Chat/Chat";
import ChatBubble from "./components/Chat/ChatBubble";
import ChatInput from "./components/Chat/ChatInput";
import Topbar from "./components/Chat/Topbar";

function App() {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "content-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chat
        topBar={<Topbar></Topbar>}
        input={<ChatInput></ChatInput>}
        toasts={
          <ClToast
            style={{
              position: "absolute",
              right: "50%",
              transform: "translateX(50%)",
            }}
            text="HELLO"
            duration={1000}
          />
        }
      >
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus vel, provident sunt consequuntur quasi. "
          }
        </ChatBubble>
        <ChatBubble
          style={{
            fontSize: 50,
            alignSelf: "end",
          }}
        >
          {"Hello"}
        </ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>{"Hello"}</ChatBubble>
      </Chat>
    </div>
  );
}

export default App;
