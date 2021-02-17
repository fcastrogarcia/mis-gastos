import { getSession } from "next-auth/client";
import dbConnect from "utils/dbConnect";
import { getItemsData, createItem } from "controllers/items";

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    await dbConnect();

    const { body = {}, method = "", query = {} } = req;
    const { user = {} } = session;
    const { type = "" } = query;

    const types = type ? type.split(",") : [];

    switch (method) {
      case "GET":
        try {
          if (!types.length)
            throw new Error(
              "Item type is required as query parameter. (i.e.: ?type=expense,payment)"
            );

          const data = await getItemsData(user.id, types);

          res.status(200).json({ data });
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
        break;
      case "POST":
        try {
          const data = await createItem(body);

          res.status(200).json({ data });
        } catch (err) {
          console.error(err);
          res.status(400).json({ message: err.message, payload: type });
        }
        break;
      default:
        res
          .status(400)
          .json({ success: false, message: "method not supported for this route" });
        break;
    }
  }
};
