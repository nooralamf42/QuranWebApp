import {createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext()

let localPage = 1
if(localStorage.getItem("bookmark")!==null){
    localPage= (Number(localStorage.getItem("bookmark")))
}

export default function AppContextProvider({children}){
    
    let [loading, setLoading] = useState(true);
    let [data, setData] = useState([]);
    let [showTranslation, setShowTranslation] = useState(false)
    let [page, setPage] = useState(localPage);
    let [run, setRun] = useState(4)
    

    async function fetchData(page){
        let api ="https://api.alquran.cloud/v1/page/$/quran-uthmani"
        
        let response = await axios.get(api.replace("$",page))
        let data = await response.data.data;
        
        setPage(data.number)
        setData(pre=>[...pre, data.ayahs])
        
        
        // if(showTranslation){
            //     let response = await axios.get("https://api.alquran.cloud/v1/page/$/en.asad".replace("$", page))
            //     let data = await response.data.data
            //     setData(pre=>pre.push)
            // }
            setLoading(false)
    }
    
    useEffect(()=>{
        fetchData(page)
    },[])
    

    function pageChangeHandler(){
        setPage(pre=>pre+1)
        setRun(pre=>pre+1)
    }

    function resetPage(bookmark=false){
        setData([])
        if(bookmark){
          setPage(Number(localStorage.getItem('bookmark')))
        }
        else{
            setPage(1)
        }
        setRun(5)
    }
    
    if(run>0){
        setPage(pre=>pre+1)
        fetchData(page)
        setRun(pre=>pre-1)
    }
    let value = {
        loading,
        setLoading,
        page,
        setPage,
        data,
        setData,
        pageChangeHandler,
        showTranslation,
        setShowTranslation,
        resetPage
    }


    return<AppContext.Provider value={value}>
            {children}
         </AppContext.Provider>
}

