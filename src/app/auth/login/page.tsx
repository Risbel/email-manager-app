import Image from "next/image";
import LoginForm from "./components/LoginForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInGoogle from "./components/SignInGoogle";

const Login = () => {
  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-current">
      <Image
        priority
        className="blur-sm w-screen hidden md:block"
        src={"/home-image-robotic-hand.jpg"}
        height={768}
        width={1024}
        alt="home image robotic hand"
      />

      <Image
        priority
        className="blur-sm w-screen md:hidden"
        src={"/home-image-robotic-hand-movile.jpg"}
        height={667}
        width={375}
        alt="home image robotic hand movile"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center text-center md:justify-around absolute rounded-xl md:rounded-3xl shadow-md shadow-primary/60 px-4 py-4 md:py-12 w-full md:w-5/6 lg:w-8/12 bg-primary-foreground">
        <div className="lg:px-12">
          <div className="pb-2">
            <p className="text-start font-light text-md leading-4">
              <span className="text-destructive/80 font-semibold">Login</span> to access to MySecretary or
              <span className="text-destructive/80 font-semibold"> Sign Up</span> if you don&apos;t have an acount.
            </p>
          </div>

          <Tabs defaultValue="login">
            <TabsList>
              <TabsTrigger value="login">
                <h1 className="text-center font-semibold text-xl text-primary">Login</h1>
              </TabsTrigger>
              <TabsTrigger value="signup">
                <h1 className="text-center font-semibold text-xl text-primary">Sign Up</h1>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
              <div className="flex mb-6">
                <div className="border-b border-primary w-full" />
                <p className="px-2 translate-y-2">or</p>
                <div className="border-b border-primary w-full" />
              </div>
              <SignInGoogle />
            </TabsContent>
            <TabsContent value="signup">Change your password here.</TabsContent>
          </Tabs>
        </div>
        <div>
          <Image
            priority
            className="hidden md:block w-auto"
            src={"/secretary-on-desktop.jpg"}
            height={350}
            width={450}
            alt="secretart on desktop picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
