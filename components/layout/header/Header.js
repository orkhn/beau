import * as styled from "./styles";

import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const url = router.pathname;

  return (
    <styled.Header url={url}>
      <AnnouncementBar />
      <Navbar url={url} />
    </styled.Header>
  );
}
