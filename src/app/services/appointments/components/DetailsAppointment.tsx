import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { ITasks } from "@/services/getAppointments";

const DetailsAppointment = ({ task }: { task: ITasks }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center h-8 mt-4 hover:bg-secondary/90 py-2 px-3 rounded-md bg-secondary text-primary ">
        <span className="text-sm">Details</span>
      </DialogTrigger>
      <DialogContent className="h-5/6 w-screen md:w-9/12 p-14 overflow-hidden overflow-y-auto px-6 md:px-10">
        <DialogOverlay className="z-0 w-full h-12 py-4 pl-10 text-xl font-semibold bg-primary text-primary-foreground">
          {task.name}
        </DialogOverlay>
        <div>
          <h3 className="text-lg font-bold text-primary">Event Description:</h3>
          <p className="py-3">{task.largeDescription}</p>
        </div>
        <div className="bg-muted py-2 px-4 rounded-2xl">
          <p className="font-sans text-muted-foreground">
            <span className="font-bold"> Sender:</span> {task.origin}
          </p>
          <p className="font-sans text-muted-foreground">
            <span className="font-bold"> Priority:</span> {task.priority}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsAppointment;
