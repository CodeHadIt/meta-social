import NotFoundCard from "@/components/cards/not-found";

const NotFound = () => {
  return (
    <section className="max-w-[700px] mx-auto p-6 flex flex-col justify-center min-h-screen">
      <NotFoundCard purpose="notfound" route="home" />
    </section>
  );
};

export default NotFound;
