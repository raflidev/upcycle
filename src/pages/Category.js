import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

function Category() {
  const [product, setProduct] = React.useState([])

  const { category } = useParams()

  React.useEffect(() => {
    axios.get('http://localhost:8000/api/product')
    .then(res => {
      console.log(res.data.filter(item => item.product_category === category));
      setProduct(res.data.filter(item => item.product_category === category))
    })
  }, [])

  const rupiah = (number)=>{
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(/(\.|,)00$/g, '');
  }

  return (
    <div>
      <Navbar/>

      <div>
        <div className='text-center mt-10 font-medium text-4xl'>Category: {category}</div>
      </div>
      {
        product.length === 0  &&
        <div className='text-center mt-10 font-medium text-4xl'>No product found</div>
      }
      {/* post */}
      <div className='px-20 py-10'>
        <div className='grid grid-cols-4 gap-6'>
        {
          product.map((item, index) => {
            return (
                <Link key={index} to={`/detail/${item.id}`} className='flex justify-start '>
                  <div className=' w-5/6  border border-black rounded'>
                    <div className='w-full h-[26rem] bg-red-100 bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(http://localhost:8000/images/${item.product_image})`}}>
                    </div>
                    <div className='text-lg space-y-3 p-3'>
                      <div className=''>
                        {item.product_title}
                      </div>
                      <div className='text-2xl font-semibold'>
                        {rupiah(item.product_price)}
                      </div>
                    </div>
                  </div>
                </Link>
            )
          })
        }
        </div>
      </div>
      {/* end post */}
    </div>
  )
}

export default Category