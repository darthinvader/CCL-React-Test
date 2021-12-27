import Chat from "./components/Chat/Chat";
import ChatBubble from "./components/Chat/ChatBubble";
import ChatInput from "./components/Chat/ChatInput";
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
      <Chat>
        <ChatInput style={{ alignSelf: "center" }}></ChatInput>

        <ChatBubble>{"Hello"}</ChatBubble>
        <ChatBubble>
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus vel, provident sunt consequuntur quasi. Nobis cumque ratione blanditiis accusamus ab non qui necessitatibus? Numquam quae soluta cupiditate neque. Iure nemo earum asperiores? Facere odit perferendis sequi error quas, quos reiciendis vero velit vitae numquam aut alias dolor, harum est molestiae suscipit facilis voluptate aperiam ex perspiciatis in! Quia tempora, quo ea quidem veniam praesentium iure commodi consequuntur neque voluptatum laborum assumenda distinctio, soluta illum consectetur non quisquam exercitationem atque vitae, cumque quod fuga recusandae in! Voluptatibus, nisi? Unde, aperiam! Quod voluptas, labore delectus beatae inventore at voluptatibus perferendis porro!"
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
      </Chat>
    </div>
  );
}

export default App;
