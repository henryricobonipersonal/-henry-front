import { useMutation, useQueryClient } from '@tanstack/react-query';
import { VOUCHER_QUERY_KEY, type VouchersQueryData } from '@/hooks/voucher/use-vouchers';
import { vouchersService } from '@/services/vouchers';

export function useCreateVoucher() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: vouchersService.create,
    onMutate: (variables) => {
      const tmpVoucherId = String(Math.random());

      queryClient.setQueryData<VouchersQueryData>(VOUCHER_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpVoucherId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpVoucherId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: VOUCHER_QUERY_KEY });

      queryClient.setQueryData<VouchersQueryData>(VOUCHER_QUERY_KEY, (old) =>
        old?.map((voucher) =>
          voucher.id === context.tmpVoucherId ? data : voucher,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: VOUCHER_QUERY_KEY });

      queryClient.setQueryData<VouchersQueryData>(VOUCHER_QUERY_KEY, (old) =>
        old?.map((voucher) =>
          voucher.id === context?.tmpVoucherId
            ? { ...voucher, pendingRequestStatus: 'error' }
            : voucher,
        ),
      );
    },
  });

  return {
    createVoucher: mutateAsync,
    isLoading: isPending,
  };
}
