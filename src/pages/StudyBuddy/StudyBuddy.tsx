import React, { useState } from 'react';
import { Search, Users, BookOpen, MessageSquare } from 'lucide-react';
import './StudyBuddy.css';

const StudyBuddy = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const studyGroups = [
    {
      id: 1,
      subject: 'Computer Science',
      topic: 'Data Structures',
      members: 5,
      time: '2:00 PM - 4:00 PM',
      date: '2024-03-20',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300'
    },
    {
      id: 2,
      subject: 'Physics',
      topic: 'Quantum Mechanics',
      members: 3,
      time: '3:00 PM - 5:00 PM',
      date: '2024-03-21',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300'
    }
  ];

  return (
    <div className="study-buddy">
      <section className="study-hero">
        <h1>Find Your Perfect Study Partner</h1>
        <p>Connect with fellow students, join study groups, and ace your exams together!</p>
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by subject, topic, or study group..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <Users className="feature-icon" />
          <h3>Join Study Groups</h3>
          <p>Find and join study groups based on your subjects and interests.</p>
        </div>
        <div className="feature">
          <BookOpen className="feature-icon" />
          <h3>Share Resources</h3>
          <p>Share and access study materials, notes, and practice questions.</p>
        </div>
        <div className="feature">
          <MessageSquare className="feature-icon" />
          <h3>Collaborate</h3>
          <p>Chat with study partners and collaborate on assignments.</p>
        </div>
      </section>

      <section className="study-groups">
        <h2>Active Study Groups</h2>
        <div className="group-grid">
          {studyGroups.map(group => (
            <div key={group.id} className="group-card">
              <img src={group.image} alt={group.subject} className="group-image" />
              <div className="group-info">
                <h3>{group.subject}</h3>
                <p className="topic">{group.topic}</p>
                <p className="members"><Users size={16} /> {group.members} members</p>
                <p className="schedule">{group.date} | {group.time}</p>
                <button className="join-button">Join Group</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudyBuddy;