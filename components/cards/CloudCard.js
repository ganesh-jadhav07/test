import classes from "./CloudCard.module.css";

function CloudCard({ ...cloud }) {
  return (
    <div className={`h-72 w-72 rotate-45 ${classes.container}`}>
      <div className="p-4 h-72 w-72 -rotate-45">
        <div className="flex justify-center mb-2">
          <img src={cloud.img} alt="" className="w-20 mb-2 -mt-6" />
        </div>
        <div className="text-center">
          <p>{cloud.text}</p>
        </div>
      </div>
    </div>
  );
}

export default CloudCard;
