import { TriangleAlert } from "lucide-react";
import { Card } from "../ui/card";

interface PageProps {
  purpose: "error" | "notfound";
  dataType?: "user" | "post";
  route?: "home" | "profile";
}

const NotFoundCard = ({ purpose, dataType, route }: PageProps) => {
  return (
    <Card className="p-6 md:min-w-[700px] flex flex-col justify-center items-center text-center gap-6">
      <TriangleAlert size={50} className="text-muted-foreground" />
      {purpose === "notfound" && (
        <div>
          {route === "home" ? <h5 className="text-[18px] font-extrabold">Page not found</h5> : <h5 className="text-[18px] font-extrabold">User not found</h5>}
          <p className="text-muted-foreground">{`We're sorry but it's for the test.`}</p>
        </div>
      )}

      {purpose === "error" && (
        <div>
          {dataType === "post" ? (
            <h5 className="text-[18px] font-extrabold">Error loading posts</h5>
          ) : (
            <h5 className="text-[18px] font-extrabold">Error loading users</h5>
          )}
          <p className="text-muted-foreground">{`We're sorry but it's for the test.`}</p>
        </div>
      )}
    </Card>
  );
};

export default NotFoundCard;
