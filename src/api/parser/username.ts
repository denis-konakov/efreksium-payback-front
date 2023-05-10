interface HasUserName{
    id: number;
    username: string;
}

export function username(obj: HasUserName): string{
    return `${obj.username}#${obj.id}`;
}