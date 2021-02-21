import { useState } from "react";
import { useSession } from "next-auth/client";
import styles from "./styles";
import { signOut } from "next-auth/client";

const UserBadge = () => {
  const [open, setOpen] = useState(false);
  const [session, loading] = useSession();

  const { user = {} } = session || {};
  const { image = "", name = "", email = "" } = user;

  return (
    <styles.Container>
      <styles.Dropdown />
      <styles.TextWrapper>
        <styles.Name>{name}</styles.Name>
        <styles.Email>{email}</styles.Email>
      </styles.TextWrapper>
      <styles.Avatar src={image} alt={name} />
    </styles.Container>
  );
};

export default UserBadge;

{
  /* <button onClick={() => signOut({ callbackUrl: "/login" })}>Sign out</button> */
}
