const useGetServices = (): IServices => {
  const data = [
    {
      id: "1",
      urlImage: "/agreement-deal-friends-svgrepo-com.svg",
      name: "appointments",
    },
    {
      id: "2",
      urlImage: "/medical-notes-symbol-of-a-list-paper-on-a-clipboard-svgrepo-com.svg",
      name: "tasks",
    },
    {
      id: "3",
      urlImage: "/time-svgrepo-com.svg",
      name: "pending",
    },
    {
      id: "4",
      urlImage: "/chat-alert-left-3-svgrepo-com.svg",
      name: "priority",
    },
    {
      id: "5",
      urlImage: "/list-ol-svgrepo-com.svg",
      name: "register",
    },
    {
      id: "6",
      urlImage: "/agenda-svgrepo-com.svg",
      name: "smart agenda",
    },
  ];

  return { data };
};

export default useGetServices;

interface IServices {
  data: { id: string; urlImage: string; name: string }[];
}
