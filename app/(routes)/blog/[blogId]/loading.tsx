import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        <Skeleton className="mt-5 w-full h-16 rounded-xl" />
        <div className="mt-8 grid grid-cols-1 gap-4">
          <Skeleton className="w-full h-6 rounded-xl" />
          <Skeleton className="w-full h-6 rounded-xl" />
          <Skeleton className="w-full h-6 rounded-xl" />
          <Skeleton className="w-full h-6 rounded-xl" />
          <Skeleton className="w-full h-6 rounded-xl" />
          <Skeleton className="w-full h-6 rounded-xl" />
        </div>
      </div>
    </Container>
  );
}

export default Loading;
