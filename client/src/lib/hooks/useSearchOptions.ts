import { useState } from "react";
import blogIcon from "/assets/overview/blog.png";
import replyIcon from "/assets/overview/arrow.png";
import likeIcon from "/assets/overview/like.png";
import progressIcon from "/assets/overview/progress.png";
export function useSearchOptions() {
  const [options] = useState([
    { image: blogIcon, label: "Blogs", value: 24 },
    { image: replyIcon, label: "Replies", value: 35 },
    { image: likeIcon, label: "Likes", value: 12 },
    { image: progressIcon, label: "Goal", value: 77 },
  ]);

  return options;
}
