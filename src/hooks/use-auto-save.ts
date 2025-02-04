"use client"

import {useEffect,useState} from "react"
import useDebounce from "@/hooks/use-debounce"

export default function useAutoSave<T>(data:T){
    const debouncedData = useDebounce(data,1500);

    const [lastSavedData,setLastSavedData] = useState(
        structuredClone(data)
    )

    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        async function save(){
            setIsSaving(true)
            // TO DO: API ENDPOINT THAT SAVES DATA
            await new Promise(resolve=>setTimeout(resolve,1500))
            setLastSavedData(structuredClone(debouncedData))
            setIsSaving(false)
        }
        const hasUnsavedChanges = JSON.stringify(debouncedData) !== JSON.stringify(lastSavedData)

        if(hasUnsavedChanges && debouncedData && !isSaving){
            save()
        }

    }, [debouncedData,isSaving,lastSavedData])

    return {
        isSaving,
        hasUnsavedChanges:JSON.stringify(data) !== JSON.stringify(lastSavedData)
    }

}