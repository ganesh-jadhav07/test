import classes from "./CloudCards.module.css";

function CloudCard({ ...cloud }) {
  return (
    <div
      className={`w-80 h-80 border md:w-72 md:h-72 border-white grid grid-col-1 justify-center -left-2 relative ${classes.container}`}>
      <div className="p-4 w-52">
        <div className="mb-2 flex justify-center">
          <img src={cloud.img} alt="" className="w-12 mb-2" />
        </div>
        <div className="text-sm">
          <p>{cloud.text}</p>
        </div>
      </div>
    </div>
  );
}

export default CloudCard;
