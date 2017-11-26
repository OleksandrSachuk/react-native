import {
    TOPREPO_FETCH_REQUESTED,
    TOPREPO_FETCH_SUCCEEDED,
    TOPREPO_FETCH_FAILED
} from '../constants/actionTypes'
import { API } from '../config';
import fetch from "isomorphic-fetch";
import "es6-promise";

export const fetchTopReposApi = () => {
    return fetch(`${API}/search/repositories?q=stars:>1&sort=stars&order=desc&page=1&per_page=10` )
        // .then(response => response.json() )
        .then(response => response.json())
        .then(json => json.items)
}

export const fetchTopRepos = () => ({ type: TOPREPO_FETCH_REQUESTED });