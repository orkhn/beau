import styled, { css } from "styled-components";
import Link from "next/link";
import * as mixins from "styles/mixins";

export const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;
  background-color: #eee;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
`;

export const Announcement = styled.div`
  height: 4rem;
  background-color: #000;
  text-align: center;
`;

export const AnnouncementMessage = styled.p`
  height: 100%;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  ${mixins.flexCenter};
`;

export const Nav = styled.nav`
  width: 80%;
  border-bottom: 0.3rem solid #000;
  margin: 0 auto;
  padding: 1rem 0;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NextLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const NavLink = styled(NextLink)``;

export const Logo = styled.div`
  width: 10rem;
  position: relative;
`;

export const Wrapper = styled.div`
  &.nav-logo {
    margin-left: 1rem;
  }
  &.menu-nav {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-right: 1rem;
    width: 20rem;
    height: 4rem;
  }
`;

export const MenuItem = styled.div`
  height: 100%;
  width: 4rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TruckIcon = () => {
  return (
    <svg
      width="25"
      height="18"
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5909 4.5H18.1818V0H2.27273C1.02273 0 0 1.0125 0 2.25V14.625H2.27273C2.27273 16.4925 3.79545 18 5.68182 18C7.56818 18 9.09091 16.4925 9.09091 14.625H15.9091C15.9091 16.4925 17.4318 18 19.3182 18C21.2045 18 22.7273 16.4925 22.7273 14.625H25V9L21.5909 4.5ZM5.68182 16.3125C4.73864 16.3125 3.97727 15.5587 3.97727 14.625C3.97727 13.6913 4.73864 12.9375 5.68182 12.9375C6.625 12.9375 7.38636 13.6913 7.38636 14.625C7.38636 15.5587 6.625 16.3125 5.68182 16.3125ZM21.0227 6.1875L23.25 9H18.1818V6.1875H21.0227ZM19.3182 16.3125C18.375 16.3125 17.6136 15.5587 17.6136 14.625C17.6136 13.6913 18.375 12.9375 19.3182 12.9375C20.2614 12.9375 21.0227 13.6913 21.0227 14.625C21.0227 15.5587 20.2614 16.3125 19.3182 16.3125Z"
        fill="white"
      />
    </svg>
  );
};
export const SearchIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1 25.2C11.06 25.2 7 21.14 7 16.1C7 11.06 11.06 7 16.1 7C21.14 7 25.2 11.06 25.2 16.1C25.2 21.14 21.14 25.2 16.1 25.2ZM16.1 8.4C11.83 8.4 8.4 11.83 8.4 16.1C8.4 20.37 11.83 23.8 16.1 23.8C20.37 23.8 23.8 20.37 23.8 16.1C23.8 11.83 20.37 8.4 16.1 8.4Z"
        fill="black"
      />
      <path
        d="M22.8775 21.887L29.1635 28.173L28.1737 29.1628L21.8877 22.8768L22.8775 21.887Z"
        fill="black"
      />
    </svg>
  );
};

export const UserIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0192 20.402C23.3921 18.9987 22.482 17.7239 21.3397 16.6489C20.2009 15.5707 18.8518 14.7111 17.367 14.1175C17.3537 14.1112 17.3404 14.108 17.3271 14.1018C19.3982 12.6884 20.7446 10.3863 20.7446 7.78894C20.7446 3.48618 17.0545 0 12.5 0C7.94551 0 4.25537 3.48618 4.25537 7.78894C4.25537 10.3863 5.60177 12.6884 7.6729 14.1049C7.65961 14.1112 7.64631 14.1143 7.63301 14.1206C6.14366 14.7142 4.80723 15.5653 3.6603 16.652C2.51905 17.7279 1.60913 19.0024 0.980795 20.4052C0.363519 21.7784 0.030608 23.2508 8.31311e-05 24.7425C-0.00080418 24.776 0.00541927 24.8093 0.018387 24.8405C0.0313547 24.8718 0.0508041 24.9002 0.0755893 24.9242C0.100374 24.9482 0.129994 24.9673 0.162702 24.9803C0.195411 24.9933 0.230546 25 0.266039 25H2.26071C2.40698 25 2.52334 24.8901 2.52666 24.755C2.59315 22.3304 3.62373 20.0597 5.44553 18.3386C7.33049 16.5578 9.83379 15.5779 12.5 15.5779C15.1662 15.5779 17.6695 16.5578 19.5545 18.3386C21.3763 20.0597 22.4068 22.3304 22.4733 24.755C22.4767 24.8932 22.593 25 22.7393 25H24.734C24.7695 25 24.8046 24.9933 24.8373 24.9803C24.87 24.9673 24.8996 24.9482 24.9244 24.9242C24.9492 24.9002 24.9686 24.8718 24.9816 24.8405C24.9946 24.8093 25.0008 24.776 24.9999 24.7425C24.9667 23.2412 24.6376 21.7808 24.0192 20.402V20.402ZM12.5 13.191C10.9741 13.191 9.53792 12.6288 8.45747 11.608C7.37703 10.5873 6.78195 9.23053 6.78195 7.78894C6.78195 6.34736 7.37703 4.99058 8.45747 3.96985C9.53792 2.94912 10.9741 2.38693 12.5 2.38693C14.0259 2.38693 15.4621 2.94912 16.5425 3.96985C17.623 4.99058 18.218 6.34736 18.218 7.78894C18.218 9.23053 17.623 10.5873 16.5425 11.608C15.4621 12.6288 14.0259 13.191 12.5 13.191Z"
        fill="black"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.20833 22.9166H19.7917C20.3442 22.9166 20.8741 22.6971 21.2648 22.3064C21.6555 21.9157 21.875 21.3858 21.875 20.8333V9.37493C21.875 9.09866 21.7653 8.83371 21.5699 8.63836C21.3746 8.44301 21.1096 8.33326 20.8333 8.33326H17.7083V7.52389C17.7083 4.80618 15.726 2.37284 13.0208 2.1093C12.2967 2.03734 11.5656 2.11774 10.8745 2.34534C10.1833 2.57295 9.54747 2.94271 9.00783 3.43084C8.46819 3.91897 8.0367 4.51466 7.74114 5.17958C7.44557 5.84451 7.29246 6.56394 7.29167 7.29159V8.33326H4.16667C3.8904 8.33326 3.62545 8.44301 3.4301 8.63836C3.23475 8.83371 3.125 9.09866 3.125 9.37493V20.8333C3.125 21.3858 3.34449 21.9157 3.73519 22.3064C4.12589 22.6971 4.6558 22.9166 5.20833 22.9166ZM17.7083 10.4166V12.4999H15.625V10.4166H17.7083ZM9.375 7.29159C9.375 5.56868 10.7771 4.16659 12.5 4.16659C14.2229 4.16659 15.625 5.56868 15.625 7.29159V8.33326H9.375V7.29159ZM7.29167 10.4166H9.375V12.4999H7.29167V10.4166Z"
        fill="black"
      />
    </svg>
  );
};
export const WishlistIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5781 3.125C16.0156 3.125 14.5313 3.75 13.4375 4.84375L12.5 5.78125L11.6406 4.92188C9.375 2.57813 5.625 2.57812 3.35938 4.84375L3.28125 4.92188C0.9375 7.26562 0.9375 11.0156 3.28125 13.3594L12.5 22.6562L21.7188 13.3594C24.0625 11.0156 24.0625 7.26562 21.7188 4.92188C20.625 3.75 19.1406 3.125 17.5781 3.125Z"
        fill="black"
      />
    </svg>
  );
};