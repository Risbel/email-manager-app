import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";

const DetailsTask = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center h-8 mt-4 hover:bg-primary/90 py-2 px-3 rounded-md bg-primary text-primary-foreground ">
        <span className="text-sm">Details</span>
      </DialogTrigger>
      <DialogContent className="h-5/6 w-screen md:w-9/12 p-14 overflow-hidden overflow-y-auto px-6 md:px-10">
        <DialogOverlay className="z-0 w-full h-12 py-4 pl-10 text-xl font-semibold bg-primary text-primary-foreground">
          Task 1
        </DialogOverlay>
        <div>
          <h3 className="text-lg font-bold text-primary">Event Description:</h3>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio iste quos, earum exercitationem ab
            officiis ducimus eaque quam consequatur, architecto quisquam quaerat ipsam in sint odit, corporis soluta eos
            atque.
          </p>
        </div>
        <div className="bg-muted py-2 px-4 rounded-2xl">
          <p className="font-sans text-muted-foreground">
            <span className="font-bold"> Date:</span> {new Date().getDate()}
          </p>
          <p className="font-sans text-muted-foreground">
            <span className="font-bold"> Hour:</span> {new Date().getHours()}: {new Date().getMinutes()}
          </p>
          <p className="font-sans text-muted-foreground">
            <span className="font-bold"> Priority: </span>High
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsTask;
