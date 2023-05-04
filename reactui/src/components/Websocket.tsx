import { useContext, useEffect } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

const Websocket = () => {
  const socket = useContext(WebsocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("onMessage", (data) => {
      console.log(data);
    });
    return () => {
      console.log("Unregistered");

      socket.off("connect");
      socket.off("onMessage");
    };
  }, [socket]);
  return (
    <div>
      <div>
        <h1>Websocket components</h1>
      </div>
    </div>
  );
};

export default Websocket;
