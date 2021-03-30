import React, { useState } from "react";
import { FormModal } from "../components/FormModal";
import {
  FaEdit,
  FaFileCsv,
  FaPhoneAlt,
  FaSortNumericUp,
  FaUserAlt,
} from "react-icons/fa";
let data = {};
const ListaPersonas = ({ persons }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = (person) => {
    data = person;
    setShowModal((value) => !value);
  };

  return (
    <div className="div-container">
      <FormModal
        person={data}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <table className="content-table">
        <thead>
          <tr>
            <th> ID</th>
            <th>
              <FaUserAlt size={15} /> Name
            </th>
            <th>
              <FaUserAlt size={15} /> Last Name
            </th>
            <th>
              {" "}
              <FaSortNumericUp size={15} /> Age
            </th>
            <th>
              {" "}
              <FaPhoneAlt size={15} /> Phone
            </th>
            <th>
              <FaFileCsv size={15} /> Occupation
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, idx) => {
            return (
              <tr key={idx}>
                <td>{person.id_persona}</td>
                <td>{person.nombre}</td>
                <td>{person.apellidos}</td>
                <td>{person.edad}</td>
                <td>{person.telefono}</td>
                <td>{person.ocupacion}</td>
                <td>
                  <button className="editBtn" onClick={() => openModal(person)}>
                    <FaEdit size={20} color="grey" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPersonas;
