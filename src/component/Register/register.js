import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import { registerf, reset } from "../../features/register/regsplice";
import "./register.scss";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Reg, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.reg
  );
  // );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      let messageh = Reg.message;
      toast.success(messageh, { position: toast.POSITION.TOP_CENTER });
      navigate("/login");
    }
    dispatch(reset());
  }, [Reg, isError, message, navigate, dispatch, isSuccess]);

  const onsubmit = (data) => {
    dispatch(registerf(data));
  };

  return (
    <div className="box-main">
      <div className="box">
        <div className="header">
          <p>Register Here</p>
          <Link to="/">
            <h1>
              <FaHome />
            </h1>
          </Link>
        </div>
        {isLoading ? (
          <div className="demo">
            <RotatingLines
              strokeColor="black"
              strokeWidth="2"
              animationDuration="1.95"
              width="149"
              visible={true}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit(onsubmit)}>
            <label htmlFor="FirstName">
              FirstName:
              <input
                {...register("firstname", { required: "This is required" })}
                placeholder="FirstName"
              />
            </label>
            <label htmlFor="LastName">
              LastName:
              <input
                {...register("lastname", { required: "This is required" })}
                placeholder="LastName"
              />
            </label>
            <label htmlFor="Email">
              Email:
              <input
                {...register("email", { required: "This is required" })}
                placeholder="Email"
              />
            </label>
            <label htmlFor="Password">
              Password:
              <input
                {...register("password", { required: "This is required" })}
                placeholder="Password"
                type="password"
              />
            </label>
            <label htmlFor="Phone">
              Phone:
              <input
                {...register("phone", { required: "This is required" })}
                placeholder="Phone"
              />
            </label>
            <label htmlFor="Date Of Birth">
              Date Of Birth:
              <input
                {...register("dateOfBirth", { required: "This is required" })}
                type="date"
              />
            </label>
            <label htmlFor="">
              <button>submit</button>
            </label>
          </form>
        )}
        <span>
          Not registered <Link to="/register">click</Link>here to register
        </span>
      </div>
    </div>
  );
};

export default Form;
