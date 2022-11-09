import './style.css';

export const ErrorMessage = ({message})=>{
    return (
        <div className="error">
            <p>{message}</p>
        </div>
    );
}