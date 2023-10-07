import Image from "next/image";
import Link from "next/link";

export default function Post2(){
    
    return(
        <>
            <h1>Post2</h1>
           <div>
                <figure>
                    <Image src="/img/tora.jpg" width={320} height={320} alt="Post-It"/> 
                    <figcaption><Link href="/">Go Back to home page.</Link> </figcaption>
                </figure>
                <p><Link href="/">VOltar...</Link></p>
           </div>
        </>
    )
}