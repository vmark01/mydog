import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"


export default function ZenoGallery() {
  const images = [
    {
      original: `${import.meta.env.BASE_URL}photos/bw1.png`,
      thumbnail: `${import.meta.env.BASE_URL}photos/bw1.png`,
    },
    {
      original: `${import.meta.env.BASE_URL}photos/bw2.png`,
      thumbnail: `${import.meta.env.BASE_URL}photos/bw2.png`,
    },
    {
      original: `${import.meta.env.BASE_URL}photos/bw3.png`,
      thumbnail: `${import.meta.env.BASE_URL}photos/bw3.png`,
    },
    {
      original: `${import.meta.env.BASE_URL}photos/bw4.png`,
      thumbnail: `${import.meta.env.BASE_URL}photos/bw4.png`,
    },
  ]

  return (
    <section className="my-5">
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        showThumbnails={false}
      />
    </section>
  )
}
