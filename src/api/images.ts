import { useMutation } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { ImageDetails, ImageDetailsSchema } from '@/types/images';

export const getImageById = (id: string): Promise<ImageDetails> =>
  api.get(`/id/${id}/info`).then((res) => ImageDetailsSchema.parse(res.data));

export const getRandomImage = (): Promise<ImageDetails> =>
  api
    .get(`/seed/editor/info`)
    .then((res) => ImageDetailsSchema.parse(res.data));

export const useImageById = (options = {}) => {
  return useMutation({
    ...options,
    mutationFn: getImageById,
  });
};

export const useRandomImage = (options = {}) => {
  return useMutation({
    ...options,
    mutationFn: getRandomImage,
  });
};
