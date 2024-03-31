import { useCallback, useState } from "react";
import { data } from "../../../../../data.js";
import List from "./List";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      console.log(newPeople);
      setPeople(newPeople);
    },
    [people]
  );
  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>

      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;