import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Contact = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Container id="Contact">
            <Wrapper>
                <Title>Contact</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    Feeling to give me an Internship, then please you're welcome, contact me!!!
                </Desc>
                <div
                    className="visme_d"
                    data-title="Connect with Atheeq"
                    data-url="n0edoj8z-connect-with-atheeq"
                    data-domain="forms"
                    data-full-page="false"
                    data-min-height="500px"
                    data-form-id="84552"
                ></div>
            </Wrapper>
        </Container>
    );
};

export default Contact;
