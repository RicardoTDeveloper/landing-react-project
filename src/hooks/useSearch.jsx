import { useQuery } from "react-query";
import { Search } from "services";

const useSearch = () => {
   return useQuery(["search"], () => Search(), { retry: false, refetchOnWindowFocus: false });
};

export default useSearch;
