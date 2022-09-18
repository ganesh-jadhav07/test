import classes from "./CloudCard.module.css";
// import bp from "../../public/images/bp.png";
import Reactangle from "../../public/images/Rectangle.png";

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
    // <div className={`${classes.section2}`}>
    //   <img src={Reactangle.src} alt="..." className="w-96 relative" />
    //   <div className="absolute w-72 -mt-64 pt-4 pl-4">
    //     <div className="flex justify-center mb-1 mt-2">
    //       <img src={cloud.img} alt="" className="w-12 mb-2 -mt-12" />
    //     </div>
    //     <div className="text-center p-6 text-sm font-semibold">
    //       <p>{cloud.text}</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CloudCard;
