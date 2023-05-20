export function groupby<T>(src: T[], selector: (a: T) => string){
    const group_ordering: string[] = [];
    const groups = new Map<string, T[]>();
    for (let e of src){
        const key = selector(e);
        if (!groups.has(key)){
            groups.set(key, []);
            group_ordering.push(key);
        }
        groups.get(key).push(e)
    }
    return {
        groups,
        group_ordering
    };
}