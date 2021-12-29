import {
  ClIconButton,
  ClTextField,
} from "@enreach/core-component-library-react";

interface Props {
  style?: React.CSSProperties;
}

const ChatInput: React.FC<Props> = ({ style }) => {
  style = {
    ...style,
  };
  return (
    <div
      style={{
        display: "flex",
        justifySelf: "flex-end",
        alignItems: "center",
        justifyItems: "center",
        margin: 8,
        maxHeight: "50px",
        flex: "1 1 auto",
      }}
    >
      {/* <ClIconButton icon-name="communication--device--phone"></ClIconButton> */}
      <ClTextField
        type="text"
        placeholder="Type In A Response"
        style={style}
      ></ClTextField>
    </div>
  );
};
export default ChatInput;
