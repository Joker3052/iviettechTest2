'use client'

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push("/");
    }
    return(
        <>
        About
        <Button variant="success">ABC</Button>
        <div>
            <button className="border-[1px]" onClick={() => handleBtn()}>Back home</button>
        </div>
            </>
    )
}
export default Facebook;