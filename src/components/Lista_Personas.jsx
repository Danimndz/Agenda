import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/actions/fetchData";

const Lista_Personas = (props) => {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
          {persons.map((person,idx)=>{
            return(
              <tr key={idx}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.last_name}</td>
              <td>{person.age}</td>
              <td>{person.phone}</td>
              <td>{person.occupation}</td>
              <td>
                <Button>Edit</Button>
              </td>
              
            </tr>
            );
          })}
        </tbody>
      </Table>

  );
};

export default Lista_Personas;
