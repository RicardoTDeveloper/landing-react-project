import { useQuery } from "react-query";
import { Infos } from "services";

const useInfos = () => {
   return useQuery(["info"], () => Infos(), { retry: false, refetchOnWindowFocus: false });
};

export default useInfos;
