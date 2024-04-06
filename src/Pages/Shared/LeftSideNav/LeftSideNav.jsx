import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  console.log(categories);
  return (
    <div className="space-y-6">
      <h1 className="text-xl text-[#403F3F] mb-5">All Categories</h1>
      {
        categories.map(category => <Link
          className="block ml-4 text-xl font-medium text-[#9F9F9F]"
          key={category.id}
          to={`/category/${category.id}`}
          >
          {category.name}
        </Link>)
      }
    </div>
  );
};

export default LeftSideNav;
