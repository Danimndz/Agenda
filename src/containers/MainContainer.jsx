import React, { useEffect, useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FormModal } from "../components/FormModal";
import ListaPersonas from "../components/ListaPersonas";
import { fetchData } from "../Redux/actions/fetchData";
import { Button } from "../styled-components";

let cont = 1;
function MainContainer() {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  cont *= -1;
  const openModal = () => {
    setShowModal((value) => !value);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="main-div">
      {cont > 0 && showModal === false ? (
        <Button onClick={openModal}>
          <FaRegAddressCard size={40} color="grey" />
        </Button>
      ) : null}
      <FormModal
        cont={cont}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {persons && <ListaPersonas persons={persons} />}
    </div>
  );
}
export default MainContainer;
