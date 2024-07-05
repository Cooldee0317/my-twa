import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "./hooks/useCounterContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <>
      <TonConnectButton />
      <div className="Card">
        <b>Counter Address</b>
        <div className="Hint">{address?.slice(0, 30) + "..."}</div>
      </div>

      <div className="Card">
        <b>Counter Value</b>
        <div>{value ?? "Loading..."}</div>
      </div>
      <button
        className={`Button ${connected ? "Active" : "Disabled"}`}
        onClick={() => {
          sendIncrement();
        }}
        disabled={!connected}
      >
        Increment
      </button>
    </>
  );
}

export default App;
