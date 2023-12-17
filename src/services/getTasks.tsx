import axios from "axios";

const getTasks = async () => {
  const response = await axios.get<ITask[]>("https://jsonplaceholder.typicode.com/todos");
  return response.data.slice(0, 20);
};

export default getTasks;

export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
