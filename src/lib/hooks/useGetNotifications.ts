export default function useGetNotifications() {
  const notifications = [
    {
      title: "New friend request",
      content: "User named RopLeR invited you to be his friend",
      type: "friend",
    },
    {
      title: "New blog posted",
      content: "New blog has been posted, check it out!",
      type: "newblog",
    },
  ];
  return notifications;
}
