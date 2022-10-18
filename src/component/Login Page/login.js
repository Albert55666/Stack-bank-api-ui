import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { login, reset } from "../../features/auth/authSlice";

const Loginf = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  // );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      let message = `welcome to stack bank ${user.name}`;
      toast.success(message, { position: toast.POSITION.TOP_CENTER });
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isError, message, navigate, dispatch, isSuccess]);

  const onsubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="box-main">
      <div className="box">
        <div className="header">
          <p>Login Here</p>
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
          <>
            <form onSubmit={handleSubmit(onsubmit)}>
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
              <label htmlFor="">
                <button>submit</button>
              </label>
            </form>
            <span>
              Not registered <Link to="/register">click</Link>here to register
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Loginf;
