import * as styled from "./styles";
import Slider from "./Slider";
import SpecialCard from "./SpecialCard";

const Hero = () => {
  return (
    <styled.Hero>
      <Slider />
      <styled.CardContainer>
        <SpecialCard imagePath={"/images/misc/cardPicture1.jpg"} />
        <SpecialCard imagePath={"/images/misc/cardPicture2.jpg"} />
        <SpecialCard imagePath={"/images/misc/cardPicture3.jpg"} />
      </styled.CardContainer>
    </styled.Hero>
  );
};
export default Hero;
