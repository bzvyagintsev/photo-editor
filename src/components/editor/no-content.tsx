export function NoContent() {
  return (
    <div className="col-span-6 row-span-2 flex items-center justify-center">
      <div className="flex h-1/2 w-4/5 flex-col items-center justify-center rounded-xl border-2 border-dashed">
        <p className="text-center text-muted-foreground">
          Choose photo to start editing
        </p>
      </div>
    </div>
  );
}
