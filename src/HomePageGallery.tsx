import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"


export default function ZenoGallery() {
  const images = [
    {
      original: `${import.meta.env.BASE_URL}/zeno_black_white.png`,
      thumbnail: `${import.meta.env.BASE_URL}/zeno_black_white.png`,
    },
    {
      original: `${import.meta.env.BASE_URL}/photos/z5.png`,
      thumbnail: `${import.meta.env.BASE_URL}/photos/z5.png`,
    },
    {
      original: `${import.meta.env.BASE_URL}/zeno_black_white.png`,
      thumbnail: `${import.meta.env.BASE_URL}/zeno_black_white.png`,
    },
    {
      original: `${import.meta.env.BASE_URL}/zeno_black_white.png`,
      thumbnail: `${import.meta.env.BASE_URL}/zeno_black_white.png`,
    },
  ]

  return (
    <section className="my-5">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={false}
      />
    </section>
  )
}
