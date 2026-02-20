const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE Employee
router.post("/", authMiddleware, (req, res) => {
    const { name, email, position, salary } = req.body;

    if (!name || !email || !position || !salary) {
        return res.status(400).json({ message: "All fields are required" });
    }

    db.query(
        "INSERT INTO employees (name, email, position, salary) VALUES (?, ?, ?, ?)",
        [name, email, position, salary],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error creating employee" });
            }
            res.json({ message: "Employee created successfully" });
        }
    );
});

// GET All Employees
router.get("/", authMiddleware, (req, res) => {
    db.query("SELECT * FROM employees", (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching employees" });
        }
        res.json(results);
    });
});

// UPDATE Employee
router.put("/:id", authMiddleware, (req, res) => {
    const { name, email, position, salary } = req.body;
    const { id } = req.params;

    db.query(
        "UPDATE employees SET name=?, email=?, position=?, salary=? WHERE id=?",
        [name, email, position, salary, id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error updating employee" });
            }
            res.json({ message: "Employee updated successfully" });
        }
    );
});

// DELETE Employee
router.delete("/:id", authMiddleware, (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM employees WHERE id=?",
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error deleting employee" });
            }
            res.json({ message: "Employee deleted successfully" });
        }
    );
});

module.exports = router;
