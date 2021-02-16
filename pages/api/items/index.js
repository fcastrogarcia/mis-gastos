import { getSession } from "next-auth/client";
import dbConnect from "utils/dbConnect";
import Payment from "models/Payment";

export default async (req, res) => {
  console.log(req.headers.cookie);
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    await dbConnect();

    const { body, method, query } = req;
    const { user } = session;

    switch (method) {
      case "GET":
        try {
          const payments = await Payment.find({
            user: user.id,
          });
          res.status(200).json({ data: payments });
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
        break;
      case "POST":
        try {
          // faltaría hacer la validación acá
          const payment = await Payment.create({ ...body });
          res.status(200).json({ data: payment });
        } catch (err) {
          console.error(err);
          res.status(400).json({ message: err.message });
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
