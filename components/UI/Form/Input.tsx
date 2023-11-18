


type InputType = any
const Input = (props: InputType) => {
    return (
        <input className="" placeholder={props.placeHolder} name={props.name} htmlFor={props.htmlFor} id={props.id} {...props} />
    );
}

export default Input;