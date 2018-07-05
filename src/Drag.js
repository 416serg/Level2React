import React, { Component } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import styled from 'styled-components';
import { Card } from 'Elements';

const AnimCard = Card.withComponent(animated.div);

const DragCard = AnimCard.extend`
  height: 300px;
  position: absolute;
`;

const CardContainer = styled(animated.div)`
  position: relative;
  background: #ccc;
  max-width: 320px;
  height: 300px;
  margin: 0 auto;
  border-radius: 5px;
`;

export default class Drag extends Component {
  onUp = xDelta => () => {
    console.log(xDelta);
    if (xDelta < -300) {
      alert('Remove Card!');
    } else if (xDelta > 300) {
      alert('Accept Card!');
    }
  };

  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (
          <Spring native to={{ x: down ? xDelta : 0 }} immediate={name => down && name === 'x'}>
            {({ x }) => (
              <CardContainer
                style={{
                  background: x.interpolate({
                    range: [-300, 300],
                    output: ['#ff1c68', '#14d790'],
                    extrapolate: 'clamp',
                  }),
                }}
              >
                <DragCard
                  onMouseUp={this.onUp(xDelta)}
                  onTouchEnd={this.onUp(xDelta)}
                  elevation={4}
                  style={{
                    opacity: x.interpolate({
                      range: [-300, -100],
                      output: [0, 1],
                      extrapolate: 'clamp',
                    }),
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: 'clamp',
                        }),
                      ],
                      (x, rotate, opacity) => `translateX(${x}px) rotate(${rotate}deg)`
                    ),
                  }}
                >
                  <h1>Drag Me!</h1>
                </DragCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
