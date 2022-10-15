import React from "react";
import { useState } from "react";
import "./transfer.scss";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { preTransfer, reset } from "../../features/bank/bankslice";
import { resety, transfer } from "../../features/send/sendslice";

const Transfer = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { bank, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.bank
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/transfer");
      setName(bank.firstname + " " + bank.lastname);
    }
    dispatch(reset());
  }, [bank, isError, isLoading, message, navigate, dispatch, isSuccess]);

  const { send, isErr, isSucc, isLoad, mess } = useSelector(
    (state) => state.send
  );

  useEffect(() => {
    if (isErr) {
      toast.error(mess);
    }
    if (isSucc) {
      navigate("/dashboard");
    }
    dispatch(resety());
  }, [send, isErr, isLoad, mess, navigate, dispatch, isSucc]);

  const onsubmit = (data) => {
    dispatch(transfer(data));
  };

  return (
    <div className="box-main ggg">
      <div className="box">
        <div className="header boxi">
          <p style={{ fontSize: "30px", fontWeight: "400" }}>Transfer</p>
        </div>
        <form className="formt" onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="amount">
            Amount:
            <input {...register("amount")} placeholder="amount" />
          </label>
          <label htmlFor="AccountNumber">
            Acc.No:
            <input
              {...register("accountnumber", {
                onChange: (e) => {
                  let rr = e.target.value;
                  if (rr.length === 11) {
                    let dd = { [e.target.name]: parseInt(e.target.value) };
                    console.log(dd);
                    dispatch(preTransfer(dd));
                  }
                },
              })}
              placeholder="Account Number"
              type="number"
            />
          </label>
          <div className="broda">
            <span className="nameof">{name}</span>
          </div>
          <label htmlFor="Description">
            Description:
            <input
              {...register("message", { required: "This is required" })}
              placeholder="Descrition"
            />
          </label>
          <label htmlFor="">
            <button>submit</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
