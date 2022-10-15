import "./banking.scss";
import { FaWallet, FaHandHoldingUsd, FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/stbank.png";

const Banking = ({ bee }) => {
  return (
    <div className="main-bank-container">
      <div className="banking-box-one">
        <div className="babking-ser">Banking Services</div>
        <div className="bnk-ser-box">
          <div className="ser-box">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/transfer"
            >
              <FaHandHoldingUsd />
              Transfer Services
            </Link>
          </div>
          <div className="ser-box">
            <Link style={{ textDecoration: "none", color: "white" }} to="/loan">
              <FaWallet />
              <span>Loan Services</span>
            </Link>
          </div>
          <div className="ser-box">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/airtime"
            >
              <FaMoneyBill />
              Airtime recharge
            </Link>
          </div>
        </div>
      </div>
      <div className="banking-box-two">
        <div className="babking-ser">Transaction History</div>
        <div className="bnk-ser-box1">
          {bee?.map((element, index) => {
            return (
              <div className="vert" key={index}>
                <img className="uch" src={logo} alt="log0" />
                <p>Transaction type: {element.type}</p>
                <p>Transaction id: {element._id}</p>
                <p>Amount : ₦{element.amount.$numberDecimal}</p>
                <p>Sender's Name: {element.senderName}</p>
                <p>Reciever's Name: {element.receiverName}</p>
                <p>Description: {element.message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banking;

/* 
        
         */

//
