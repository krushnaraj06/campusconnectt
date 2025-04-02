import React, { useState } from 'react';
import { DollarSign, PieChart, TrendingUp, Bell } from 'lucide-react';
import './BudgetBuddy.css';

const BudgetBuddy = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Food', amount: 250, date: '2024-03-15' },
    { id: 2, category: 'Rent', amount: 800, date: '2024-03-01' },
    { id: 3, category: 'Books', amount: 150, date: '2024-03-10' }
  ]);

  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExpense.category && newExpense.amount && newExpense.date) {
      setExpenses([...expenses, {
        id: expenses.length + 1,
        category: newExpense.category,
        amount: parseFloat(newExpense.amount),
        date: newExpense.date
      }]);
      setNewExpense({ category: '', amount: '', date: '' });
    }
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="budget-buddy">
      <section className="budget-hero">
        <h1>Track Your Expenses Smartly</h1>
        <p>AI-powered budgeting assistant for students</p>
        
        <div className="budget-overview">
          <div className="budget-card">
            <DollarSign className="budget-icon" />
            <h3>Total Expenses</h3>
            <p className="amount">${totalExpenses}</p>
          </div>
          <div className="budget-card">
            <PieChart className="budget-icon" />
            <h3>Monthly Budget</h3>
            <p className="amount">$1,500</p>
          </div>
          <div className="budget-card">
            <TrendingUp className="budget-icon" />
            <h3>Savings</h3>
            <p className="amount">$350</p>
          </div>
        </div>
      </section>

      <section className="expense-section">
        <div className="expense-form">
          <h2>Add New Expense</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Category</label>
              <select
                value={newExpense.category}
                onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                required
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Books">Books</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amount ($)</label>
              <input
                type="number"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={newExpense.date}
                onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="submit-button">Add Expense</button>
          </form>
        </div>

        <div className="expense-list">
          <h2>Recent Expenses</h2>
          <div className="expense-table">
            <div className="table-header">
              <span>Category</span>
              <span>Amount</span>
              <span>Date</span>
            </div>
            {expenses.map(expense => (
              <div key={expense.id} className="table-row">
                <span>{expense.category}</span>
                <span>${expense.amount}</span>
                <span>{expense.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alerts-section">
        <h2>Budget Alerts</h2>
        <div className="alert">
          <Bell className="alert-icon" />
          <div className="alert-content">
            <h4>Approaching Food Budget Limit</h4>
            <p>You've used 80% of your monthly food budget</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudgetBuddy;