import portal from "../../images/loading-portal.gif";
import "./Load.scss";

const Load = (props) => {
  return (
    <div className="load-box">
      <img src={portal} alt="Loading" className="load-image" />
    </div>
  );
};

export default Load;
