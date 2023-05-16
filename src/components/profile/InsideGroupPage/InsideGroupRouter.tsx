import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import InsideGroupPage from "./InsideGroupPage";
import {useAuthStore} from "../../../store";
export default function InsideGroupRouter(){
    const {id} = useParams();
    const navigate = useNavigate();
    const profile = useAuthStore(s => s.profile);
    const group = profile.groups.find((e) => e.id === parseInt(id));
    if (group === undefined)
        navigate('/profile', {replace: true})
    return (<>
        <Routes>
            <Route
                path="/history"
                element={<InsideGroupPage
                    group={group}
                />}
            />
            <Route
                path="/"
                element={<InsideGroupPage
                    group={group}
                />}
            />
        </Routes>
    </>);
}