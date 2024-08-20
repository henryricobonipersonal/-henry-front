export type WithStatus<T> = T & { pendingRequestStatus?: 'pending' | 'error' }
