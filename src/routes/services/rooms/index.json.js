import rooms from './_rooms.js'

const contents = JSON.stringify(
  rooms.map(room => {
    return {
      title: room.title,
      slug: room.slug,
      photo: {
        src: room.photos[0].source,
        alt: room.photos[0].alt,
      },
      price: room.price.currency + room.price.value,
      people: room.people,
      type: room.type,
    }
  }),
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(contents)
}