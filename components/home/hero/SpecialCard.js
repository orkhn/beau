import * as styled from "./specialCardStyles";

import Link from "next/link";

const SpecialCard = ({ imagePath }) => {
  return (
    <>
      <styled.Card
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link href="/">
          <a>Learn more</a>
        </Link>
      </styled.Card>
    </>
  );
};

export default SpecialCard;
