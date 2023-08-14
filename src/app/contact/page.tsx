'use client'
import { useRouter } from "next/navigation";
const Youtube = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push("/");
    }
    return(
        <>
        Youtube
        <div>
            <button className="border-[1px]" onClick={() => handleBtn()}>Back home</button>
        </div>
            </>
    )
}
export default Youtube;