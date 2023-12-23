import { ReactNode } from "react";

interface Props{
    children:ReactNode;

}

function Alert({children}:Props){
    return(
        <div className="alert alert-primary">My Alert</div>
    )
}

export default Alert;