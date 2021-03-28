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
    user ? dispatch(editUser(user.id, data)) : dispatch(addUser(data));
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
          name="firstname"
          placeholder={errors.firstname ? "This field is required" : "type..."}
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.firstname}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          className="input"
          name="lastname"
          placeholder={errors.lastname ? "This field is required" : "type..."}
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.lastname}
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          placeholder={errors.age ? "This field is required" : "type..."}
          className="input"
          name="age"
          ref={register({ required: true })}
          type="number"
          defaultValue={user && user.age}
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          placeholder={errors.phone ? "This field is required" : "type..."}
          className="input"
          name="phone"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.phone}
        />
      </div>

      <div className="form-group">
        <label>Occupation</label>
        <input
          placeholder={
            errors.occupation ? <p> This field is required</p> : "type..."
          }
          className="input"
          name="occupation"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.occupation}
        />
      </div>

      <button className="btnSubmit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default PersonForm;
