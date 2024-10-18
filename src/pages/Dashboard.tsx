import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Leaf, Recycle, Users } from 'lucide-react';

const Dashboard = () => {
  // Mock data for demonstration
  const impactData = [
    { month: 'Jan', wasteReduced: 50, carbonSaved: 30, communityEngagement: 20 },
    { month: 'Feb', wasteReduced: 65, carbonSaved: 40, communityEngagement: 25 },
    { month: 'Mar', wasteReduced: 80, carbonSaved: 55, communityEngagement: 35 },
    { month: 'Apr', wasteReduced: 95, carbonSaved: 70, communityEngagement: 45 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Impact Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ImpactCard
          icon={<Recycle className="h-8 w-8 text-green-500" />}
          title="Total Waste Reduced"
          value="290 kg"
          change="+15%"
        />
        <ImpactCard
          icon={<Leaf className="h-8 w-8 text-green-500" />}
          title="Carbon Footprint Saved"
          value="195 kg CO2e"
          change="+22%"
        />
        <ImpactCard
          icon={<Users className="h-8 w-8 text-green-500" />}
          title="Community Engagement"
          value="125 actions"
          change="+30%"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Impact Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={impactData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="wasteReduced" name="Waste Reduced (kg)" fill="#4CAF50" />
            <Bar dataKey="carbonSaved" name="Carbon Saved (kg CO2e)" fill="#2196F3" />
            <Bar dataKey="communityEngagement" name="Community Actions" fill="#9C27B0" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ImpactCard = ({ icon, title, value, change }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-green-100 rounded-full p-3">
        {icon}
      </div>
      <span className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </span>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

export default Dashboard;