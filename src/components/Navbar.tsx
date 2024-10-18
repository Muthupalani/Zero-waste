import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, ShoppingBag, User, BarChart2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">EcoConnect</span>
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/marketplace" icon={<ShoppingBag />} text="Marketplace" />
            <NavLink to="/profile" icon={<User />} text="Profile" />
            <NavLink to="/dashboard" icon={<BarChart2 />} text="Dashboard" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors duration-200">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;