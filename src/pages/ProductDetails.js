import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const params = useParams()

    return (
        <>
            <h1>Product details</h1>
            <p>{params.id}</p>
        </>
    )
}