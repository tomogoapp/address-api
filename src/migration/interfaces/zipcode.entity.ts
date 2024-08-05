export interface ZipCode {

    id: string,
    state: string,
    location: string,
    neighborn : Neighborn[]

}
interface Neighborn {
    
    id: string
    name: string

}