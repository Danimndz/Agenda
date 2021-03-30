import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { editUser, addUser } from "../Redux/actions/fetchData";

function PersonForm({ user }) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    user ? dispatch(editUser(user.id_persona, data)) : dispatch(addUser(data));
    Redirect();
  };
  const Redirect = () => {
    history.go(0);
  };

  return (
    <form className="formP" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>First Name</label>
        <input
          className="input"
          name="nombre"
          placeholder={errors.nombre ? "This field is required" : "type..."}
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.nombre}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          className="input"
          name="apellidos"
          placeholder={errors.apellidos ? "This field is required" : "type..."}
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.apellidos}
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          placeholder={errors.edad ? "This field is required" : "type..."}
          className="input"
          name="edad"
          ref={register({ required: true })}
          type="number"
          defaultValue={user && user.edad}
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          placeholder={errors.telefono ? "This field is required" : "type..."}
          className="input"
          name="telefono"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.telefono}
        />
      </div>

      <div className="form-group">
        <label>Ocupation</label>
        <input
          placeholder={
            errors.ocupacion ? <p> This field is required</p> : "type..."
          }
          className="input"
          name="ocupacion"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.ocupacion}
        />
      </div>

      <button className="btnSubmit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default PersonForm;
