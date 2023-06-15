// import useFetch from "../../hooks/useFetch";
// import "./FeaturedProperties.css"

// const FeaturedProperties = () => {
//   const { data, loading, error } = useFetch("/hotels?featured=true");
//   // const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

//   return (
//     <div className="fp">
//       {loading ? (
//         "Loading"
//       ) : (
//         <>
//           {data.map((item) => (
//             <div className="fpItem" key={item._id}>
//               <img
//                 src={item.photos[0]}
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">{item.name}</span>
//               <span className="fpCity">{item.city}</span>
//               <span className="fpPrice">Starting from INR{item.cheapestPrice}</span>
//               {item.rating && <div className="fpRating">
//                 <button>{item.rating}</button>
//                 <span>Excellent</span>
//               </div>}
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default FeaturedProperties;


import "./FeaturedProperties.css"

const featuredProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
            <img src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Aquarius%20Suite%20-%20Bedroom.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg" alt="" className="fpImg" />
            <span className="fpName">Taj Hotel</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from INR 35000</span>
            <div className="fpRating">
                <button className="space">8.9</button>
                <span>Excellent</span>
            </div> 
            </div>

            <div className="fpItem">
            <img src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Aquarius%20Suite%20-%20Bedroom.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg" alt="" className="fpImg" />
            <span className="fpName">Radisson Blu</span>
            <span className="fpCity">Delhi</span>
            <span className="fpPrice">Starting from INR 5000</span>
            <div className="fpRating">
                <button className="space">7.9</button>
                <span>Good</span>
            </div>
            </div>

            <div className="fpItem">
            <img src="https://goreviews.goibibo.com/ugc1/t_ug/vadodara-sayajivadodara-shivani-1659419605281.jpg" alt="" className="fpImg" />
            <span className="fpName">Sayaji Hotel</span>
            <span className="fpCity">Vadodara</span>
            <span className="fpPrice">Starting from INR 3500</span>
            <div className="fpRating">
                <button className="space">8.5</button>
                <span>Very Good</span>
            </div>
            </div>

            <div className="fpItem">
            <img src="https://i.travelapi.com/lodging/3000000/2370000/2367000/2366964/92c8d0fb_z.jpg" alt="" className="fpImg" />
            <span className="fpName">Surya Palace</span>
            <span className="fpCity">Vadodara</span>
            <span className="fpPrice">Starting from INR 9000</span>
            <div className="fpRating">
                <button className="space">8.8</button>
                <span>Excellent</span>
            </div>
            </div>
            
        </div>
    );
};

export default featuredProperties;