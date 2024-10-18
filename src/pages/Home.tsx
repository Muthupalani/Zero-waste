import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, RefreshCcw, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to EcoConnect</h1>
      <p className="text-xl text-gray-600 mb-8">Reduce waste, connect communities, and make a difference.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Leaf className="h-12 w-12 text-green-500" />}
          title="Reduce Waste"
          description="Donate or swap surplus items to minimize waste and help others."
        />
        <FeatureCard
          icon={<RefreshCcw className="h-12 w-12 text-blue-500" />}
          title="Resource Matching"
          description="Our AI matches surplus resources with those who need them most."
        />
        <FeatureCard
          icon={<Users className="h-12 w-12 text-purple-500" />}
          title="Build Community"
          description="Connect with like-minded individuals and make a positive impact together."
        />
      </div>
      
      <Link
        to="/marketplace"
        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-200"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;