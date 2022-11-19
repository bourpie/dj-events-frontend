import { useRouter } from "next/router"

function EventPage() {

    const router = useRouter()

    console.log(router)

  return (
    <div>
        <h1>EventPage</h1>
    </div>
  )
}

export default EventPage