import {useRouter} from 'next/router'

function productDetail()
{
    const router = useRouter()
    const productId = router.query.productId
    return <h1> Details about product {productId} </h1>
}

export default productDetail