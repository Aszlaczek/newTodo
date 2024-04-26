import { AiFillCheckCircle } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { IconContext } from "react-icons";
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
        <IconContext.Provider value={{ className: 'icons' }}>
          <AiFillCheckCircle />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default Form;
