import { Skeleton } from "@/components/ui/skeleton";


const Loading = () => {
    return (
        <div>
            <Skeleton className="w-[400px] h-[400px] mt-20 bg-black rounded-full mx-auto" />
        </div>
    );
};

export default Loading;