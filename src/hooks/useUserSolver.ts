import {ISharedUser} from "../models/ISharedUser";
import {useAuthStore} from "../store";

export type UserSolve = (id: number | string) => ISharedUser;
export function useUserSolver(): UserSolve{
    const profile = useAuthStore(s => s.profile);
    const users: ISharedUser[] = [].concat(
        profile.friends,
        [].concat.apply([],
            profile.groups.map((group) => (
                group.members.map(member => member.user)
            ))
        ),
    );
    const usersMap = new Map<number, ISharedUser>();
    users.forEach((user) => {
        usersMap.set(user.id, user);
    })
    return (id) => {
        if (typeof id === "string")
            id = parseInt(id);
        return usersMap.get(id);
    };
}