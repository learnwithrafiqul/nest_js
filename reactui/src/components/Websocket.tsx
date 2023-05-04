import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

const Websocket = () => {
  const socket = useContext(WebsocketContext);
  const [datas, setData] = useState<any>([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("onMessage", (data) => {
      console.log(data);
      setData([...datas, data]);
    });
    return () => {
      console.log("Unregistered");

      socket.off("connect");
      socket.off("onMessage");
    };
  }, [socket, datas]);

  const [text, setText] = useState("");
  const handleSubmit = (e: any) => {
    socket.emit("newMessage", text);
    setText("");
  };
  return (
    <div>
      <div>
        <h1>Websocket components</h1>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
      <div className="">
        {datas.map((data: any, index: number) => (
          <h4 key={index}>
            {index + 1}----{">"}
            {JSON.stringify(data)}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Websocket;
