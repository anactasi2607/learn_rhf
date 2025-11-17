import {useState, useCallback} from 'react';
import {ConfirmDialogOptions} from './types';

export const useConfirmDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogProps, setDialogProps] = useState<ConfirmDialogOptions>({});
  const [resolvePromise, setResolvePromise] = useState<(value: boolean) => void>();

  const showConfirmDialog = useCallback((options: ConfirmDialogOptions = {}): Promise<boolean> => {
    return new Promise(resolve => {
      setIsOpen(true);
      setDialogProps(options);
      setResolvePromise(() => resolve);
    });
  }, []);

  const handleConfirm = useCallback(() => {
    setIsOpen(false);
    resolvePromise?.(true);
    setResolvePromise(undefined);
  }, [resolvePromise]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
    resolvePromise?.(false);
    setResolvePromise(undefined);
  }, [resolvePromise]);

  return {
    isOpen,
    dialogProps,
    showConfirmDialog,
    handleConfirm,
    handleCancel,
  };
};
