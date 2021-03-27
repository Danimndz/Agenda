import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { editUser,addUser } from "../Redux/actions/fetchData";

function PersonForm() {
  const { register, handleSubmit, errors } = useForm();
  const user = useLocation().state;
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    user ? dispatch(editUser(user.id, data)) : dispatch(addUser(data));
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>First Name</label>
        <input
          name="firstname"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.firstname}
        />
        {errors.firstname && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          name="lastname"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.lastname}
        />
        {errors.lastname && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          name="age"
          ref={register({ required: true })}
          type="number"
          defaultValue={user && user.age}
        />
        {errors.age && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          name="phone"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.phone}
        />
        {errors.phone && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Occupation</label>
        <input
          name="occupation"
          ref={register({ required: true })}
          type="text"
          defaultValue={user && user.occupation}
        />
        {errors.occupation && <p>This field is required</p>}
      </div>

      <input type="submit" />
    </form>
  );
}

export default PersonForm;
