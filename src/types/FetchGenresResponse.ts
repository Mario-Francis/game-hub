import Genre from "./Genre";

export default interface FetchGenresResponse {
    count: number;
    results: Genre[];
}