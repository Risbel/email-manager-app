import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { ITasks } from "@/services/getAppointments";

const DetailsAppointment = ({ task }: { task: ITasks }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center h-8 mt-4 bg-gray-200 hover:bg-gray-300/90 py-2 px-3 rounded-md">
        <span className="text-sm">Details</span>
      </DialogTrigger>
      <DialogContent className="h-5/6 w-screen md:w-9/12 p-14 overflow-hidden overflow-y-auto px-6 md:px-10">
        <DialogOverlay className="z-0 w-full h-12 py-4 bg-slate-700" />
        <div>
          <h3 className="text-lg font-bold text-gray-700">Event Description:</h3>
          <p className="py-3">{task.largeDescription}</p>
        </div>
        <div className="bg-zinc-300 py-2 px-4 rounded-2xl">
          <p className="font-sans text-slate-700">
            <span className="font-bold"> Sender:</span> {task.origin}
          </p>
          <p className="font-sans  text-slate-700">
            <span className="font-bold"> Priority:</span> {task.priority}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsAppointment;
