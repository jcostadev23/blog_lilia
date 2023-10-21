import { useState } from "react";
import WorkPicture from "@/app/components/workpic";

export default function Show_works({ params }) {
    const [sehowMyPages, setSehowMyPages] = useState(false)

    const handleClick = () => {
        setSehowMyPages(!sehowMyPages)
    }

    return (
        <div>
            <h1>Works!! ID: {params.main}</h1>

            <button onClick={handleClick}>Show Picture</button>
        </div>)
}