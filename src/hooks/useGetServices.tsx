const useGetServices = (): IServices => {
  const data = [
    {
      id: "12",
      urlImage: "/agreement-deal-friends-svgrepo-com.svg",
      name: "appointments",
    },
    {
      id: "23",
      urlImage: "/medical-notes-symbol-of-a-list-paper-on-a-clipboard-svgrepo-com.svg",
      name: "tasks",
    },
    {
      id: "34",
      urlImage: "/time-svgrepo-com.svg",
      name: "pending",
    },
    {
      id: "45",
      urlImage: "/chat-alert-left-3-svgrepo-com.svg",
      name: "priority",
    },
    {
      id: "56",
      urlImage: "/list-ol-svgrepo-com.svg",
      name: "register",
    },
    {
      id: "67",
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
