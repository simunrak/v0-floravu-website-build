import { Nav } from '@/components/floravu/nav'
import { Hero } from '@/components/floravu/hero'
import { About } from '@/components/floravu/about'
import { Products } from '@/components/floravu/products'
import { Delivery } from '@/components/floravu/delivery'
import { OrderForm } from '@/components/floravu/order-form'
import { Contact } from '@/components/floravu/contact'
import { Footer } from '@/components/floravu/footer'

export default function FloraVuPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Products />
      <Delivery />
      <OrderForm />
      <Contact />
      <Footer />
    </main>
  )
}
