import {API, BaseResponse} from "../api"
import {useNavigate, useSearchParams} from "react-router-dom";
import Loading from "./loading";
import {useEffect} from "react";
import {useErrorState} from "../hooks/useErrorState";
import {ErrorMessage} from "./ErrorMessage/ErrorMessage";
import {AxiosError} from "axios";
import {ConfirmEmailResponse} from "../api/user/confirm_email";

export default function ConfirmEmailPage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const confirm_code = searchParams.get('confirm_code');
    const navigate = useNavigate();
    const errorState = useErrorState();
    useEffect(() => {
        API.user.confirm_email(
            {code: confirm_code}
        ).then((r) => {
            // TODO: Сообщение что всё успешно
            alert('4etk0')
            navigate('/sign_in')
        }).catch((r: AxiosError<ConfirmEmailResponse>) => {
            errorState.wrong(r.response.data.detail.detail, r.response.data.detail.program_code)
        })
    }, [])
    return (<>
        <Loading>
            {errorState.error && <ErrorMessage
                detail={errorState.detail}
                program_code={errorState.programCode}
                title="Ошибка подтверждения почты"
            />}
        </Loading>
    </>);
}