import { useContext, useEffect } from "react";
import { GenreContext } from "../context/Context.js";

import MediaList from "../components/MediaList.jsx";

export default function Homepage({ mediasData }) {
  const { setActiveMediasGenre } = useContext(GenreContext);

  useEffect(() => {
    setActiveMediasGenre("all");
  });

  return <MediaList mediasData={mediasData} />;
}
