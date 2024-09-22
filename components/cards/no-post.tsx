import { TriangleAlert } from "lucide-react";
import { Card } from "../ui/card";

const NoPostCard = () => {
  return (
    <Card className="p-6 md:min-w-[700px] flex flex-col justify-center items-center text-center gap-6">
      <TriangleAlert size={50} className="text-muted-foreground" />
      <div>
        <h5 className="text-[18px] font-extrabold">This user has no post</h5>
        <p className="text-muted-foreground">{`We're sorry but it's for the test.`}</p>
      </div>
    </Card>
  );
};

export default NoPostCard;
