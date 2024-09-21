import {
    Card
} from "@/components/ui/card";


const UserProfileSkeleton = async () => {

  return (
    <Card className="max-w-[345px] md:min-w-[670px] flex flex-col justify-center items-center">
      <div className="w-full rounded-t-xl h-16 bg-[#E4E7EB] flex justify-center items-center relative"></div>

      <div className="p-4 md:space-y-3 flex flex-col md:flex-row  items-center md:items-start md:gap-6 w-full relative">
        <div className="rounded-full w-[120px] h-[120px] bg-white shadow-2xl absolute md:relative top-[-90px] md:top-[-40px]">
          <div className="rounded-full w-[110px] h-[110px]  bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton absolute m-auto inset-0 shadow-xl"></div>
        </div>

        <div className="space-y-6 pt-12 md:pt-1">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="rounded-full w-56 h-7 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            <div className="rounded-full block md:hidden w-[105px] h-[18px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            <div className="rounded-full w-[160px] h-[18px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            <div className="rounded-full w-[130px] h-6 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
          </div>

          <div className="flex justify-center items-center md:justify-start gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-full w-20 h-6 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
              <div className="rounded-full w-11 h-[14px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-full w-20 h-6 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
              <div className="rounded-full w-11 h-[14px] bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t flex items-center justify-center md:justify-start gap-2 p-4">
        <div className="rounded-full w-[100px] h-8 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="rounded-full w-[100px] h-8 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
      </div>
    </Card>
  );
};

export default UserProfileSkeleton;
