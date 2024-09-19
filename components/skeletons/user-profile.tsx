import {
    Card
} from "@/components/ui/card";


const UserProfileSkeleton = async () => {

  return (
    <Card className="w-[350px] border flex flex-col justify-center items-center gap-6 pb-6">
      <div className="w-full rounded-t-xl h-16 bg-[#E4E7EB] flex justify-center items-center relative">
        <div className="rounded-full  w-[120px] h-[120px] border-[5px] border-white bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton absolute m-auto inset-0 shadow-xl"></div>
      </div>

      <div className="flex flex-col items-center gap-2 pt-6">
        <div className="rounded-full w-56 h-7 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="rounded-full w-[105px] h-[18px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="rounded-full w-[160px] h-[18px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="rounded-full w-[130px] h-6 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full w-20 h-6 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
          <div className="rounded-full w-11 h-[14px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="rounded-full w-20 h-6 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
          <div className="rounded-full w-11 h-[14px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        </div>
      </div>

      <div className="w-full border-t flex items-center justify-center gap-4 pt-4">
        <div className="rounded-full w-[100px] h-8 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="rounded-full w-[100px] h-8 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
      </div>
    </Card>
  );
};

export default UserProfileSkeleton;
