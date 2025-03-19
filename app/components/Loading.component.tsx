import { LoadingProps } from "~/interfaces/Loading.interface";

export function Loading(props: LoadingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-vivid"></div>
      <p className="ml-4 text-sky-vivid text-lg font-medium">{props.message}</p>
    </div>
  );
}
