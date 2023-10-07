import Image from "next/image";
import Link from "next/link";

export default function Post1(){
    
    return(
        <>
            <h1>post-1</h1>
           <div>
                <figure>
                    <Image src="/public/img/tora.jpg" width={320} height={320} alt="Post-It"/>
                    <figcaption><Link href="/">Go Back to home page.</Link> </figcaption>
                </figure>
                <p><Link href="/">VOltar...</Link></p>
           </div>
        </>
    )
}