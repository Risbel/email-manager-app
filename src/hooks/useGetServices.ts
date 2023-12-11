const useGetServices = (): { data: IServices[] } => {
  const data = [
    {
      id: "1",
      urlImage: "/agreement-deal-friends.svg",
      name: "appointments",
      width: 150,
      height: 150,
    },
    {
      id: "2",
      urlImage: "/clipboard-list.svg",
      name: "tasks",
      width: 100,
      height: 100,
    },
    {
      id: "3",
      urlImage: "/clock.svg",
      name: "pending",
      width: 120,
      height: 120,
    },
    {
      id: "4",
      urlImage: "/alert-right.svg",
      name: "priority",
      width: 110,
      height: 110,
    },
    {
      id: "5",
      urlImage: "/register.svg",
      name: "register",
      width: 115,
      height: 115,
    },
    {
      id: "6",
      urlImage: "/smart-agenda.svg",
      name: "smart agenda",
      width: 100,
      height: 100,
    },
  ];

  return { data: data };
};

export default useGetServices;

interface IServices {
  id: string;
  urlImage: string;
  name: string;
  width: number;
  height: number;
}
