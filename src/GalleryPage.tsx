import { MasonryPhotoAlbum } from "react-photo-album";
import photos from "./photos"
import "react-photo-album/masonry.css";

export default function GalleryPage() {
  return <MasonryPhotoAlbum photos={photos} />;
}