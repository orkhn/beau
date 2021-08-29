import * as styled from "./styles";

const AnnouncementBar = () => {
  return (
    <styled.Announcement>
      <styled.AnnouncementMessage>
        <styled.TruckIcon />
        &nbsp; Free Shipping &nbsp;| &nbsp; 100 Days Return Policy
      </styled.AnnouncementMessage>
    </styled.Announcement>
  );
};

export default AnnouncementBar;
