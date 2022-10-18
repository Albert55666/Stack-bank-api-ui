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
              {" "}
              financial dreams?
              <br /> we make <br />
              them real{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              itaque, laudantium aliquam culpa esse nostrum adipisci minus
              necessitatibus
            </p>
          </div>
          <div className="logsDiv">
            <button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                login
              </Link>{" "}
            </button>
            <button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                Register
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="box2"></div>
      </div>
      {/* div 2 */}
      <div className="div2">
        <div className="boxA">
          <i class="fa-solid fa-rocket"></i>
          <p>fast to use</p>
        </div>
        <div className="boxA">
          <i className="fa-solid fa-rocket"></i> <p>fast to use</p>
        </div>
        <div className="boxA">
          <i className="fa-solid fa-rocket"></i> <p>fast to use</p>
        </div>
        <div className="boxA">
          <i class="fa-solid fa-rocket"></i> <p>fast to use</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
