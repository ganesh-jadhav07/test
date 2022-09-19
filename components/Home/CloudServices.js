import classes from "./CloudServices.module.css";
import CloudCard from "../cards/CloudCard";
import BlueBlock from "../../public/images/home/BlueBlock.png";

function CloudServices() {
  const clouds = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_H5KYAALYEWasncpmOrtnwoa3NYx391FUhVbdj_O6eCcpBwu0M3d-oDWZiypRjfpKSg&usqp=CAU",
      text: "With immense experience and heaps of platform certifications, our heaps of platform certifications.  our consultants have built full lifecycle turnkey solutions on the platform",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_H5KYAALYEWasncpmOrtnwoa3NYx391FUhVbdj_O6eCcpBwu0M3d-oDWZiypRjfpKSg&usqp=CAU",
      text: "With expertise spanning the platform gamut from IT Asset management and IT Service Management to Project Portfolio to CSM and FSM",
    },
    {
      id: 3,
      img: "https://s3-alpha-sig.figma.com/img/6fca/f0fe/465c1a8172dd308e560668b10c65a2b7?Expires=1664150400&Signature=PiknQCBFyGRWSGshYP-5L~9pmvjfN~o~pNPv1FoLpvwmNg73MiV87DQtn3zUNXHo9MCVR8MWOqaKuAFMuPbj4F7ntWHEYzb5Cl~gzIg4Jt8oQNFpfrAVJUidRfUNJiTnfEHYFtDPmt8am9GoZGJVt2Oba-1nmV7QLHkHu9FxDfUIW87lMhBE1ZUXwXV1bsmDfjD0F8VDy-VZRhM5ueoH1wLGcwRNBekW1jVS89IJTPqMNKCrj7CT5Pesk-AbH8lm2Lwscq1biWmeEZQ2reJAPgZkgfDtFhsxDjqNK0336-fYwuWLMzr1cR731AG~SdpCwuTkm59Tk8VYGDxVhleokg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      text: "We help solve enterprise challenges of scale, security and business process consolidation using the best of Azure solution practices",
    },
    {
      id: 4,
      img: "https://s3-alpha-sig.figma.com/img/bf32/f2dd/3ad7b1cbb79bb1c8863f5dc39a9c833f?Expires=1664150400&Signature=HrlQwJuidZuqtM-O24BpieMu-xgyuax7-80-dSohU9ncLCzxLNQP5ETcQXwMYsyZZODD7JpojBtDtZcuRmcFUAU7mci4esDrlwMUB8sf6bEcVgwn0M6hgMRrS1kq~-bu52VmNYMTHqWdhU4MII95-9TVcLY~omAucggvWXKCRi2mw4SBD0S~bfcWgRVxHYaNh-0OKoNqa-WRTE3BMQN1wi7FDl6~jPnERQtE9Q02716p3VPgSa4mSNSkX2Vaj8nos8rq7kRF0EOKRICXRGnCHaREqvxpLQ3it3xh2AXXLkFTdtclWRl1PL6A7qofHN3l8nn0ti6pKFy60cPbYvOXUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      text: " With immense experience and heaps of platform certifications, our heaps of platform certifications.  our consultants have built full lifecycle,",
    },
  ];
  return (
    <div className={`pt-16 object-cover ${classes.div}`}>
      <div className="text-white p-8">
        <div>
          <img
            src={BlueBlock.src}
            alt="..."
            className="ml-[16.5rem] w-4 -mb-6"
          />
          <p className="text-[55px]">Unlock 10x Performance</p>
        </div>
        <p className="text-[24px] mt-2">
          Bluepineapple comes with more than 200 years of collective experience
          to help you achieve this.
        </p>
        <p className="text-[32px] max-w-2xl mt-4">
          Leverage our multi-cloud expertise to fast-track your digital
          transformation
        </p>
        <p className="text-[18px] max-w-md mt-4">
          Maximize your ROI on platform investments and speed up your cloud
          adoption. Fast track your digital transformation journey by drawing
          synergies across multiple cloud platforms.
        </p>
        <button type="button" className="p-2 bg-[#3C71FF] rounded-[4px] mt-4">
          Learn More
        </button>
      </div>

      {/* Cloud Services Card */}
      <div className={classes.cloudCardSection}>
        {clouds.map((cloud) => (
          <CloudCard key={cloud.id} {...cloud} />
        ))}
      </div>
    </div>
  );
}

export default CloudServices;
