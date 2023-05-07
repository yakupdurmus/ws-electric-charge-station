import express from "express";
import connection from "./dbconnection";
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    const user = await connection.select("*").table("user");
    res.json({
      status: 200,
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
