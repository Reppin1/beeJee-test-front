import { useEffect } from 'react';

import { Divider } from '../Divider/Divider';
import { CloseIcon } from '../../../assets/icons/CloseIcon';

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Close,
  Flex,
  Closee,
} from './style';
import { useTypedDispatch } from "../../../hooks/useTypedDispatch/useTypedDispatch";

export const Dialog = (props: any) => {
  const {
    open,
    onOpenChange,
    title,
    cancel,
    action,
    trigger,
    children,
    closeIcon,
    css,
    className,
  } = props;

  const dispatch = useTypedDispatch();

  const close = () => {
    if (onOpenChange) {
      dispatch(onOpenChange(false));
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');

    if (open) {
      body?.classList.add('overflow-hidden');
      return;
    }

    body?.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Trigger asChild>{trigger}</Trigger>}
      <Portal>
        <Overlay onClick={close} />
        <Content css={css} className={className}>
          {title && (
            <>
              <Title>{title}</Title>
              <Divider />
            </>
          )}
          {children}
          {closeIcon && (
            <Closee
              onClick={() => {
                close();
              }}
            >
              <CloseIcon />
            </Closee>
          )}
          {
            <Flex>
              {cancel && <Close asChild>{cancel}</Close>}
              {action && <>{action}</>}
            </Flex>
          }
        </Content>
      </Portal>
    </Root>
  );
};
