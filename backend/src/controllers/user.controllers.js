import { db } from "../config/db.js";
import bcrypt from "bcrypt";

// GET all users
export const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, name, email, role FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );

    res.json({
      id: result.insertId,
      name,
      email
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};