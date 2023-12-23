
interface Props{
    children:String;
    onClick:()=>void;
    color?:'primary'|'secondary'|'danger';
}

function Button({children,onClick,color='primary'}:Props){
    return(
        <button className={"btn btn-"+color}  onClick={onClick}>{children}</button>
    )
}

export default Button;