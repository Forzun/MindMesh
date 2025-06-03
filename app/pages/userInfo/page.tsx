import Image from "next/image"

export default function UserInfoPage(){ 

    return <div className="h-screen w-full bg-neutral-900 ">
        <div className="h-full container mx-auto max-w-6xl border-2">
            <div className="w-full h-full flex flex-col gap-5 items-center p-10">
                <div className="md:h-80 h-90 w-full flex md:flex-row flex-col border-1 gap-10">
                    <div className="md:w-96 flex justify-center items-center"> 
                        <Avatar src="/freepik__adjust__54853.jpeg" alt="Avatar" />
                    </div>

                    <div className="w-full h-full bg-neutral-700">
                        
                    </div>
                </div>
                <div className="h-96 w-full ">

                </div>
            </div>
        </div>
    </div>
}

function Avatar({src, alt}: {src: string ,alt: string}){ 

    return <div className="md:w-30 md:h-30 w-20 h-20  object-cover rounded-full flex items-center justify-center">
            <Image className="w-full h-full rounded-full" width={100} height={100} src={src} alt={alt} />
    </div>
}




