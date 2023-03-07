import express from "express";
import bodyParser from "body-parser";
import { ExpenseService } from "./service/expense.service";

const app = express();
app.use(bodyParser.json());

app.post("/settle-up", (req, res) => {
  const expenses = req.body.expenses;
  if (!expenses) {
    res.status(400).json({ message: "Missing expenses", sucess: false });
    return;
  }
  const calculatedExpenses = ExpenseService.calculateExpenses(expenses);
  res.json({ data: calculatedExpenses, success: true });
});

const port = process.env.POSRT || 2023;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
