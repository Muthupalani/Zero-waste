import React, { useState } from 'react';
import { Search, Filter, Tag, PlusCircle } from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Gently Used Sofa',
      category: 'Sell', // Changed to 'Sell' for filtering
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 2,
      title: 'Organic Produce Bundle',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    },
    {
      id: 3,
      title: "Children's Books Set",
      category: 'Sell', // Changed to 'Sell' for filtering
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
    },
    {
      id: 4,
      title: 'Old Video Games',
      category: 'Swap', // Example item for swap
      image: 'https://images.unsplash.com/photo-1516582060165-3d93e7cb11b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
  ]);

  const [newItem, setNewItem] = useState({ title: '', category: 'Sell', image: '' });

  const filteredItems = items.filter(item => {
    const matchesCategory = category === 'All' || 
                            (category === 'Buy' && item.category === 'Sell') || 
                            (category === 'Swap' && item.category === 'Swap');

    return matchesCategory && item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.title) {
      setItems([...items, { id: items.length + 1, ...newItem }]);
      setNewItem({ title: '', category: 'Sell', image: '' }); // Reset the input fields
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({ ...newItem, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Marketplace</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="All">All Categories</option>
            <option value="Buy">Buy</option>
            <option value="Swap">Swap</option>
          </select>
        </div>
      </div>

      <form onSubmit={handleAddItem} className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sell a Product</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <input
            type="text"
            placeholder="Product Title"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            required
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <select
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
        >
          <option value="Sell">Sell</option>
          <option value="Donate">Donate</option>
          <option value="Swap">Swap</option>
        </select>
        <button type="submit" className="bg-green-600 text-white rounded-md px-4 py-2 flex items-center">
          <PlusCircle className="mr-2" />
          Add Item
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <div className="flex items-center">
                <Tag className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
