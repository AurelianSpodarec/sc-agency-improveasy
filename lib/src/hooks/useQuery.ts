import { useMemo } from 'react';

import { useLocation } from "react-router-dom";

const useQuery = (paramName: string) => {
    const { search } = useLocation();

    const param = useMemo(() => new URLSearchParams(search).get(paramName), [search, paramName]);
    return param;   
}

  export default useQuery