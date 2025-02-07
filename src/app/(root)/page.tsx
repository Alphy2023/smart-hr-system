"use client"
// import {CustomAspectRatio} from "@/components/common/custom-aspect-ratio"
// import useAutoSave from "@/hooks/use-auto-save"
// import useUnloadWarning from "@/hooks/use-unload-warning"
// import {LoadingButton} from "@/components/common/loading-button"
// import {WandSparklesIcon} from "lucide-react"
// import {CustomCombobox} from "@/components/common/custom-combobox"
// import {useState} from "react"



// type ResumeData ={
//   name:string;
//   email:string;

// }
// type FrameworkData={
//   value:string;
//   label:string;
// }
export default function Home() {

  // const [value,setValue] = useState<string>("")
  // const resumeData:ResumeData = {
  //   name:"Jane",
  //   email:"john@example.com"
  // }

  // const frameworkData: FrameworkData[] = [
  //   {
  //     value: "next.js",
  //     label: "Next.js",
  //   },
  //   {
  //     value: "sveltekit",
  //     label: "SvelteKit",
  //   },
  //   {
  //     value: "nuxt.js",
  //     label: "Nuxt.js",
  //   },
  //   {
  //     value: "remix",
  //     label: "Remix",
  //   },
  //   {
  //     value: "astro",
  //     label: "Astro",
  //   },
  // ];
  // // useUnloadWarning()
  // const {isSaving,hasUnsavedChanges} = useAutoSave(resumeData)

  // useUnloadWarning(hasUnsavedChanges)

  return (
    <div>
      this is home page
      {/* this is home page
      lklkl
      {isSaving && 'Saving.....'}

      <CustomCombobox 
      dataValues={frameworkData} 
      placeholder="Select a framework"
      value={value} onChange={(e) => setValue(e)}/>

      <LoadingButton loading={isSaving}
      className="w-[150px]">
        <WandSparklesIcon className="size-4"/>
        Generate (AI)
      </LoadingButton> */}
    </div>
  );
}
