import { Link } from "react-router-dom";
import "../styles/MediaListCard.scss";

import ImageContainer from "./ImageContainer";

export default function MediaListCard({ media, index }) {
  console.log(media)

  return (
    <li className="media-list-card" key={index}>
      <Link
        to={`${media.formattedRoute}/${media.id}`}
        className="media-list-card__link"
        onClick={() => {
          localStorage.setItem("selectedMedia", JSON.stringify(media)); // Store media in localStorage
        }}
      >
        <ImageContainer
          parentClass="media-list-card"
          imageUrl={media.poster_path}
          imageAlt={media.formattedTitle}
        />
        <div className="media-list-card__information">
          <div className="media-list-card__title">{media.formattedTitle}</div>
          <div className="media-list-card__type">{media.media_type}</div>
          <div className="media-list-card__release-date">
            {media.formattedReleaseDate ? media.formattedReleaseDate : ""}
          </div>
        </div>
      </Link>
    </li>
  );
}
