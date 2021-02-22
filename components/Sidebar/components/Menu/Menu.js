import styles from "./styles";
import Link from "next/link";
import { signOut } from "next-auth/client";

const items = [
  {
    label: "Logout",
    url: "",
    handleClick: () => signOut({ callbackUrl: "/login" }),
  },
];

const Menu = () => {
  return (
    <styles.Container>
      <styles.Menu>
        {items.map(({ label, url, handleClick }, index) => (
          <styles.Item key={index.toString()}>
            {url ? (
              <Link href={url}>
                <a>{label}</a>
              </Link>
            ) : (
              <styles.Button onClick={handleClick}>{label}</styles.Button>
            )}
          </styles.Item>
        ))}
      </styles.Menu>
    </styles.Container>
  );
};

export default Menu;
