import styled from "styled-components";


export const DivContainer = styled.div`
    max-width: 1037px;
    height: 631px;
    margin: 2rem auto;
    padding: 0 1rem;
    justify-content: center;
    align-content: center;
    align-items: center;

    display: flex;
    grid-template-columns: 256px 1fr;
    gap: 32px;

    @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }

    grid-template-columns: 1fr;
    
    }
`;



const MusicPlayerBase = styled.div`
    background: #2A2141;
    border-radius: 9.6px;
`;

export const MusicPlayerOne = styled(MusicPlayerBase)`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 266.48px;
    height: 498px;

    padding: 38.41px;

`;

export const MusicPlayerTwo = styled(MusicPlayerBase)`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    width: 22.35rem;
    height: 266.68px;

    padding: 28.81px;

`;

export const MusicPlayerThree = styled(MusicPlayerBase)`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 22.35rem;
    height: 196.26px;

    padding: 28.81px;

`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    h1 {
        font-size: 24.01px;
        font-weight: bold;
        margin-bottom: 9.6px;
    }

    span{
        font-size: 19.21px;
        font-weight: 400;
        color: #C4C4CC;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    svg{
        color: white;
        cursor: pointer;
    }
`;