import React, { useState } from 'react';
import { Package, Calendar, Bell, CreditCard } from 'lucide-react';
import './PackPal.css';

const PackPal = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const subscriptionPlans = [
    {
      id: 'meals',
      name: 'Meal Plan',
      description: 'Daily meals from campus cafeteria',
      prices: {
        '1': 150,
        '3': 400,
        '6': 700,
        '12': 1200
      }
    },
    {
      id: 'laundry',
      name: 'Laundry Service',
      description: 'Weekly laundry service',
      prices: {
        '1': 30,
        '3': 80,
        '6': 150,
        '12': 280
      }
    },
    {
      id: 'gym',
      name: 'Gym Access',
      description: '24/7 campus gym access',
      prices: {
        '1': 40,
        '3': 100,
        '6': 180,
        '12': 300
      }
    }
  ];

  const activeSubscriptions = [
    {
      name: 'Meal Plan',
      status: 'Active',
      nextBilling: '2024-04-01',
      amount: '$150/month'
    },
    {
      name: 'Gym Access',
      status: 'Active',
      nextBilling: '2024-03-25',
      amount: '$40/month'
    }
  ];

  return (
    <div className="pack-pal">
      <section className="pack-hero">
        <h1>Manage Your Campus Services</h1>
        <p>Subscribe to essential services and manage them all in one place</p>
      </section>

      <section className="subscriptions">
        <h2>Available Plans</h2>
        <div className="plan-grid">
          {subscriptionPlans.map(plan => (
            <div key={plan.id} className="plan-card">
              <Package className="plan-icon" />
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              
              <div className="duration-selector">
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                >
                  <option value="">Select Duration</option>
                  <option value="1">1 Month - ${plan.prices['1']}</option>
                  <option value="3">3 Months - ${plan.prices['3']}</option>
                  <option value="6">6 Months - ${plan.prices['6']}</option>
                  <option value="12">12 Months - ${plan.prices['12']}</option>
                </select>
              </div>
              
              <button className="subscribe-button">Subscribe Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="active-subscriptions">
        <h2>Active Subscriptions</h2>
        <div className="subscription-grid">
          {activeSubscriptions.map((sub, index) => (
            <div key={index} className="subscription-card">
              <div className="subscription-header">
                <h3>{sub.name}</h3>
                <span className="status-badge">{sub.status}</span>
              </div>
              <div className="subscription-details">
                <p>
                  <Calendar size={16} />
                  Next Billing: {sub.nextBilling}
                </p>
                <p>
                  <CreditCard size={16} />
                  Amount: {sub.amount}
                </p>
              </div>
              <button className="manage-button">Manage Subscription</button>
            </div>
          ))}
        </div>
      </section>

      <section className="reminders">
        <h2>Upcoming Renewals</h2>
        <div className="reminder-card">
          <Bell className="reminder-icon" />
          <div className="reminder-content">
            <h4>Meal Plan Renewal</h4>
            <p>Your meal plan will renew in 5 days</p>
          </div>
          <button className="renew-button">Renew Now</button>
        </div>
      </section>
    </div>
  );
};

export default PackPal;