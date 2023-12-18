import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { Input, Label } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import Image from "next/image";

export const TaskForm = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center rounded-full bg-secondary hover:bg-background hover:-translate-y-[1px]  shadow-primary shadow-md text-primary p-2">
        <Image width={16} height={16} src={"/plus.svg"} alt="plus add button" />
      </DialogTrigger>
      <DialogContent className="h-5/6 w-screen md:w-9/12 lg:w-1/2 overflow-hidden overflow-y-auto py-12 px-6 md:px-10">
        <DialogOverlay className="z-0 w-full h-12 pt-4 pl-6 text-primary text-xl font-bold bg-background">
          ADD TASK
        </DialogOverlay>
        <DialogClose className="absolute z-10 right-4 top-4 rounded-md">
          <X className="h-5 w-5 hover:scale-110" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div>
          <h3 className="font-thin text-secondary-foreground">Complete the following fields</h3>
          <form className="flex flex-col py-8 gap-6">
            <div className="relative">
              <Label name="Title" htmlfor="newTask" />
              <Input
                placeholder="Type the title"
                className="placeholder:text-xs md:placeholder:text-base placeholder-secondary"
              />
            </div>
            <div className="relative">
              <Label name="Description" htmlfor="newTask" />
              <Textarea
                rows={8}
                placeholder="Type task description"
                className="placeholder:text-xs md:placeholder:text-base placeholder-secondary"
              />
            </div>
            <Button>ADD</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AddTaskForm = () => {
  return (
    <div className="flex justify-between items-center bg-muted rounded-xl py-3 px-3 md:px-4 md:w-full md:col-start-2">
      <p className="text-primary font-semibold text-sm">Add Task</p>
      <TaskForm />
    </div>
  );
};

export default AddTaskForm;
