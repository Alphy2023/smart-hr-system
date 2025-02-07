"use client"


import React, {useState} from 'react'
import {CustomCombobox} from "@/components/common/custom-combobox"


type FrameworkData={
  value:string;
  label:string;
}

export const AuthHeader = () => {
  const [value,setValue] = useState<string>("")
   const frameworkData: FrameworkData[] = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <div className="shadow-md bg-white h-[4rem]">
       <CustomCombobox 
        dataValues={frameworkData} 
        placeholder="Select a framework"
        value={value} onChange={(e) => setValue(e)}/>

    </div>
  )
}
