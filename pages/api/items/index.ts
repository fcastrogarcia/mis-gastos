import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import dbConnect from "utils/dbConnect";
import { Items } from "types/items";
import Item from "models/Item";
import { getTypes } from "lib/items";

interface Data {
  items?: Items;
  message?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({ req });

  console.log(req.headers.cookie);

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    await dbConnect();

    const { body = {}, method = "", query = {} } = req;
    const { user = {} } = session;

    switch (method) {
      case "GET":
        try {
          const { type } = query;

          if (!type.length || !user.id)
            throw new Error("Item type and userId are required");

          const items = await Item.find({ user: user.id, type: { $in: getTypes(type) } });

          res.status(200).json({ items });
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
        break;
      case "POST":
        try {
          const items = await Item.create({ ...body, user: user.id });

          res.status(200).json({ items });
        } catch (err) {
          console.error(err);
          res.status(400).json({ message: err.message });
        }
        break;
      case "DELETE":
        try {
          const { id } = query;

          const { deletedCount } = await Item.deleteMany({ _id: id });

          res.status(200).json({ message: `deleted ${deletedCount} items` });
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
