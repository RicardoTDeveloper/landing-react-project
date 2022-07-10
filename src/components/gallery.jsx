import { useEffect } from "react";
import { Search } from "services";
import { Image } from "./image";
import useSearch from "hooks/useSearch";
import { SkeletonGallery } from "./skeleton";

export const Gallery = (props) => {
   const { isLoading, data } = useSearch();
   console.log("data :>> ", data);

   return (
      <div id="portfolio" className="text-center">
         <div className="container">
            <div className="section-title">
               <h2>Gallery</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="row">
               <div className="portfolio-items">
                  {isLoading && <SkeletonGallery></SkeletonGallery>}
                  {!isLoading
                     ? props.data.map((d, i) => (
                          <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                             <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                          </div>
                       ))
                     : "Loading..."}
               </div>
            </div>
         </div>
      </div>
   );
};
