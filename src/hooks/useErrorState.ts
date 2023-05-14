import {useState} from "react";

export function useErrorState(){
    const [error, setError] = useState(false);
    const [detail, setDetail] = useState('');
    const [programCode, setProgramCode] = useState('');
    return {
        error, setError,
        detail, setDetail,
        programCode, setProgramCode,
        wrong: (detail, programCode) => {
            setError(true);
            setProgramCode(programCode);
            setDetail(detail);
        }
    }
}