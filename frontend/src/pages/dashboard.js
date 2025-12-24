import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState({
    name: 'Demo User',
    background: 'Intermediate learner in AI/Robotics',
    progress: 0
  });
  const [chapters, setChapters] = useState([
    { id: 1, title: 'Introduction to Physical AI & Humanoid Robotics', progress: 100, slug: 'introduction' },
    { id: 2, title: 'Perception Systems in Robotics', progress: 100, slug: 'perception' },
    { id: 3, title: 'Control Systems for Humanoid Robots', progress: 75, slug: 'control' },
    { id: 4, title: 'Learning in Physical AI', progress: 50, slug: 'learning' },
    { id: 5, title: 'Locomotion and Movement', progress: 25, slug: 'locomotion' },
    { id: 6, title: 'Manipulation and Dexterity', progress: 0, slug: 'manipulation' },
    { id: 7, title: 'Ethics and Social Impact', progress: 0, slug: 'ethics' }
  ]);

  const handleBackgroundChange = (e) => {
    const newBackground = e.target.value;
    setUserProfile(prev => ({ ...prev, background: newBackground }));

    // In a real app, this would update the backend
    console.log('Updated background:', newBackground);
  };

  return (
    <Layout title="Dashboard" description="Your learning dashboard">
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Learning Dashboard</h1>

        <div style={{ marginBottom: '2rem' }}>
          <h2>User Profile</h2>
          <div style={{ backgroundColor: '#f0f8ff', padding: '1rem', borderRadius: '8px' }}>
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p>
              <strong>Background:</strong>
              <select
                value={userProfile.background}
                onChange={handleBackgroundChange}
                style={{ marginLeft: '10px', padding: '4px 8px' }}
              >
                <option value="Beginner student">Beginner student</option>
                <option value="Intermediate learner in AI/Robotics">Intermediate learner in AI/Robotics</option>
                <option value="Advanced practitioner">Advanced practitioner</option>
                <option value="Researcher/Academic">Researcher/Academic</option>
              </select>
            </p>
            <p><strong>Overall Progress:</strong> {userProfile.progress}%</p>
          </div>
        </div>

        <div>
          <h2>Chapter Progress</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {chapters.map((chapter) => (
              <li
                key={chapter.id}
                style={{
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>
                  <a href={`/chapters/${chapter.slug}`} style={{ textDecoration: 'none', color: 'var(--ifm-color-primary)' }}>
                    {chapter.title}
                  </a>
                </span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '100px', marginRight: '10px' }}>
                    <div style={{
                      width: `${chapter.progress}%`,
                      height: '20px',
                      backgroundColor: chapter.progress === 100 ? '#4caf50' : '#2196f3',
                      borderRadius: '10px',
                      transition: 'width 0.3s ease'
                    }}></div>
                  </div>
                  <span>{chapter.progress}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}