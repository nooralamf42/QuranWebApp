import {createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext()

export default function AppContextProvider({children}){
    let [loading, setLoading] = useState(true);
    let [data, setData] = useState([]);
    let [translatedData, setTranslatedData] = useState([])
    let [showTranslation, setShowTranslation] = useState(false)
    let [page, setPage] = useState(1);
    let [ayah, setAyah] = useState([]);
    let [translatedAyah, setTransLatedAyah] = useState([]);

    async function fetchData(page){
        let api ="https://api.alquran.cloud/v1/page/$/quran-uthmani"
        let response = await axios.get(api.replace("$",page))
        let data = await response.data.data;
        setData(data)
        setAyah(data.ayahs)
        if(showTranslation){
            let response = await axios.get("https://api.alquran.cloud/v1/page/$/en.asad".replace("$", page))
            let data = await response.data.data
            setTransLatedAyah(data.ayahs)
            setTranslatedData(data)
        }
        setPage(data.number)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData(page)
    },[page, showTranslation])


    function pageChangeHandler(inputPage){
        fetchData(page+inputPage)
    }

    let value = {
        loading,
        setLoading,
        page,
        setPage,
        data,
        setData,
        translatedData,
        ayah,
        translatedAyah,
        setTranslatedData,
        pageChangeHandler,
        showTranslation,
        setShowTranslation
    }


    return<AppContext.Provider value={value}>
            {children}
         </AppContext.Provider>
}

