import { useEditorStore } from '@/stores/editor';

export function MetaInfo() {
  const { imageDetails } = useEditorStore();

  if (!imageDetails) {
    return null;
  }

  return (
    <div className="text-center">
      <h3 className="font-medium">Photo by {imageDetails.author}</h3>
      <p className="text-sm text-muted-foreground">ID: {imageDetails.id}</p>
    </div>
  );
}
