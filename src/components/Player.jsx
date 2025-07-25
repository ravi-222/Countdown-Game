import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);

  const handleClick = () => {
    setName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
