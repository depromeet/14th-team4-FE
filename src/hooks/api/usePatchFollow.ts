import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosRequest } from '@api/api-config';

const patchFollow = (userId: number): Promise<void> => {
  return axiosRequest('patch', `/api/v1/follows/${userId}`);
};

export const usePatchFollow = (): UseMutationResult<
  void,
  AxiosError,
  number
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['patch-follow'],
    mutationFn: (userId) => patchFollow(userId),
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({
        queryKey: ['get-following-list'],
        refetchType: 'all',
      });
      queryClient.invalidateQueries({
        queryKey: ['get-feed-list', {}],
        refetchType: 'all',
      });
      if (userId !== undefined) {
        queryClient.invalidateQueries({
          queryKey: ['get-userProfile', userId],
        });
      }
    },
  });
};
