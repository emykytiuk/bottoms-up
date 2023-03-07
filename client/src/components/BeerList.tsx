import React, {useEffect, useState} from 'react'
import {Beer} from "./types";
import axios from "axios";

const API_URL = 'http://localhost:3000/api/v1/beers'

const getApiData = () => {
    return axios.get(API_URL).then((response: { data: any; }) => response.data)
}

export const BeerList = () => {
    const [beers, setBeers] = useState<Beer[]>([])

    useEffect(() => {
        getApiData().then((items: Beer[]) => setBeers(items))
    }, [])

    return <div>{beers.map((beer: Beer) => {
        return <div key={beer.id}>
            <div>{beer.name}</div>
        </div>
    })
    }
    </div>
}