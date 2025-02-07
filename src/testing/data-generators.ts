import { randUserName, randNumber } from '@ngneat/falso';

import { ImageDetails } from '@/types/images';

export const generateImageDetails = (): ImageDetails => ({
  id: randNumber().toString(),
  author: randUserName(),
  width: 4288,
  height: 2848,
  url: 'https://unsplash.com/photos/oyrtK2hJqBY',
  download_url: 'https://picsum.photos/id/717/4288/2848',
});
