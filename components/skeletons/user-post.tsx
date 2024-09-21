import {
    Card
} from "@/components/ui/card";

const UserPostSkeleton = () => {

  return (
    <Card className="w-[340px] md:min-w-full border flex flex-col justify-center items-start rounded-2xl">
      <div className="flex gap-3 p-4">
        <div className="rounded-full w-10 h-10 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>

        <div className="flex flex-col gap-3">
          <div className="space-y-1">
            <div className="rounded-lg w-[156px] h-4 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            <div className="rounded-lg w-[74px] h-3 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
          </div>

          <div className="space-y-[6px]">
            <div className="rounded-lg w-56 h-3 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            <div className="rounded-lg w-44 h-3 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
          </div>

          <div className="flex gap-3">
            <div className="rounded-lg w-10 h-3 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            <div className="rounded-lg w-10 h-3 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            <div className="rounded-lg w-10 h-3 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
          </div>
        </div>
      </div>

      <div className="w-full border p-4 rounded-b-xl flex items-center gap-6">
        <div className="rounded-lg w-10 h-[18px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="rounded-lg w-10 h-[18px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="rounded-lg w-10 h-[18px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
      </div>
    </Card>
  );
};

export default UserPostSkeleton;
