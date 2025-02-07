import { z } from 'zod';

export const ImageDetailsSchema = z.object({
  id: z.string(),
  author: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  download_url: z.string(),
});

export type ImageDetails = z.infer<typeof ImageDetailsSchema>;
