import { connectToDatabase } from "utils/mongodb";

export default async (req, res) => {
  const mongoose = await connectToDatabase();
  console.log("mongoose", mongoose);
  res.status(200).json({});
};

// schemas

//  feeds - content (feeds son las colecciones)
// cada feed tiene items
// id
// user
// url
// feed id
// items
// categories
