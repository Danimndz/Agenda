import React from "react";
import { Button, Table } from "react-bootstrap";
// import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
// import PersonForm from "./PersonForm";

const ListaPersonas = ({ persons }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>last name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Occupation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person, idx) => {
          return (
            <tr key={idx}>
              <td>{person.id}</td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{person.age}</td>
              <td>{person.phone}</td>
              <td>{person.occupation}</td>
              <td>
                <Link to={{ pathname: "/form", state: person }}>
                  <Button> Edit </Button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListaPersonas;
