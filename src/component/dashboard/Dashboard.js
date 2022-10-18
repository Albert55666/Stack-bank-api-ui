import { useEffect, useState } from "react";
import Loginf from "../Login Page/login";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser, FaHome, FaBook, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { mainP } from "../../features/main/mainslice";
import Banking from "../bamking/banking";
import "./dashboard.scss";

const Dashboard = () => {
  const [bee, setbee] = useState([]);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { main, isSuccess } = useSelector((state) => state.main);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispath(mainP());
  }, [user, navigate, dispath]);

  useEffect(() => {
    setbee(main.accountDetails);
  }, [main, navigate]);

  return (
    // <>
    <>
      {isSuccess ? (
        <div className="dashboard-container">
          <div className="dashboard">
            <div className="Dashboard-box-1">
              <p>
                <Link
                  style={{ textDecoration: "none", color: "blue" }}
                  to="/dashboard"
                >
                  <FaHome /> Starkbank
                </Link>
              </p>
              <p>
                <FaBook />
                Services
              </p>
              <p>
                <FaPhone />
                Customer Care
              </p>
            </div>
            <div className="dashboard-box-2">
              <div className="atm">
                <p>
                  <FaUser />
                  Welcome {user && main?.firstname + " " + main?.lastname}
                </p>
                <p>Phone Number{user && main?.phone}</p>
              </div>
            </div>
            <div className="dashboard-box-3">
              <div className="acc-number">
                Account Number: <b>{user && main?.accountnumber}</b>
              </div>
              <div className="acc-balance">
                Balance :₦{main?.balance?.$numberDecimal}
              </div>
            </div>
          </div>
          <div className="transaction">
            {main && <Banking bee={bee} setbee={setbee} />}
          </div>
        </div>
      ) : (
        <Loginf />
      )}
    </>

    // </>
  );
};

export default Dashboard;
