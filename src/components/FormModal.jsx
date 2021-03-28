import React from "react";
import PersonForm from "./PersonForm";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from "../styled-components";

export const FormModal = ({ cont, showModal, setShowModal, person }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {showModal ? (
        <Background>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <PersonForm user={person && person} />
              </ModalContent>
              <CloseModalButton
                onClick={() => setShowModal((value) => !value)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
