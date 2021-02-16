import { getSession } from "next-auth/client";
import dbConnect from "utils/dbConnect";
import Payment from "models/Payment";

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    await dbConnect();

    const { body, method } = req;
    const { user } = session;

    console.log(user);

    switch (method) {
      case "GET":
        try {
          const payments = await Payment.find({
            user: req.body.user,
          });
          res.status(200).json({ success: true, data: payments });
        } catch (err) {
          res.status(400).json({ success: false, message: err.message });
        }
        break;
      case "POST":
        try {
          const payment = await Payment.create({ body });
          const current_status = payment.current_status;
          res.status(200).json({ payment: { ...payment._doc, current_status } });
        } catch (err) {
          console.error(err);
          res.status(400).json({ success: false, message: err.message });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
};
