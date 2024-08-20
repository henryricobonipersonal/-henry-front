import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IVoucherDTO } from '@/dtos/voucher-dto';
import { VOUCHER_QUERY_KEY } from '@/hooks/voucher/use-vouchers';
import { vouchersService } from '@/services/vouchers';

export function useUpdateVoucher() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: vouchersService.update,
    onMutate: (variables) => {
      const previousVouchers =
        queryClient.getQueryData<IVoucherDTO[]>(VOUCHER_QUERY_KEY);

      queryClient.setQueryData<IVoucherDTO[]>(VOUCHER_QUERY_KEY, (old) =>
        old?.map((voucher) =>
          voucher.id === variables.id ? { ...voucher, ...variables } : voucher,
        ),
      );

      return { previousVouchers };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: VOUCHER_QUERY_KEY });

      queryClient.setQueryData<IVoucherDTO[]>(
        VOUCHER_QUERY_KEY,
        context?.previousVouchers,
      );
    },
  });

  return {
    updateVoucher: mutateAsync,
    isLoading: isPending,
  };
}
