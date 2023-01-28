import { Navigate, useLocation } from "react-router-dom"

export const Authorization = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem("tricky_user")) {
        return children
    }
    else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}

