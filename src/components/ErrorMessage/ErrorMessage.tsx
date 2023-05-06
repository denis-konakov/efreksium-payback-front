import "./ErrorMessage.css"

interface ErrorMessageProps{
    detail: string;
    program_code: string;
    title: string;

}

export function ErrorMessage(props: ErrorMessageProps){
    return (<>
        <div className='error-message'>
            <div className='error-message-title'>
                {props.title}
            </div>
            <div className='error-message-content' title={props.program_code}>
                {props.detail}
            </div>
        </div>
    </>)

}