// import dbConnect from "utils/dbConnect";
import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    res.status(200).json({ message: "Authorized" });
  }
};
