import { AiFillCheckCircle } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { IconContext } from "react-icons";
import { Task } from "./Types";


const EditingForm = (props: { editItem: Function, task: Task }) => {

    const [name, setName] = useState(props.task.name);

    const makeTransfer = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        name !== "" ? props.editItem(name, props.task.id) : "";
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

export default EditingForm;
