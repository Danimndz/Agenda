import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListaPersonas from "../components/ListaPersonas";
import { fetchData } from "../Redux/actions/fetchData";

function MainContainer() {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return <div>{persons && <ListaPersonas persons={persons} />}</div>;
}
export default MainContainer;
