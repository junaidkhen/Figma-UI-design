import React from "react"
import Image from "next/image"
import Button2 from "../assets/Landing page V1/desktop/Btn2.png"
export default function WorkManagement(){
    return (
    <div className="w-[1920px] h-[800px] gap-[100px] top-[921px] pt-[140px] pr-[240px] pb-[140px] pl-[240px]">
      <div className="w-[1480px] h-[547px] gap-[60px] flex justify-between items-center">
      <div className="w-[672px] h-[411px] gap-[60px]">
        <h1 className="font-bold text-7xl mb-8">Project Management</h1>
        <p className="font-normal text-lg justify-between text-justify mb-10">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        <button><Image src={Button2} alt=""/></button>
      </div>
      <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
      </div>
    </div>
    )
}