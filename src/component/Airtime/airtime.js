import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
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
      let message = other;
      toast.success(message, { position: toast.POSITION.TOP_CENTER });
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [other, isError, message, navigate, dispatch, isSuccess]);

  const onsubmit = (data) => {
    dispatch(airtime(data));
  };

  return (
    <div className="box-main ggg">
      <div className="box">
        <div className="header boxi">
          <p style={{ fontSize: "30px", fontWeight: "400" }}>Buy Airtime</p>
        </div>
        {isLoading ? (
          <div className="meme">
            <Bars
              height="80"
              width="80"
              color="#111"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <form className="formt" onSubmit={handleSubmit(onsubmit)}>
            <label htmlFor="amount">
              Amount:
              <input
                {...register("amount", { required: "This is required" })}
                placeholder="Airtime Amount"
              />
            </label>
            <label htmlFor="Phone">
              Phone No.:
              <input
                {...register("phone", { required: "This is required" })}
                placeholder="Mobile No,"
              />
            </label>

            <label htmlFor="">
              <button>submit</button>
            </label>
          </form>
        )}
      </div>
    </div>
  );
  // )
};

export default Loan;
