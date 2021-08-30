import * as styled from "./styles";

import Image from "next/image";
import Link from "next/link";

const Navbar = ({ url }) => {
  const href = "/";

  return (
    <styled.Nav url={url}>
      <styled.Wrapper className="nav-logo">
        <Link href={href}>
          <a>
            <styled.Logo url={url}>
              <Image
                src="/images/misc/logo.png"
                alt="Beau logo"
                width={220}
                height={65}
                layout="responsive"
              />
            </styled.Logo>
          </a>
        </Link>
      </styled.Wrapper>
      <styled.Wrapper className="menu-nav">
        <styled.MenuItem>
          <styled.NavLink href="" className="search">
            <styled.SearchIcon />
          </styled.NavLink>
        </styled.MenuItem>
        <styled.MenuItem>
          <styled.NavLink href="/" className="user">
            <styled.UserIcon />
          </styled.NavLink>
        </styled.MenuItem>
        <styled.MenuItem>
          <styled.NavLink href="/" className="cart">
            <styled.CartIcon />
          </styled.NavLink>
        </styled.MenuItem>
        <styled.MenuItem>
          <styled.NavLink href="/" className="wishlist">
            <styled.WishlistIcon />
          </styled.NavLink>
        </styled.MenuItem>
      </styled.Wrapper>
    </styled.Nav>
  );
};

export default Navbar;
