import blogIcon from "assets/overview/blog.png";
import replyIcon from "assets/overview/arrow.png";
import likeIcon from "assets/overview/like.png";
import progressIcon from "assets/overview/progress.png";

interface statsKeys {
  label: string;
  icon: string;
  color: string;
  changes?: number;
  amount: number;
}
export default function useGetOverviewStats() {
  const statsColor = "241, 69, 58";
  const repliesColor = "0, 186, 131";
  const likeColor = "248, 146, 33";
  const goalColor = "101, 94, 237";
  const stats: statsKeys[] = [
    {
      label: "BLOGS",
      icon: blogIcon,
      color: statsColor,
      changes: 12,
      amount: 24,
    },
    {
      label: "REPLIES",
      icon: replyIcon,
      color: repliesColor,
      changes: -15,
      amount: 35,
    },
    {
      label: "LIKES",
      icon: likeIcon,
      color: likeColor,
      changes: -100,
      amount: 12,
    },
    {
      label: "GOAL",
      icon: progressIcon,
      color: goalColor,
      amount: 77,
    },
  ];
  return stats;
}
