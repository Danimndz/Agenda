import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { editUser } from "../Redux/actions/fetchData";

function PersonForm() {
  const { register, handleSubmit, errors } = useForm();
  const user = useLocation().state;
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(editUser(user.id, data));
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
          defaultValue={user.firstname}
        />
        {errors.firstname && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          name="lastname"
          ref={register({ required: true })}
          type="text"
          defaultValue={user.lastname}
        />
        {errors.lastname && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          name="age"
          ref={register({ required: true })}
          type="number"
          defaultValue={user.age}
        />
        {errors.age && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          name="phone"
          ref={register({ required: true })}
          type="text"
          defaultValue={user.phone}
        />
        {errors.phone && <p>This field is required</p>}
      </div>

      <div className="form-group">
        <label>Occupation</label>
        <input
          name="occupation"
          ref={register({ required: true })}
          type="text"
          defaultValue={user.occupation}
        />
        {errors.occupation && <p>This field is required</p>}
      </div>

      {/* <input
          name="id"
          ref={register()}
          type="hidden"
          defaultValue={(user.id)}
        /> */}

      <input type="submit" />
    </form>
  );
}

export default PersonForm;
