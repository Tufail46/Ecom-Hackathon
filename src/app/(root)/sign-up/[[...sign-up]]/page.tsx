import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="max-w-[1240px] w-full mx-auto py-16">
      <div className="m-8 lg:m-1">
        <SignUp />
      </div>
    </div>
  );
}
