import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { airtime, reset } from "../../features/loan/loansplice";

const Loan = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { other, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.other
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [other, isError, isLoading, message, navigate, dispatch, isSuccess]);

  const onsubmit = (data) => {
    console.log(data);
    dispatch(airtime(data));
  };

  return (
    <div className="box-main ggg">
      <div className="box">
        <div className="header boxi">
          <p style={{ fontSize: "30px", fontWeight: "400" }}>Buy Airtime</p>
        </div>
        <form className="formt" onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="amount">
            Amount:
            <input
              {...register("amount", { required: "This is required" })}
              placeholder="Amount to be loaned"
            />
          </label>

          <label htmlFor="">
            <button>submit</button>
          </label>
        </form>
      </div>
    </div>
  );
  // )
};

export default Loan;
