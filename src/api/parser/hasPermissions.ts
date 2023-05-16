
export interface IHasPermissions{
    role?: string;
}

export function hasPermissions(member: IHasPermissions): boolean{
    return member !== undefined && member.role !== undefined && member.role !== "member";
}