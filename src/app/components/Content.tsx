import Image from "next/image"
import Pic from "../assets/Work Together Image.png"
import Button from "../assets/Btn-2.png"
export default function Content(){
    return(
        <div className="w-[1480px] h-[661] gap-[100px] ml-40 mb-24 flex justify-between items-center">
            <div className="w-[710px] h-[661px]">
            <Image src={Pic} alt="" />  
            </div>
            <div className="w-[670px h-[294px] gap-[60px]">
                <h1 className="font-bold text-7xl h-[87.14px] mb-8">Work together</h1>
                <p className="font-normal text-lg mb-16">With whitepace, share your notes with your colleagues and collaborate on them. <br />
                You can also publish a note to the internet and share the URL with others.</p>
                <button className="w-[186px] h-[63px] pt-5 pb-5">
                <Image src={Button} alt="" />     
                </button>
            </div>
        </div>
    )
}