import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title, rating, uthor, thumbnail_url, image_url, details,_id } = aNews;
  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <figure><img className="w-full  object-fill h-64" src={image_url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
          {
            details.length > 200 ? <p>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-blue-600 text-lg font-bold">Reade More</Link></p>
            :
            <p>{details}</p>
          }
        
        
      </div>
    </div>
  );
};

export default NewsCard;