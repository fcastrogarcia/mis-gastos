import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import dbConnect from "utils/dbConnect";
import { getItems, createItem } from "lib/items";
import { Items } from "types/items";

interface Data {
  items?: Items;
  message?: string;
}

const getTypes = (type: string | string[]): string[] => {
  if (typeof type === "string") return Array(type);
  else return type;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({ req });

  console.log(req.headers.cookie);

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    await dbConnect();

    const { body = {}, method = "", query = {} } = req;
    const { user = {} } = session;
    const { type } = query;

    switch (method) {
      case "GET":
        try {
          if (!type.length || !user.id)
            throw new Error("Item type and userId are required");

          const items = await getItems(user.id as string, getTypes(type));

          res.status(200).json({ items });
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
        break;
      case "POST":
        try {
          const items = await createItem({ ...body, user: user.id });

          res.status(200).json({ items });
        } catch (err) {
          console.error(err);
          res.status(400).json({ message: err.message });
        }
        break;
      default:
        res.status(400).json({ message: "method not supported for this route" });
        break;
    }
  }
};
