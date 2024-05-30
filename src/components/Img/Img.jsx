import "./Img.css";

function Img({ img }) {
  return (
    <div className="img">
      <img src={img} alt="F" />
    </div>
  );
}

export default Img;
