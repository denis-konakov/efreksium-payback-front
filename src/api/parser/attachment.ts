import {ATTACHMENTS_URL} from '../../constants'
export function attachment(url: string): string{
    return `${ATTACHMENTS_URL}/${url}`;
}