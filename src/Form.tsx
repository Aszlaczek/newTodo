import { FormEvent, useState } from "react";
import add_symbol from "./assets/add_FILL0_wght400_GRAD0_opsz24.svg";
const Form = (props: { sendData: Function }) => {
  const [name, setName] = useState("");
  const makeTransfer = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    name !== "" ? props.sendData(name) : "";
    setName("");
  };
  return (
    <form onSubmit={makeTransfer}>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">
        <img src={add_symbol} alt="add" />
      </button>
    </form>
  );
};

export default Form;
