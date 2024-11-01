export default function LocationNotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The location you are looking for does not exist.
      </p>
    </div>
  );
}