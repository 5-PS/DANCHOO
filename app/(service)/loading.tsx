import Image from "next/image";

export default function Loading () {
  return(
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen">
    <Image src='/icons/loading.svg' width={200} height={200} alt="로딩 UI"/>
</div>
  )
}