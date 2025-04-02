import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Campus Connect</h1>
          <p>Your All-in-One Student Platform</p>
        </div>
      </section>

      <section className="about-us">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Campus Connect is your ultimate student companion, designed to make college life easier and more connected. We understand the challenges students face and provide innovative solutions to help you succeed in your academic journey.</p>
          <p>Our platform brings together essential services and tools that every student needs, from finding study partners to managing finances and accessing campus services.</p>
        </div>
      </section>

      <section className="features">
        <h2>Our Services</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300" alt="Study Buddy" className="feature-image" />
            <h3>Study Buddy</h3>
            <p>Connect with fellow students, join study groups, and collaborate on projects</p>
            <a href="/study-buddy" className="feature-link">Learn More</a>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=300" alt="Budget Buddy" className="feature-image" />
            <h3>Budget Buddy</h3>
            <p>Track expenses, manage budgets, and get AI-powered financial recommendations</p>
            <a href="/budget-buddy" className="feature-link">Learn More</a>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=300" alt="MarketMingle" className="feature-image" />
            <h3>MarketMingle</h3>
            <p>Buy and sell items within your college community</p>
            <a href="/market-mingle" className="feature-link">Learn More</a>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=300" alt="PackPal" className="feature-image" />
            <h3>PackPal</h3>
            <p>Manage subscriptions for meals, laundry, and other essential services</p>
            <a href="/pack-pal" className="feature-link">Learn More</a>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150" alt="Student" className="testimonial-image" />
            <p>"Study Buddy helped me find the perfect study group for my finals!"</p>
            <h4>Sarah Johnson</h4>
            <span>Computer Science</span>
          </div>
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150" alt="Student" className="testimonial-image" />
            <p>"Budget Buddy made managing my expenses so much easier!"</p>
            <h4>Michael Chen</h4>
            <span>Business Administration</span>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200" alt="Team Member" className="team-image" />
            <h4>Emily Parker</h4>
            <span>Founder & CEO</span>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200" alt="Team Member" className="team-image" />
            <h4>David Wilson</h4>
            <span>Tech Lead</span>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200" alt="Team Member" className="team-image" />
            <h4>Sophie Martinez</h4>
            <span>Design Director</span>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200" alt="Team Member" className="team-image" />
            <h4>Alex Thompson</h4>
            <span>Product Manager</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;