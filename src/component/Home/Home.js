import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <div className="div1">
        <div className="box1">
          <div className="textDiv">
            <h1> stack bank</h1>
            <h2>
              financial dreams?
              <br /> we make <br />
              them real
            </h2>
            <p>
              "With a good perspective on history, we can have a better
              understanding of the past and present, and thus a clear vision of
              the future."
            </p>
          </div>
          <div className="logsDiv">
            <button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                login
              </Link>
            </button>
            <button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                Register
              </Link>
            </button>
          </div>
        </div>
        <div className="box2"></div>
      </div>
    </div>
  );
}

export default Home;
