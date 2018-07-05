import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated, config } from 'react-spring';
import styled from 'styled-components';
import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          native
          config={config.gentle}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          {on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{ transform: styles.y.interpolate(y => `translate3d(0, ${y}px, 0)`), opacity: styles.opacity }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  {children}
                </ModalCard>
                <Background style={{ opacity: styles.bgOpacity }} onClick={toggle} />
              </ModalWrapper>
            ))}
        </Transition>
      </Portal>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
};

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimCard = Card.withComponent(animated.div);

const ModalCard = AnimCard.extend.attrs({ elevation: 4 })`
  position: relative;
  z-index: 9;
  min-width: 320px;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  ${absolute({ y: 'top', x: 'right' })};
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled(animated.div)`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export default Modal;
