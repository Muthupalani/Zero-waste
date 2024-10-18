import React, { useState } from 'react';
import { User, Mail, MapPin, Award, Gift, Truck } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'jane@example.com',
    location: 'San Francisco, CA',
    points: 1250,
    itemsDonated: 15,
    itemsReceived: 8
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {user.location}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProfileField icon={<Mail />} label="Email" value={user.email} />
          <ProfileField icon={<Award />} label="EcoPoints" value={user.points} />
          <ProfileField icon={<Gift />} label="Items Donated" value={user.itemsDonated} />
          <ProfileField icon={<Truck />} label="Items Received" value={user.itemsReceived} />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <ActivityItem
            action="Donated"
            item="Gently Used Sofa"
            date="2023-04-15"
            points={50}
          />
          <ActivityItem
            action="Received"
            item="Organic Produce Bundle"
            date="2023-04-10"
            points={20}
          />
          <ActivityItem
            action="Swapped"
            item="Children's Books Set"
            date="2023-04-05"
            points={30}
          />
        </ul>
      </div>
    </div>
  );
};

const ProfileField = ({ icon, label, value }) => (
  <div className="flex items-center">
    <div className="bg-green-100 rounded-full p-2 mr-3">
      {React.cloneElement(icon, { className: "h-5 w-5 text-green-600" })}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

const ActivityItem = ({ action, item, date, points }) => (
  <li className="flex items-center justify-between">
    <div>
      <p className="font-medium text-gray-800">{action} {item}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
      +{points} points
    </span>
  </li>
);

export default Profile;