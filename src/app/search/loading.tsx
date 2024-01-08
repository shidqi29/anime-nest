import { Card, Skeleton } from "@nextui-org/react";

const Loading = () => {
  return (
    <>
      <div className="m-4">
        <Skeleton className="w-1/5 rounded-lg">
          <div className="h-5 w-full rounded-lg bg-white"></div>
        </Skeleton>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Card key={idx} className="h-60 w-44 space-y-2" radius="lg">
            <Skeleton className="h-full rounded-lg">
              <div className="h-full rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 p-2">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-white"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Loading;
