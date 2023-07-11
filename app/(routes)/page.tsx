import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;
const Homepage = async () => {

  const billboard = await getBillboard('ac30cceb-69b0-4be6-958d-1b84a3c70af3');
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />

        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Product" items={products} />
        </div>

      </div>
    </Container>

  )
}

export default Homepage