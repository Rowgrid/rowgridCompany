import Marquee from "react-fast-marquee";
import brand1 from "/src/assets/images/brand1.png";
import brand2 from "/src/assets/images/brand2.png";
import brand3 from "/src/assets/images/brand3.png";
import brand4 from "/src/assets/images/brand4.png";
import brand5 from "/src/assets/images/brand5.png";
const Brand = () => {
  const iconFotos = [brand1, brand2, brand3, brand4, brand5];
  return (
    <>
      <div>
        <Marquee pauseOnHover="true">
          <div>
            {iconFotos.map((fotos) => (
              <img className="m-6" src={fotos} alt="website logos" />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};
export default Brand;
