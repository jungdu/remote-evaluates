import { Textarea } from "@chakra-ui/react"
import { useState } from "react";
import socket from "../util/socket";

export default function ConsoleInput() {
  const [command, setCommand] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      console.log("Enter key pressed");
      socket.emit("command", command);
      setCommand("");
      event.preventDefault();
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommand(event.target.value);
  }

  return (
    <div>
      <Textarea 
        placeholder="Enter your command here" 
        value={command}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}