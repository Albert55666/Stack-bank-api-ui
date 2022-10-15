import React from "react";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import "./Home.scss";

// const {register} = useForm()

function Home() {
  return (
    <div className="container">
      <div className="div1">
        <div className="box1">
          <div className="textDiv">
            <h1> stack bank</h1>
            <h2>
              {" "}
              financial <br /> dreams? we make <br />
              them real{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              itaque, laudantium aliquam culpa esse nostrum adipisci minus
              necessitatibus{" "}
            </p>
          </div>
          <div className="logsDiv">
            <button>
              <Link to="/login">login</Link>{" "}
            </button>
            <button>
              <Link to="/register">Register</Link>{" "}
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
