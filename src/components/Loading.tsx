export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-500"></div>
      <p className="text-lg font-semibold ml-4">Loading...</p>
    </div>
  )
}
