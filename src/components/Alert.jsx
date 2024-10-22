// Start coding here
import frown from "../assets/img/frown.svg";
import alertTriangle from "../assets/img/alert-triangle.svg";
import alertInfo from "../assets/img/alert-circle.svg";
import checkCircle from "../assets/img/check-circle.svg";

function Alert({ type }) {
  if (type === "error") {
    return (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          background: "#F9C8C8",
          borderRadius: "0.5rem",
          padding: "0 1.5rem",
          width: "40rem",
        }}
      >
        <img src={frown} alt="sad icon" />
        <h2 style={{ color: "#444444", fontSize: "20px", fontFamily: "Kanit" }}>
          This is error alert box
        </h2>
      </div>
    );
  } else if (type === "warning") {
    return (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          background: "#F9D9C8",
          borderRadius: "0.5rem",
          padding: "0 1.5rem",
          width: "40rem",
        }}
      >
        <img src={alertTriangle} alt="sad icon" />
        <h2 style={{ color: "#444444", fontSize: "20px", fontFamily: "Kanit" }}>
            This is warning alert box
        </h2>
      </div>
    );
  } else if (type === "alert-info") {
    return (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          background: "#F9EBC8",
          borderRadius: "0.5rem",
          padding: "0 1.5rem",
          width: "40rem",
        }}
      >
        <img src={alertInfo} alt="sad icon" />
        <h2 style={{ color: "#444444", fontSize: "20px", fontFamily: "Kanit" }}>
            This is info alert box
        </h2>
      </div>
    );
  }else if(type === "success"){
    return(
        <div
        style={{
          display: "flex",
          gap: "1rem",
          background: "#CEF7CD",
          borderRadius: "0.5rem",
          padding: "0 1.5rem",
          width: "40rem",
        }}
      >
        <img src={checkCircle} alt="check icon" />
        <h2 style={{ color: "#444444", fontSize: "20px", fontFamily: "Kanit" }}>
            This is success alert box
        </h2>
      </div>
    )
  }
}

export default Alert;
