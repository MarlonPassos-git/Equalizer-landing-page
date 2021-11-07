import './style.scss'


export function Button({text, icon}) {
    return (
        <button className="button" >
            <img className="button__icon" src={icon} />
            <p className="button__text">{text}</p>

           
        </button>
    )
}