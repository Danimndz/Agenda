import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ListaPersonas from "../components/ListaPersonas";
import { fetchData } from "../Redux/actions/fetchData";

function MainContainer() {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleClick = () => {
    history.push("/form");
  };
  return (
    <div>
      <button onClick={handleClick}>Add</button>
      {persons && <ListaPersonas persons={persons} />}
    </div>
  );
}
export default MainContainer;
