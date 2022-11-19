import Link from 'next/link'
import { useState } from 'react'
import Modal from '../components/Modal'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ex ea modi illo earum autem libero? Natus ea deserunt facilis recusandae, cupiditate illo, dolores minus libero autem quas, sed odit!</p>
      <p>Laborum, error esse, veniam ex qui officiis dolore accusantium sed molestias quia atque a nam amet. Nisi ex est possimus voluptate minima expedita quas numquam dolorum aliquam? Nemo, quos pariatur!</p>
      <p>Obcaecati, minima nemo consequatur vitae possimus rem exercitationem perspiciatis beatae dolorum mollitia voluptas ducimus pariatur saepe, dolore tempore doloremque ex rerum quisquam sit facilis? Deleniti consequuntur a praesentium aut est!</p>
      <p>Eum, vitae obcaecati doloremque voluptatibus deserunt quia autem? Optio consequuntur a pariatur incidunt soluta! Hic optio non nobis delectus exercitationem? Repellendus aspernatur molestias deserunt? Nulla illum eos ad voluptates. Dignissimos!</p>
      <p>Tenetur, vitae aut quam veritatis, facere pariatur amet corporis quo eligendi, architecto doloribus? Nisi assumenda veritatis molestias, asperiores optio impedit rerum voluptas ab corrupti ipsum, aliquam doloribus, modi facilis quaerat.</p>

    </>
  )
}
